const { writeFile } = require('fs').promises;

async function fetchNotionData(pageID: string, notionKey: string | undefined): Promise<any> {
    try {
        const response = await fetch(`https://api.notion.com/v1/databases/${pageID}/query`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28',
                'Authorization': `Bearer ${notionKey}`,
            },
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

    // 1. AID 이력 가져오기
    const pageID: string = '11ef0e0d194f815fa857e2aff20b239c';

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
        await writeFile('public/history.json', JSON.stringify(modified));
    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    // 2. AID 모집일정 가져오기

    const recruitPageID: string = '11ef0e0d194f8163a069f5c2e6b18f24';
    const recruitDataID: string = '11ef0e0d-194f-8180-a354-fb5a06050f65';

    let recruitDate = {
        start: '2024-01-01',
        end: '2024-01-01',
        time_zone: null,
    };
    let recruitUrl = '';

    const recruitData = await fetchNotionData(recruitDataID, notionKey);
    recruitData.results.map((element: any) => {
        if (element.id == recruitPageID) {
            recruitDate = element.properties.날짜.date;
            recruitUrl = element.properties.비고.rich_text[0].href;
        }
    });

    try {
        await writeFile('public/recruit.json', JSON.stringify({ recruitDate, recruitUrl }));
    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    process.exit(0);
})();
