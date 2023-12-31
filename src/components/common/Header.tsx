import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../button/Button';
import { routerData } from '../../router';
import { isNotAuthPage } from '../../utils/location';
import MenuIconSvg from '../../assets/menu-icon.svg?react';

function Header() {
  const location = useLocation();
  const headerData = routerData.filter((item) => isNotAuthPage(item.path));

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      setIsExpanded(false);
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsExpanded(false);
  }, [location]);

  return (
    <>
      <header
        className={[
          'fixed flex items-center w-full grow z-[99999] justify-between sm:justify-evenly',
          'transition-all duration-300 h-[60px]',
          lastScrollY > 0 || isExpanded ? 'bg-white' : 'bg-transparent',
          isVisible ? '' : '-translate-y-full',
        ].join(' ')}
      >
        {/* TODO: 로고 이미지로 대체해야함. */}
        <h3
          className={[
            'flex justify-start ml-6 text-2xl font-bold',
            'transition-all duration-300',
            lastScrollY > 0 || isExpanded ? 'text-black' : 'text-white',
          ].join(' ')}
          id="aid-logo"
        >
          AI Developers
        </h3>
        <MenuIconSvg
          className="sm:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
          width={70}
        />
        <nav
          className={[
            'flex flex-col absolute top-[60px] gap-0 sm:mb-4 w-full shadow-xl overflow-hidden',
            'sm:justify-end sm:w-fit sm:gap-0 sm:pt-2 sm:flex-row sm:shadow-none sm:static sm:mx-8 sm:my-2',
            'transition-all duration-300',
            isExpanded
              ? 'max-h-[500px] bg-white'
              : 'max-h-0 bg-transparent sm:max-h-[300px]',
          ].join(' ')}
        >
          {headerData.map((item) => (
            <Link key={item.label} to={item.path}>
              <Button
                className={
                  location.pathname.slice(1) === item.path ? 'font-bold' : ''
                }
                label={item.label}
                size="large"
              />
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Header;
