"use client";
import ParticleBackground from '@/components/ParticleBackground';

export default function About() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">About Me</h1>
        
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 text-white shadow-xl">
          <p className="text-lg mb-6">
            I am currently pursuing a Bachelor's Degree in Computer Engineering at the National University of Singapore. 
            Driven by a deep passion for science and technology, I am dedicated to expanding my expertise and creating 
            innovative solutions that bridge software and hardware. I enjoy working on hardware projects such as robotics, 
            embedded systems, and semiconductor design, and I'm especially interested in developing integrated solutions 
            that address real-world challenges by leveraging both programming and hardware capabilities.
          </p>
          
          <h2 className="text-2xl font-bold text-red-600 mt-8 mb-4">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span>Penetration Testing</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span>Embedded Systems</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span>Computer-Aided Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span>Operating System & Networking</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span>Cloud Computing</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <span>Mobile and Web Development</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
