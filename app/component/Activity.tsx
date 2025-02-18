'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import config from '../../next.config.mjs';

interface studyUrl {
    [key: string]: string;
}

export default function Activity() {
    const [studyUrl, setStudyUrl] = useState<studyUrl>({
        '2023': '',
        '2024': '',
    });

    const [ActivityUrl, setActivityUrl] = useState<string>('');

    const [JiokCampUrl, setJiokCampUrl] = useState<string>('');

    const urlFetcher = async () => {
        const res = await fetch(`${config.basePath}/url.json`);
        if (res.status == 200) {
            const json = await res.json();
            if (json.Study) setStudyUrl(json.Study);
            if (json.Activity) setActivityUrl(json.Activity);
            if (json.AID.JiokCamp) setJiokCampUrl(json.AID.JiokCamp)
        }
    };

    useEffect(() => {
        urlFetcher();
    }, []);

    const [lang, setLang] = useState<string>('ko');
    const SearchParams = useSearchParams();

    useEffect(() => {
        const queryLang = SearchParams.get('lang');
        if (queryLang == 'ko' || queryLang == 'en') {
            setLang(queryLang);
        }
    }, [SearchParams]);

    return (
        <section className="" id="activity">
            <div className="flex h-48 md:h-44 md:flex-col">
                <div className="flex flex-1 flex-col justify-between bg-sky-500 px-4 py-4 text-white md:w-full">
                    <h3 className="text-4xl font-black md:text-3xl">{lang == 'ko' ? '스터디' : 'Study'}</h3>
                    <p className="text-lg font-bold md:text-base">
                        {lang == 'ko'
                            ? '딥러닝, 머신러닝, Python 등 그룹 스터디'
                            : 'Group study on AI, ML, DL, and Python'}
                    </p>
                </div>
                <div className="flex items-stretch justify-between">
                    {Object.keys(studyUrl).map((year, idx) => {
                        return (
                            <Link
                                className="flex w-full items-center justify-center bg-sky-600 px-4 text-center text-2xl font-black text-white hover:bg-gray-700 md:py-2 md:text-lg"
                                key={idx}
                                href={studyUrl[year]}
                                target="_blank"
                            >
                                {year}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="flex h-48 md:h-40">
                <div className="flex w-full flex-col justify-between bg-aid-red px-4 py-4 text-white md:w-full">
                    <h3 className="text-4xl font-black md:text-3xl">{lang == 'ko' ? '세미나' : 'Seminar'}</h3>
                    <p className="text-lg font-bold md:text-base">
                        {lang == 'ko'
                            ? 'AI 논문 리뷰, 칼럼, 취업 수기 등 발표'
                            : 'AI paper reviews, columns, and job search experiences'}
                    </p>
                </div>
            </div>
            <div className="flex h-48 md:h-44 md:flex-col">
                <Link
                    target="_blank"
                    href={ActivityUrl}
                    className="flex w-full flex-1 flex-col justify-between bg-green-600 px-4 py-4 text-white hover:bg-green-700 md:w-full"
                >
                    <h3 className="text-4xl font-black md:text-3xl">
                        {lang == 'ko' ? '개발 및 대외 활동' : 'Extracurricular Activities'}
                    </h3>
                    <p className="text-lg font-bold md:text-base">
                        {lang == 'ko'
                            ? '사이드 프로젝트, 해커톤 등 대외 활동'
                            : 'Side projects, AI competitions, and hackathons'}
                    </p>
                </Link>
                <div className="flex items-stretch justify-between">
                    <Link
                        className="flex w-full text-nowrap items-center justify-center bg-green-800 px-4 text-center text-2xl font-black text-white hover:bg-gray-700 md:py-2 md:text-lg"
                        href={JiokCampUrl}
                        target="_blank"
                    >
                        지옥캠프<br className='md:hidden'/>(AID 대회)
                    </Link>
                </div>
            </div>
        </section>
    );
}
