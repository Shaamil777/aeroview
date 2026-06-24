"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [navbarStyle, setNavbarStyle] = useState<'transparent' | 'solid'>('transparent');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

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

  const navLinks = [
    { href: '/airlines', label: 'Airlines' },
    { href: '/aircraft', label: 'Aircraft' },
    { href: '/seatmaps', label: 'Seat Maps' },
    { href: '#about', label: 'About' },
  ];

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center transition-all duration-300">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className={`text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity ${logoClasses}`}>
                Aero<span className={logoAccentClasses}>View</span>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${textClasses}`}>
                  {link.label}
                </Link>
              ))}
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
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 rounded-md transition-colors focus:outline-none ${menuBtnClasses}`}
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-subtle">
          <span className="text-xl font-bold text-navy tracking-tight">
            Aero<span className="text-aviation">View</span>
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full text-text-secondary hover:text-navy hover:bg-gray-50 transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col px-6 py-6 gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-navy py-3 px-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="px-6 pb-8 flex flex-col gap-3 border-t border-border-subtle pt-6">
          <button className="w-full text-sm font-medium text-navy py-2.5 px-4 rounded-xl border border-border-subtle hover:bg-gray-50 transition-colors">
            Log in
          </button>
          <button className="w-full px-5 py-2.5 rounded-xl text-sm font-medium bg-navy text-white hover:bg-navy/90 transition-all shadow-sm">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
