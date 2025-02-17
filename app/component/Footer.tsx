'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Logo from '@/app/component/Logo';
import urls from '@/public/url.json';
import config from '@/next.config.mjs';

export default function Footer() {
    const [lang, setLang] = useState<string>('ko');
    const SearchParams = useSearchParams();

    useEffect(() => {
        const queryLang = SearchParams.get('lang');
        if (queryLang == 'ko' || queryLang == 'en') {
            setLang(queryLang);
        }
    }, [SearchParams]);

    const [aidUrl, setAidUrl] = useState({
        notion: '',
        github: '',
        velog: '',
    });

    const urlFetcher = async () => {
        const json = urls;
        setAidUrl(json.AID);
    };

    useEffect(() => {
        urlFetcher();
    }, []);

    return (
        <footer className="items-between top-0 m-auto flex w-4/5 flex-col space-y-5 py-3 md:mt-16">
            <div className="flex justify-between md:flex-col">
                <div className="flex flex-col gap-5 md:flex-row">
                    <Logo />
                    <div className="flex text-sm font-semibold">
                        <Link className="px-3 py-5" target="_blank" href={aidUrl.github}>
                            <Image alt="github_logo" width="30" height="1" src={`${config.basePath}/github-mark.svg`} />
                        </Link>
                        <Link className="px-3 py-5" target="_blank" href={aidUrl.notion}>
                            <Image alt="github_logo" width="30" height="1" src={`${config.basePath}/notion-mark.svg`} />
                        </Link>
                        <Link className="px-3 py-5" target="_blank" href={aidUrl.velog}>
                            <Image alt="github_logo" width="30" height="1" src={`${config.basePath}/velog-mark.svg`} />
                        </Link>
                    </div>
                </div>
                <div className="flex-col text-sm md:space-y-2 md:text-center md:text-gray-500">
                    <h1 className="text-lg font-black md:hidden">Contact</h1>
                    <h3>aideveloper@pusan.ac.kr</h3>
                    <h3>{lang == 'ko' ? '회장 오지현' : 'Chairman - Jihyeon Oh'} (zeehy78@pusan.ac.kr)</h3>
                    <h3>{lang == 'ko' ? '부회장 곽도연' : 'Vice Chairman - Doyeon Gwak'} (gdy0210@naver.com)</h3>
                    <h3>
                        {lang == 'ko'
                            ? '부산대학교 제 6공학관(컴퓨터공학관)'
                            : 'Pusan National University, Engineering Bldg. 6 (Computer Engineering Bldg.)'}
                    </h3>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold md:whitespace-nowrap md:text-xs">
                    AID <text className="md:hidden">(AI Developers)</text> in PNU © 2022 ALL RIGHTS RESERVED
                </p>
                <p className="text-xs md:hidden">
                    Reproduction in whole or part without written permission is strictly prohibited
                </p>
            </div>
        </footer>
    );
}
