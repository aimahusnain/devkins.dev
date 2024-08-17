'use client'

// components/ContactUs.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      particlesJS('particles-js', {
        particles: {
          number: { value: 160, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 1, random: true, anim: { enable: true, speed: 1, opacity_min: 0, sync: false } },
          size: { value: 3, random: true, anim: { enable: false, speed: 4, size_min: 0.3, sync: false } },
          line_linked: { enable: false },
          move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false },
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4 relative overflow-hidden">
      <div id="particles-js" className="absolute inset-0"></div>
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-6xl relative z-10 flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-gray-300 mb-6">We&apos;d love to hear from you! Reach out to us using the form or our contact details below.</p>
          <div className="space-y-4">
            <div className="flex items-center text-gray-300">
              <FaEnvelope className="mr-3" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <FaPhone className="mr-3" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="mr-3" />
              <span>123 Starship Street, Moon City, Mars</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-white text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-500 transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="text-white hover:text-pink-500 transition-colors"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white hover:text-pink-500 transition-colors"><FaGithub size={24} /></a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-500 text-white focus:outline-none focus:border-pink-500 transition-colors peer"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-500 peer-focus:text-sm"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-500 text-white focus:outline-none focus:border-pink-500 transition-colors peer"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-500 peer-focus:text-sm"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-500 text-white focus:outline-none focus:border-pink-500 transition-colors peer h-32 resize-none"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-pink-500 peer-focus:text-sm"
              >
                Message
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:from-pink-600 hover:to-purple-700 transition duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white opacity-25 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;