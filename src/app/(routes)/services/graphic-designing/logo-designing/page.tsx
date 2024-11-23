'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Aperture, Hexagon, Triangle, Circle, Square, Star } from 'lucide-react';

const LogoShapes = [Hexagon, Triangle, Circle, Square, Star];

const AvantGardeLogoDesignPage = () => {
  const [currentShape, setCurrentShape] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % LogoShapes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ scale: [0.5, 1.2, 1], rotate: [0, 180, 0], transition: { duration: 2 } });
  }, [currentShape, controls]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <nav className="flex justify-between items-center p-6">
          <Aperture className="text-white h-8 w-8" />
          <ul className="flex space-x-6">
            {['Work', 'Process', 'About', 'Contact'].map((item) => (
              <li key={item} className="hover:text-purple-400 transition-colors cursor-pointer">{item}</li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative">
        <section className="h-screen flex flex-col justify-center items-center relative">
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-purple-500 opacity-10"
            animate={controls}
          >
            {React.createElement(LogoShapes[currentShape], { size: 400 })}
          </motion.div>
          <h1 className="text-8xl font-bold mb-6 text-center leading-tight">
            <span className="block">Redefine</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Your Identity
            </span>
          </h1>
          <p className="text-xl mb-12 max-w-2xl text-center text-gray-400">
            We craft logos that break boundaries and set new standards in visual identity.
          </p>
          <motion.button
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Elevate Your Brand
          </motion.button>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Deconstruct', 'Innovate', 'Redefine'].map((step, index) => (
              <motion.div
                key={step}
                className="bg-gray-900 p-6 rounded-lg"
                whileHover={{ scale: 1.05, rotateY: 180 }}
              >
                <div className="text-6xl font-bold text-purple-500 mb-4">{index + 1}</div>
                <h3 className="text-2xl font-semibold mb-2">{step}</h3>
                <p className="text-gray-400">We {step.toLowerCase()} traditional concepts to create unique visual identities.</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-purple-900">
          <h2 className="text-5xl font-bold mb-12 text-center">Featured Logos</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                className="aspect-square bg-black rounded-lg overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <img src={`/api/placeholder/${400}/${400}`} alt={`Logo ${item}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">The Evolution of Your Brand</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-purple-600"></div>
            {['Conception', 'Exploration', 'Refinement', 'Revelation'].map((phase, index) => (
              <div key={phase} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <h3 className="text-2xl font-semibold mb-2">{phase}</h3>
                  <p className="text-gray-400">A journey of creative discovery and brand evolution.</p>
                </div>
                <div className="w-4 h-4 bg-purple-600 rounded-full z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-black text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Redefine Your Brand?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Let's create a logo that's as unique and revolutionary as your brand.
          </p>
          <motion.button
            className="bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Revolution
          </motion.button>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LogoRevolution</h3>
            <p className="text-gray-400">Crafting the future of brand identities.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              {['Work', 'Process', 'About', 'Contact'].map((item) => (
                <li key={item} className="hover:text-purple-400 transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <p className="text-gray-400 mb-2">hello@logorevolution.com</p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'Behance'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors">
                  {social[0]}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500">
          © 2024 LogoRevolution. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AvantGardeLogoDesignPage;