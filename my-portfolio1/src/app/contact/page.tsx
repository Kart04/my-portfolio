"use client";
import ParticleBackground from "@/components/ParticleBackground";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Contact Me
        </h1>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-red-600 mt-1">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-300">rajasekarankarthik@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-red-600 mt-1">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-gray-300">+65 90864324</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-white font-semibold mb-3">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/rajasekaran-karthik-contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-white hover:bg-red-600 transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
