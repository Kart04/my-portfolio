"use client";
import { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { FaEnvelope, FaPhone, FaMapMarkerAlt,FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend or a service like Formspree
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">Contact Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-red-600 text-white font-medium py-3 px-6 rounded-md hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Contact Information</h2>
            
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
              
              <div className="flex items-start space-x-4">
                <div className="text-red-600 mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Singapore</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-white font-semibold mb-3">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/rajasekaran-karthik-contact" target="_blank" rel="noopener noreferrer" 
                  className="bg-gray-800 p-3 rounded-full text-white hover:bg-red-600 transition duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-white hover:bg-red-600 transition duration-300">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
