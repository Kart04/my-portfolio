"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-white font-bold text-xl">
              Karthik
            </Link>
          </div>
          
          <nav className="flex space-x-12">
            <Link 
              href="/" 
              className={pathname === '/' ? 'active-nav' : 'text-gray-300 hover:text-white transition duration-300'}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={pathname === '/about' ? 'active-nav' : 'text-gray-300 hover:text-white transition duration-300'}
            >
              About
            </Link>
            <Link 
              href="/skills" 
              className={pathname === '/skills' ? 'active-nav' : 'text-gray-300 hover:text-white transition duration-300'}
            >
              Skills
            </Link>
            <Link 
              href="/projects" 
              className={pathname === '/projects' ? 'active-nav' : 'text-gray-300 hover:text-white transition duration-300'}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={pathname === '/contact' ? 'active-nav' : 'text-gray-300 hover:text-white transition duration-300'}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
