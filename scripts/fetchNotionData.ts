import { writeFile } from 'fs/promises';

async function fetchNotionData(pageID: string, notionKey: string | undefined): Promise<any> {
  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${pageID}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
        Authorization: `Bearer ${notionKey}`
      }
    });
    if (response.status !== 200) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

(async () => {
  const notionKey = process.env.NOTION_KEY;
  const pageID: string = "28dfae8dfc694303861f61738dd50390";

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
      year: year
    };
  });

  try {
    await writeFile('public/history.json', JSON.stringify(modified));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  process.exit(0);
})();
