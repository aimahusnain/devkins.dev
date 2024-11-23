'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, Monitor, PenTool } from 'react-feather';
import { Palette } from 'lucide-react';

interface Service {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  gradient: string;
}

const services: Service[] = [
  { 
    category: "Brand Identity", 
    icon: <Palette />, 
    items: ["Company Branding", "Logo Design"], 
    color: "from-teal-400 to-cyan-600",
    gradient: "bg-gradient-to-br from-teal-400 to-cyan-600"
  },
  { 
    category: "Print Media", 
    icon: <Printer />, 
    items: ["Brochure/Flyer Design", "Book/Catalog Design", "Print Design", "Poster Design", "Marketing Collateral", "Ad Design", "Packaging Design", "Infographic Design"], 
    color: "from-indigo-400 to-purple-600",
    gradient: "bg-gradient-to-br from-indigo-400 to-purple-600"
  },
  { 
    category: "Digital Design", 
    icon: <Monitor />, 
    items: ["Web Graphics", "Social Media Graphics", "PSD Design"], 
    color: "from-blue-400 to-blue-600",
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  { 
    category: "Illustration", 
    icon: <PenTool />, 
    items: ["Digital Illustration", "Graphic Design", "T-Shirt Design"], 
    color: "from-slate-400 to-slate-600",
    gradient: "bg-gradient-to-br from-slate-400 to-slate-600"
  },
];

const DesignServices: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section className="services py-20 bg-gray-100 text-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h3 
          className="text-6xl font-extrabold text-center mb-16 text-gray-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Design Services
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              className={`rounded-xl p-6 cursor-pointer ${service.gradient} shadow-lg backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 text-white`}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveService(activeService === service ? null : service)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="text-6xl mb-4"
              >
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-2">{service.category}</h4>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {activeService && (
            <motion.div
              key={activeService.category}
              className="mt-12"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`${activeService.gradient} rounded-xl p-8 shadow-2xl text-white`}>
                <h4 className="text-3xl font-bold mb-6">{activeService.category} Services</h4>
                <motion.ul 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {activeService.items.map((item) => (
                    <motion.li
                      key={item}
                      className="text-lg bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DesignServices;