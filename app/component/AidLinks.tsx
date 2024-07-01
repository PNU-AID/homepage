'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import urls from '@/public/url.json';
import config from '@/next.config.mjs';

export default function AidLinks() {
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
        <section
            id="aid_links"
            className="flex items-center justify-center gap-16 text-xl font-black md:flex-col md:gap-2"
        >
            <Link
                className="flex w-36 flex-col items-center border-2 border-gray-300 p-8 hover:bg-gray-300 md:w-full md:p-4"
                target="_blank"
                href={aidUrl.github}
            >
                <Image alt="github_logo" width="50" height="1" src={`${config.basePath}/github-mark.svg`} />
                <text>GitHub</text>
            </Link>
            <Link
                className="flex w-36 flex-col items-center border-2 border-gray-300 p-8 hover:bg-gray-300 md:w-full md:p-4"
                target="_blank"
                href={aidUrl.notion}
            >
                <Image alt="notion_logo" width="50" height="1" src={`${config.basePath}/notion-mark.svg`} />
                <text>Notion</text>
            </Link>
            <Link
                className="flex w-36 flex-col items-center border-2 border-gray-300 p-8 hover:bg-gray-300 md:w-full md:p-4"
                target="_blank"
                href={aidUrl.velog}
            >
                <Image alt="velog_logo" width="50" height="1" src={`${config.basePath}/velog-mark.svg`} />
                <text>Velog</text>
            </Link>
        </section>
    );
}
