'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import config from '@/next.config.mjs';

interface HistoryAID {
    title: string;
    url: string;
    year: number;
}

export default function HistorySection() {
    const [data, setData] = useState<HistoryAID[]>([]);

    const currentYear = new Date().getFullYear();
    const yearsArray = [];
    for (let year = 2023; year <= currentYear; year++) {
        yearsArray.push(year);
    }

    // const notionFetcher = async () => {
    //     const response = await fetch(`${config.basePath}/api/dev`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     console.log(response.status);
    // };

    useEffect(() => {
        const historyFetcher = async () => {
            const res = await fetch(`${config.basePath}/history.json`);
            if (res.status == 200) {
                const json = await res.json();
                setData(json);
            }
        };

        historyFetcher();
    }, []);

    return (
        <section className="" id="history">
            {/* dev 환경, Notion에서 데이터 갱신하는 버튼 */}
            {/* <button className="bg-red-500 px-5 py-5 text-white" onClick={(e) => notionFetcher()}>
                json 생성
            </button> */}
            {yearsArray.map((year, index) => {
                return (
                    <div className="flex justify-between gap-36 md:mt-12 md:flex-col md:gap-y-4" key={year}>
                        <h1 className="px-8 py-5 md:px-4 md:py-2 md:text-2xl md:font-bold">{year}</h1>
                        <div className="flex flex-1 flex-col">
                            {data.map((element, index) => {
                                if (element.year == year)
                                    return (
                                        <Link
                                            target="_blank"
                                            href={element.url}
                                            className="border-b-2 border-gray-300 px-8 py-5 text-right hover:bg-gray-300"
                                            key={index}
                                        >
                                            {element.title}
                                        </Link>
                                    );
                            })}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
