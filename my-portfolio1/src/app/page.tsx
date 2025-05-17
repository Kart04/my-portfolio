"use client";
import Image from 'next/image';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col lg:flex-row h-screen px-4 lg:px-10">
        <div className="flex flex-col justify-center w-full lg:w-1/2 pt-20 lg:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi,<br />
            I'm <span className="text-red-600">Rajasekaran Karthik</span><br />
            NUS Computer Engineer
          </h1>
          
          <div className="mt-8">
            <Link href="/contact" className="bg-red-600 text-white font-medium py-3 px-8 rounded-md hover:bg-red-700 transition duration-300">
              Contact
            </Link>
          </div>
          
          <div className="flex mt-12 space-x-6">
            <a href="https://linkedin.com/in/rajasekaran-karthik-contact" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-red-600 transition duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-red-600 transition duration-300">
              <FaGithub size={28} />
            </a>
            
          </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center w-1/2">
          <div className="relative w-[500px] h-[500px] rounded-3xl overflow-hidden">
            <Image 
              src="/profile.jpg" 
              alt="Your profile" 
              fill
              style={{objectFit: "cover"}}
              className="rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
