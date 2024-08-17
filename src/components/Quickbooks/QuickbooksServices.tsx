"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronRight, Maximize2 } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({ service, index, isExpanded, toggleExpand }: any) => {
  return (
    <motion.div
      id="services"
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`w-full ${isExpanded ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <motion.div
        layout
        className="group h-full bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <motion.div layout className="relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
            <button
              onClick={() => toggleExpand(index)}
              className="text-white hover:text-blue-200 transition-colors duration-300"
            >
              <Maximize2 className="h-6 w-6" />
            </button>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
              >
                <p className="text-white mb-4">
                  {service.description ||
                    "Detailed description of the service goes here. We provide top-notch solutions tailored to your needs."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <Link
            href={`/services/quickbooks${service.link}`}
            className="flex items-center text-white font-semibold group-hover:text-blue-200 transition-colors duration-300 mt-auto"
          >
            Learn More
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const QuickbooksServices = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const services = [
    { link: "/bookkeeping-and-accounting", title: "Bookkeeping & Accounting" },
    {
      link: "/quickbooks-and-xero-expertise",
      title: "QuickBooks & Xero Expertise",
    },
    { link: "/financial-managment", title: "Financial Management" },
    { link: "/account-clean-up", title: "Account Clean-up" },
    { link: "/ecommerce-accounting", title: "E-commerce Accounting" },
    { link: "/tax-preparation", title: "Tax Preparation" },
    { link: "/payroll-processing2", title: "Payroll Processing" },
    { link: "/financial-reporting", title: "Financial Reporting" },
  ];

  const toggleExpand = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-blue-800 max-w-3xl mx-auto">
            Discover our range of tailored financial solutions designed to
            elevate your business.
          </p>
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isExpanded={expandedIndex === index}
              toggleExpand={toggleExpand}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickbooksServices;
