"use client"
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Navi() {
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
      console.log(nearestSection);
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
      const offsetTop = targetSection.offsetTop - navHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white top-0 w-full px-12 py-3 flex justify-between fixed top-0">
      <Logo/>
      <div className="flex items-center font-light space-x-16">
        <menu className="space-x-8">
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
          <a>Links</a>
        </menu>
        <menu>
          <button>한국어</button> | <button>ENG</button>
        </menu>
      </div>
    </nav>
  );
}
