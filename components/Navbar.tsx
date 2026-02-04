
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (pathname !== href) {
      router.push(href);
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Team', href: '/team' },
    { label: 'Insights', href: '/#insights' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/mountains-icon.svg" 
            alt="Pinnacle Consulting" 
            width={32} 
            height={32}
            priority
          />
          <span className="text-xl font-bold text-deepBlue">Pinnacle Consulting</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="text-deepBlue hover:text-gold transition font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button className="border-2 border-deepBlue px-5 py-2 rounded-md text-deepBlue font-semibold hover:bg-deepBlue hover:text-white transition">
            Book Discovery Call
          </button>
        </div>

        {/* Mobile Toggle - Larger with smooth transition */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-deepBlue text-4xl transition-transform duration-300"
          aria-label="Toggle menu"
        >
          <span className={`inline-block transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            ☰
          </span>
        </button>
      </div>

      {/* ===== MOBILE MENU OVERLAY (MATCHED EXACTLY) ===== */}
      <div
        className={`absolute top-full left-0 w-full bg-white transition-all duration-400 ease-in-out border-t-2 border-gray-100 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="w-full text-center py-5 border-b-2 border-gray-100 text-deepBlue text-lg font-medium hover:text-gold transition last:border-0 bg-white"
            >
              {link.label}
            </button>
          ))}

          <div className="py-8 w-full flex justify-center bg-gray-50">
            <button
              onClick={() => setIsOpen(false)}
              className="border-2 border-deepBlue px-6 py-3 rounded-xl text-deepBlue font-bold hover:bg-deepBlue hover:text-white transition shadow-sm flex items-center justify-center"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      </div>
      {/* ===== END OVERLAY ===== */}
    </nav>
  );
};

export default Navbar;
