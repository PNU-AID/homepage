"use client"
import { Client } from "@notionhq/client";
import { useEffect, useState } from "react";

export default function History() {
  const notionKey = process.env.REACT_APP_NOTION_KEY;
  const pageID: string = "28dfae8dfc694303861f61738dd50390?v=4fb9cec3e72a4faaa6bd096fc7fa76ba&pvs=4";
  const notion = new Client({ auth: notionKey})
  
  useEffect(() => {
    const notionFetcher = async () => {
      const response = await notion.blocks.retrieve({
        block_id: pageID,
      });
      console.log(response);
    }

    notionFetcher();
  } , [])
  return (
    <div className="">
    </div>
  );
}
