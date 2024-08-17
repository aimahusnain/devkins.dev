"use client";

// components/ServicesSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Custom Website Design",
    link: "/custom-website-design",
    description:
      "Tailored designs created from scratch based on your specifications.",
    icon: "🎨",
  },
  {
    title: "Responsive Web Design",
    link: "/responsive-web-design",
    description:
      "Optimized for all devices and screen sizes for the best user experience.",
    icon: "📱",
  },
  {
    link: "/e-commerce-web-design",
    title: "E-commerce Website Design",
    description: "User-friendly online stores with secure payment gateways.",
    icon: "🛒",
  },
  {
    link: "/cms-integration",
    title: "CMS Integration",
    description:
      "Easy content management with WordPress, Joomla, or Drupal integration.",
    icon: "🔧",
  },
  {
    link: "/seo-friendly-design",
    title: "SEO-friendly Design",
    description:
      "Improved visibility and rankings on search engine results pages.",
    icon: "🔍",
  },
  {
    link: "/website-redesign",
    title: "Website Redesign",
    description:
      "Modernizing existing websites for better functionality and aesthetics.",
    icon: "🔄",
  },
  {
    link: "/maintenance-and-support",
    title: "Maintenance and Support",
    description:
      "Ongoing services to keep your website secure and performing optimally.",
    icon: "🛠️",
  },
  {
    link: "/performance-optimization",
    title: "Performance Optimization",
    description:
      "Enhancing page load speed, mobile responsiveness, and user experience.",
    icon: "⚡",
  },
];

const ServicesSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-br from-indigo-100 to-purple-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={`website-development${service.link}`}>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.03, y: -5 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                    {service.title}
                  </h3>
                  <motion.div
                    className="h-0 overflow-hidden"
                    animate={{ height: hoveredService === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredService === index ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
