"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import urls from "@/public/url.json";

export default function AidLinks() {
  const [aidUrl, setAidUrl] = useState({
    notion: "",
    github: "",
    velog: "",
  });

  const urlFetcher = async () => {
    const json = urls;
    setAidUrl(json.AID);
  };

  useEffect(() => {
    urlFetcher();
  }, []);

  return (
    <section
      id="aid_links"
      className="flex items-center justify-center gap-20 font-black text-xl md:gap-2 md:flex-col"
    >
      <Link
        className="flex flex-col items-center p-8 border-2 border-gray-300 md:w-full md:p-4"
        target="_blank"
        href={aidUrl.github}
      >
        <Image alt="github_logo" width="50" height="1" src="/github-mark.svg" />
        <text>GitHub</text>
      </Link>
      <Link
        className="flex flex-col items-center p-8 border-2 border-gray-300 md:w-full md:p-4"
        target="_blank"
        href={aidUrl.notion}
      >
        <Image alt="notion_logo" width="50" height="1" src="/notion-mark.svg" />
        <text>Notion</text>
      </Link>
      <Link
        className="flex flex-col items-center p-8 border-2 border-gray-300 md:w-full md:p-4"
        target="_blank"
        href={aidUrl.velog}
      >
        <Image alt="velog_logo" width="50" height="1" src="/velog-mark.svg" />
        <text>Velog</text>
      </Link>
    </section>
  );
}
