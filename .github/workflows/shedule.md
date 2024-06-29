# Notion API와 GitHub Action을 이용해 Serverless 유지하기

## GitHub Action 사용 이유

1. 동아리 정보는 Notion을 통해 갱신
2. Notion API를 이용해 데이터를 받아와 가공하려 했으나 Front 만으로 CORS 에러를 해결할 수 없었음
3. GitHub Action을 이용해 매 자정마다 자동으로 정적 파일 생성

## GitHub Action, yml 파일 살펴보기

```yml
name: Scheduled Notion Data Fetch

on:
  schedule:
    - cron: "0 15 * * *" # actions at midnight every day
  workflow_dispatch: # Allows manual triggering on GitHub UI
```

한국 시각으로 00시일 때마다 Action이 발동

```yml
jobs:
  fetch-and-update:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm install
```

steps에 속해있는 work를 순차적으로 실행함. <br>

1. action 가동을 위해선 actions/checkout을 시행해야함. node version을 20으로 맞춘다.

- > 현재(24.06.24) 기준 github action node 18 이하 버전은 **deprecated**

2. github node.js 환경에 @/package.json에 속한 모듈을 설치한다.

```yml
- name: Run the fetch and update script
  env:
    NOTION_KEY: ${{ secrets.NOTION_KEY }}
  run: npx ts-node ./scripts/fetchNotionData.ts
```

```ts
const data = await fetchNotionData(pageID, notionKey);
if (!data) {
  process.exit(1);
}

const modified = data.results.map((element: any) => {
  let year = 2023;
  element.properties.Tags.multi_select.forEach((tag: any) => {
    if (parseInt(tag.name)) year = parseInt(tag.name);
  });
  return {
    title: element.properties.Name.title[0].text.content,
    url: element.public_url,
    year: year,
  };
});

try {
  await writeFile("public/history.json", JSON.stringify(modified));
} catch (e) {
  console.error(e);
  process.exit(1);
}
```

3. fetchNotionData.ts를 실행하여 AID 동아리 Notion API를 이용하여 `history.json` 정적 파일을 갱신한다.

```yml
- name: Check for changes
  id: git_diff
  run: |
    git fetch origin
    if git diff --exit-code public/history.json; then
      echo "CHANGES_DETECTED=false" >> $GITHUB_ENV
    else
      echo "CHANGES_DETECTED=true" >> $GITHUB_ENV
    fi

- name: Commit changes
  if: env.CHANGES_DETECTED == 'true'
  run: |
    git config --global user.name 'github-actions[bot]'
    git config --global user.email 'github-actions[bot]@users.noreply.github.com'
    git add public/history.json
    git commit -m 'Update history.json from GitHub Action'

- name: Push changes
  if: env.CHANGES_DETECTED == 'true'
  uses: ad-m/github-push-action@v0.6.0
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    branch: main
```

4. local(github ubuntu env)에서 `public/history.json`파일에 변화가 있는지 **git**으로 감지한 후 `env.CHANGES_DETECTED`에 True | False 업데이트
5. 변화가 있다면 github-actions[bot]이 **Commit**
6. 변화가 있다면 Commit 기록을 main 브런치에 **Push**
