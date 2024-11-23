'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Users, Briefcase, Zap } from 'react-feather';

const CompanyBranding: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-800"
            {...fadeInUp}
          >
            Transform Your Brand Identity
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            We craft unique and memorable brand identities that resonate with your audience and elevate your business.
          </motion.p>
          <motion.button 
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Branding Journey
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Branding Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Logo Design", icon: <Star />, description: "Create a unique and memorable logo that represents your brand essence." },
              { title: "Brand Guidelines", icon: <Briefcase />, description: "Develop comprehensive guidelines to ensure consistent brand application." },
              { title: "Visual Identity", icon: <Zap />, description: "Design a cohesive visual system including colors, typography, and imagery." },
              { title: "Brand Messaging", icon: <Users />, description: "Craft a compelling brand story and messaging that connects with your audience." },
              { title: "Brand Strategy", icon: <ArrowRight />, description: "Develop a strategic roadmap to guide your brand's growth and evolution." },
              { title: "Brand Collateral", icon: <Check />, description: "Design various branded materials for both print and digital use." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Branding Process</h2>
          <div className="max-w-4xl mx-auto">
            {[
              { step: 1, title: "Discovery", description: "We dive deep into your business, values, and goals to understand your unique brand essence." },
              { step: 2, title: "Strategy", description: "We develop a comprehensive brand strategy aligned with your business objectives." },
              { step: 3, title: "Design", description: "Our creative team brings your brand to life through visual design and messaging." },
              { step: 4, title: "Implementation", description: "We help you roll out your new brand across all touchpoints for maximum impact." },
              { step: 5, title: "Evaluation", description: "We measure the effectiveness of your new brand and make refinements as needed." }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Let's create a powerful brand identity that sets you apart from the competition and drives your business forward.</p>
          <motion.button 
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CompanyBranding;