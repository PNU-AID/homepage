'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from '@/app/component/logo';

export default function Footer() {
  const [aidUrl, setAidUrl] = useState({
    notion: "",
    github: "",
    velog: "",
  });

  const urlFetcher = async () => {
    const res = await fetch('/url.json');
    if (res.status == 200) {
      const json = await res.json();
      if (json.AID)
      setAidUrl(json.AID);
    }
  }

  useEffect(()=>{
    urlFetcher()
  }, []);

  return (
    <footer className="top-0 w-100 px-12 py-3 flex-col space-y-5">
      <div className="flex justify-between md:flex-col">
        <div className="flex-col gap-5">
          <Logo/>
          <div className="flex font-semibold text-sm">
            <Link
              className="px-3 py-5"
              target="_blank"
              href={aidUrl.github}
            >
              Github
            </Link>
            <Link
              className="px-3 py-5"
              target="_blank"
              href={aidUrl.notion}
            >
              Notion
            </Link>
            <Link
              className="px-3 py-5"
              target="_blank"
              href={aidUrl.velog}
            >
              Velog
            </Link>
          </div>
        </div>
        <div className="flex-col text-sm">
          <h1 className="font-black text-lg">Contact</h1>
          <h3>010-xxxx-xxxx</h3>
          <h3>회장 강준우 (@.com)</h3>
          <h3>부회장 손봉국 (@.com)</h3>
          <h3>부산대학교 제 6공학관(컴퓨터공학관)</h3>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">AID (AI Developers) in PNU © 2022 ALL RIGHTS RESERVED</p>
        <p className="text-xs">Reproduction in whole or part without written permission is strictly prohibited</p>
      </div>
    </footer>
  );
}