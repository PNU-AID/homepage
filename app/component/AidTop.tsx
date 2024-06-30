'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import recruitData from '@/public/recruit.json';

interface recruitDate {
    start: string;
    end: string;
    time_zone: any;
}

export default function AidTop() {
    const [lang, setLang] = useState<string>('ko');
    const SearchParams = useSearchParams();

    useEffect(() => {
        const queryLang = SearchParams.get('lang');
        if (queryLang == 'ko' || queryLang == 'en') {
            setLang(queryLang);
        }
    }, [SearchParams]);

    const [recruitDate, setRecruitDate] = useState<recruitDate>({
        start: '2024-01-01',
        end: '2024-01-02',
        time_zone: null,
    });

    const dateConverter = (origin: string) => {
        const dateArr = origin.split('-');
        return `${dateArr[0].slice(2, 4)}.${dateArr[1]}.${dateArr[2]}`;
    };

    useEffect(() => {
        if (recruitData) {
            setRecruitDate(recruitData);
        }
    }, []);

    return (
        <section className="" id="about_us">
            <div className="flex flex-col gap-y-2 md:justify-center">
                <h1 className="text-9xl font-black md:text-8xl">AID</h1>
                <h6 className="text-2xl md:text-lg md:font-bold">AI Engineering & Research in PNU</h6>
                {lang == 'ko' ? (
                    <p className="text-sm text-gray-500">
                        AID는 AI 개발에 관심있는 사람들이 함께 스터디와 세미나를 진행하고, 대회와 프로젝트를 하며
                        발전하는 동아리입니다.
                        <br className="md:hidden" />
                        우리는 같은 진로를 꿈꾸는 사람들과의 네트워크를 넓히고 개인 및 단체의 실력 발전을 목표로 하고
                        있습니다.
                        <br />
                        <br />
                        본 동아리는 부산대학교 AI 동아리 조준수 교수님의 지도 아래,
                        <br className="md:hidden" />
                        부산대학교 정보컴퓨터공학 학생들을 중심으로 2022년 1학기에 설립되어 다양한 학생들이 함께 하고
                        있습니다.
                    </p>
                ) : (
                    <p className="text-sm text-gray-500">
                        AID is a club where people interested in AI development conduct studies and seminars together,
                        and develop through competitions and projects. We aim to expand our network with people who
                        dream of the same career path and develop individual and group skills. <br />
                        <br />
                        Under the guidance of Professor Cho Joon-soo of the AI club at Pusan National University, it was
                        established in the first semester of 2022 with students from Pusan National University's
                        Computer Science and Engineering, and various students are working together.
                    </p>
                )}
                {
                    /* 현재 날짜가 모집 기간이라면 Block 표시
          public/recruit.json 파일에 모집기간 저장
          Dev 환경에서 recruit.json 파일을 갱신하는 버튼은 HistorySection.tsx 컴포넌트에 주석처리 해둠 */

                    new Date(recruitDate.start) <= new Date() && new Date() <= new Date(recruitDate.end) ? (
                        <div className="flex w-full items-center gap-3 md:mt-8 md:flex-col-reverse">
                            <button className="text-nowrap bg-aid-blue px-4 py-2 text-white md:w-full md:px-2 md:py-2 md:text-sm">
                                {lang == 'ko' ? '동아리 지원하기' : 'Apply'}
                            </button>
                            <p className="w-full text-nowrap md:text-start md:text-sm">
                                {lang == 'ko' ? '모집기간' : 'Recruitment Period'} - {dateConverter(recruitDate.start)}~
                                {dateConverter(recruitDate.end)}
                                <br />
                                {lang == 'ko'
                                    ? '모집 대상 - 인공지능을 좋아하는 누구나'
                                    : 'Target Audience - PNU students who love AI'}
                            </p>
                        </div>
                    ) : null
                }
            </div>
        </section>
    );
}
