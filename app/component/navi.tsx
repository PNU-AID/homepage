"use client"
import Logo from "./logo";
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

  return (
    <nav className="bg-white top-0 w-full px-12 py-3 flex justify-between fixed top-0">
      <Logo/>
      <div className="flex items-center font-light space-x-16">
        <menu className="space-x-8">
          <a href="#AboutUs" className={currentSection == 'AboutUs' ? 'font-bold': ''}>
            About Us
          </a>
          <a href="#Activity" className={currentSection == 'Activity' ? 'font-bold': ''}>
            Activity
          </a>
          <a href="#History" className={currentSection == 'History' ? 'font-bold': ''}>
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
