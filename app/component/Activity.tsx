"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface studyUrl {
  [key: string]: string;
}

export default function Activity() {
  const [studyUrl, setStudyUrl] = useState<studyUrl>({
    '2023': "",
    '2024': "",
  });

  const [ActivityUrl, setActivityUrl] = useState<string>("");

  const urlFetcher = async () => {
    const res = await fetch('/url.json');
    if (res.status == 200) {
      const json = await res.json();
      if (json.Study) setStudyUrl(json.Study);
      if (json.Activity) setActivityUrl(json.Activity);
    }
  }

  useEffect(()=>{
    urlFetcher()
  }, []);

  const [lang, setLang] = useState<string>('ko');
  const SearchParams = useSearchParams();

  useEffect(() => {
    const queryLang = SearchParams.get('lang');
    if (queryLang == 'ko' || queryLang == 'en') {
      setLang(queryLang);
    }
  }, [SearchParams])

  return (
    <section className="" id="activity">
      <div className="flex h-48 md:flex-col">
        <div className="flex flex-1 flex-col bg-sky-500 justify-between text-white px-4 py-4 md:w-full">
          <h3 className="text-4xl font-black">
            { lang == 'ko' ? "스터디" : "Study" }
          </h3>
          <p className="text-lg font-bold">
            {
              lang == 'ko' ?
              "딥러닝, 머신러닝, Python 등 그룹 스터디" : "Group study on AI, ML, DL, and Python"
            }
          </p>
        </div>
        <div className="flex justify-between items-stretch">
          {
            Object.keys(studyUrl).map((year, idx) => {
              return (
                <Link 
                  className="flex px-4 w-full text-center items-center justify-center text-white text-2xl font-black bg-sky-600 hover:bg-gray-700 md:py-2"
                  key={idx} 
                  href={studyUrl[year]} 
                  target="_blank"
                >
                  {year}
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className="flex h-48">
        {/* <div className="flex-1 bg-gray-300 md:hidden">
          사진 | 일러스트
        </div> */}
        <div className="w-full flex flex-col bg-aid-red justify-between text-white px-4 py-4 md:w-full">
          <h3 className="text-4xl font-black">
            { lang == 'ko' ? "세미나" : "Seminar"}
          </h3>
          <p className="text-lg font-bold">
            {
              lang == 'ko' ?
              "AI 논문 리뷰, 칼럼, 취업 수기 등 발표" :
              "AI paper reviews, columns, and job search experiences"
            }
          </p>
        </div>
      </div>
      <div className="flex h-48">
        {/* <div className="flex-1 bg-gray-300 md:hidden">
          사진 | 일러스트
        </div> */}
        <Link target="_blank" href={ActivityUrl} className="w-full flex flex-col bg-green-600 justify-between text-white px-4 py-4 hover:bg-green-700 md:w-full">
          <h3 className="text-4xl font-black">
            { lang == 'ko' ? "개발 및 대외 활동" : "Extracurricular Activities"}
          </h3>
          <p className="text-lg font-bold">
            {
              lang == 'ko' ?
              "사이드 프로젝트, 해커톤 등 대외 활동" :
              "Side projects, AI competitions, and hackathons"
            }
          </p>
        </Link>
      </div>
    </section>
  );
}
