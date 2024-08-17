'use client'

import React, { useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const HeroSection: React.FC = () => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = shapesRef.current?.children;
    if (shapes) {
      Array.from(shapes).forEach((shape, index) => {
        shape.animate([
          { transform: 'translate(0, 0) rotate(0deg)' },
          { transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${Math.random() * 360}deg)` }
        ], {
          duration: 3000 + index * 1000,
          easing: 'ease-in-out',
          iterations: Infinity,
          direction: 'alternate'
        });
      });
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4 py-12 md:py-20 lg:py-32">
      <div ref={shapesRef} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full bg-yellow-300 opacity-75"></div>
        <div className="absolute top-1/2 left-2/3 h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg bg-green-400 opacity-60 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 h-20 w-20 md:h-28 md:w-28 lg:h-40 lg:w-40 rounded-full bg-blue-400 opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-lg bg-red-400 opacity-65 rotate-12"></div>
      </div>
      
      <div className="relative z-10 flex min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] items-center justify-center">
        <div className="max-w-4xl text-center">
          <h1 className="mb-4 md:mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Innovative
            </span>
            <br />
            Web Solutions
          </h1>
          <p className="mb-8 text-xl text-gray-200">
            Transforming ideas into powerful, responsive, and user-friendly web experiences.
          </p>
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-purple-900 transition-all hover:bg-purple-100 hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;