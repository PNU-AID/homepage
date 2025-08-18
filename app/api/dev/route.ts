import { NextResponse, NextRequest } from 'next/server';
import { writeFile } from 'fs/promises';

// export const dynamic = 'force-dynamic'; // 노션 캐싱 방지

async function fetchNotionData(pageID: string, notionKey: string | undefined) {
    try {
        const response = await fetch(`https://api.notion.com/v1/databases/${pageID}/query`, {
            method: 'POST',
            cache: 'no-store',
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

export async function GET(request: NextRequest) {
    const notionKey = process.env.NOTION_KEY;

    // 1. AID 이력 가져오기
    const pageID: string = '11ef0e0d194f815fa857e2aff20b239c';

    const data = await fetchNotionData(pageID, notionKey);
    // console.log(data);
    if (!data) {
        return new NextResponse(null, {
            status: 500,
        });
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
        return new NextResponse(null, {
            status: 500,
        });
    }

    // 2. AID 모집일정 가져오기

    const recruitPageID: string = '11ef0e0d194f8163a069f5c2e6b18f24';
    const recruitDataID: string = '11ef0e0d-194f-8180-a354-fb5a06050f65';

    let recruitDate = {
        start: '2024-01-01',
        end: '2024-01-02',
        time_zone: null,
    };
    let recruitUrl = '';

    const recruitData = await fetchNotionData(recruitPageID, notionKey);

    recruitData.results.map((element: any) => {
        // console.log(element.id);
        if (element.id == recruitDataID) {
            console.log(element.properties.날짜.id);
            recruitDate = element.properties.날짜.date;
            recruitUrl = element.properties.비고.rich_text[0].href;

            console.log({ recruitDate, recruitUrl });
        }
    });

    try {
        await writeFile('public/recruit.json', JSON.stringify({ recruitDate, recruitUrl }));
    } catch (e) {
        console.error(e);
        return new NextResponse(null, {
            status: 500,
        });
    }

    return new NextResponse(null, {
        status: 200,
    });
}
