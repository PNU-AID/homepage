import { NextResponse, NextRequest } from "next/server";
import { writeFile } from "fs/promises";

export async function GET(request: NextRequest) {
  try {
    const notionKey = process.env.NOTION_KEY;
    const pageID: string = "28dfae8dfc694303861f61738dd50390";

    const response = await fetch(`https://api.notion.com/v1/databases/${pageID}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
        Authorization: `Bearer ${notionKey}`
      }
    });
    switch (response.status) {
      case 200:
        const data = await response.json();
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
        await writeFile('public/history.json', JSON.stringify(modified));
        return new NextResponse(null, {
          status: 200,
        });
    }
  } catch(e) {
    console.error(e);
  }
}