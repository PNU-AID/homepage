"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Logo from '@/app/component/Logo';

export default function Navi() {
  const [lang, setLang] = useState<string>('ko');
  const SearchParams = useSearchParams();

  useEffect(() => {
    const queryLang = SearchParams.get('lang');
    if (queryLang == 'ko' || queryLang == 'en') {
      setLang(queryLang);
    }
  }, [SearchParams])

  const [currentSection, setCurrentSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let nearestSection = '';
      let minDistance = Number.MAX_SAFE_INTEGER;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const centerY = window.scrollY + window.innerHeight / 2;
        const distance = Math.abs(sectionTop + sectionHeight / 2 - centerY);

        if (distance < minDistance) {
          minDistance = distance;
          nearestSection = section.id;
        }
      });

      setCurrentSection(nearestSection);
      // console.log(nearestSection);
    }

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(id);
    if (targetSection) {
      const navHeight = document.querySelector('nav')?.clientHeight || 0;
      const offsetTop = targetSection.offsetTop - navHeight - 30;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white top-0 w-full flex fixed left-0 right-0 justify-center items-center py-4 md:py-2">
      <nav className={'w-4/5 flex items-center md:w-full md:px-6'}>
        <Logo/>
        <div className="flex items-center font-light space-x-16 ml-auto">
          <menu className="space-x-8 md:hidden">
            <a
              className={currentSection == 'about_us' ? 'font-bold': ''}
              onClick={(e) => handleLinkClick(e, 'about_us')}
            >
              About Us
            </a>
            <a 
              className={currentSection == 'activity' ? 'font-bold': ''}
              onClick={(e) => handleLinkClick(e, 'activity')}
            >
              Activity
            </a>
            <a 
              className={currentSection == 'history' ? 'font-bold': ''}
              onClick={(e) => handleLinkClick(e, 'history')}
            >
              History
            </a>
            <a 
              className={currentSection == 'aid_links' ? 'font-bold': ''}
              onClick={(e) => handleLinkClick(e, 'aid_links')}
            >
              Links
            </a>
          </menu>
          <menu>
            <Link className={lang=='ko' ? "font-bold" : ""}
              href="/?lang=ko"
            >
              한국어
            </Link>
            <text> | </text>
            <Link className={lang=='en' ? "font-bold" : ""}
              href="/?lang=en"
            >
              ENG
            </Link>
          </menu>
        </div>
      </nav>

    </header>
  );
}
