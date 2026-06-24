"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [navbarStyle, setNavbarStyle] = useState<'transparent' | 'solid'>('transparent');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 50) {
        setNavbarStyle('transparent');
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
          setNavbarStyle('solid');
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isSolid = navbarStyle === 'solid';

  const navClasses = `fixed w-full z-50 transition-all duration-300 transform ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
  } ${
    isSolid
      ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
      : 'bg-transparent border-b border-transparent pt-2'
  }`;

  const textClasses = isSolid ? 'text-text-secondary hover:text-navy' : 'text-white/80 hover:text-white';
  const logoClasses = isSolid ? 'text-navy' : 'text-white';
  const logoAccentClasses = isSolid ? 'text-aviation' : 'text-white/90';
  const btnClasses = isSolid ? 'text-navy hover:text-aviation' : 'text-white hover:text-white/80';
  const primaryBtnClasses = isSolid ? 'bg-navy text-white hover:bg-opacity-90' : 'bg-white text-navy hover:bg-gray-100';
  const menuBtnClasses = isSolid ? 'text-text-secondary hover:text-navy hover:bg-gray-50' : 'text-white hover:bg-white/10';

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center transition-all duration-300">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className={`text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity ${logoClasses}`}>
              Aero<span className={logoAccentClasses}>View</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            <Link href="/airlines" className={`text-sm font-medium transition-colors ${textClasses}`}>
              Airlines
            </Link>
            <Link href="/aircraft" className={`text-sm font-medium transition-colors ${textClasses}`}>
              Aircraft
            </Link>
            <Link href="/seatmaps" className={`text-sm font-medium transition-colors ${textClasses}`}>
              Seat Maps
            </Link>
            <Link href="#about" className={`text-sm font-medium transition-colors ${textClasses}`}>
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className={`text-sm font-medium transition-colors px-4 py-2 ${btnClasses}`}>
              Log in
            </button>
            <button className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${primaryBtnClasses}`}>
              Sign up
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className={`p-2 rounded-md transition-colors focus:outline-none ${menuBtnClasses}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
