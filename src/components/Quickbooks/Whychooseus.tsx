'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, DollarSign, FileText, ChevronRight } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  text: string;
  description: string;
}

const WhyChooseUsSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features: Feature[] = [
    {
      icon: BarChart2,
      text: "Detailed financial analysis",
      description: "Our in-depth financial analysis provides you with actionable insights to drive your business forward."
    },
    {
      icon: DollarSign,
      text: "Cost-effective solutions",
      description: "We offer tailored, budget-friendly solutions that maximize your financial efficiency without breaking the bank."
    },
    {
      icon: FileText,
      text: "Customized strategies",
      description: "Our expert team crafts personalized bookkeeping strategies to meet your unique business needs and goals."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          Why Choose Us?
        </motion.h2>
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <p className="text-xl text-blue-200 mb-8">
              With over a decade of experience and a team of certified professionals, we deliver exceptional bookkeeping and financial management services. Our expertise ensures precise and efficient handling of your finances, allowing you to focus on what matters most - growing your business.
            </p>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center bg-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-blue-300 mr-4" />
                      <span className="text-lg">{feature.text}</span>
                      <ChevronRight className={`ml-auto transform transition-transform duration-300 ${activeFeature === index ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-blue-800 mt-2 p-4 rounded-lg"
                      >
                        <p>{feature.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-5/12"
          >
            <div className="relative">
              <img
                src="/whychooseimage.png"
                alt="Bookkeeping illustration"
                className="rounded-lg shadow-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-full shadow-lg w-32 h-32 flex flex-col items-center justify-center"
              >
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years of Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;