'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Logo from '@/app/component/Logo';
import urls from '@/public/url.json';

export default function Footer() {
  const [lang, setLang] = useState<string>('ko');
  const SearchParams = useSearchParams();

  useEffect(() => {
    const queryLang = SearchParams.get('lang');
    if (queryLang == 'ko' || queryLang == 'en') {
      setLang(queryLang);
    }
  }, [SearchParams])

  const [aidUrl, setAidUrl] = useState({
    notion: "",
    github: "",
    velog: "",
  });

  const urlFetcher = async () => {
    const json = urls;
    setAidUrl(json.AID);
  }

  useEffect(()=>{
    urlFetcher()
  }, []);

  return (
    <footer className="flex m-auto top-0 w-4/5 py-3 flex-col items-between space-y-5">
      <div className="flex justify-between md:flex-col">
        <div className="flex-col gap-5">
          <Logo/>
          <div className="flex font-semibold text-sm">
            <Link
              className="px-3 py-5"
              target="_blank"
              href={aidUrl.github}
            >
              <Image alt="github_logo" width="30" height="1" src="/github-mark.svg"/>
            </Link>
            <Link
              className="px-3 py-5"
              target="_blank"
              href={aidUrl.notion}
            >
              <Image alt="github_logo" width="30" height="1" src="/notion-mark.svg"/>
            </Link>
            <Link
              className="px-3 py-5"
              target="_blank"
              href={aidUrl.velog}
            >
              <Image alt="github_logo" width="30" height="1" src="/velog-mark.svg"/>
            </Link>
          </div>
        </div>
        <div className="flex-col text-sm">
          <h1 className="font-black text-lg">Contact</h1>
          <h3>{ lang == 'en' ? '+82 ' : '0' }10-5495-4551</h3>
          <h3>{ lang == 'ko' ? '회장 강준우' : 'Chairman - Junwoo Kang' } (jangtai4@pusan.ac.kr)</h3>
          <h3>{ lang == 'ko' ? '부회장 손봉국' : 'Vice Chairman - Son Bong-guk' } (sonbongguk5@gmail.com)</h3>
          <h3>{ lang == 'ko' ? '부산대학교 제 6공학관(컴퓨터공학관)' : 'Pusan National University, Engineering Bldg. 6 (Computer Engineering Bldg.)' }</h3>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">AID (AI Developers) in PNU © 2022 ALL RIGHTS RESERVED</p>
        <p className="text-xs">Reproduction in whole or part without written permission is strictly prohibited</p>
      </div>
    </footer>
  );
}