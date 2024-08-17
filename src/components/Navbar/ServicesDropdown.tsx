'use client'

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Service, services } from "@/lib/config";

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleServiceClick = (service: Service) => {
    setSelectedService(selectedService === service ? null : service);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        onClick={toggleDropdown} 
        className="w-full sm:w-auto justify-between hover:bg-gray-100 transition-colors group"
      >
        Services 
        <ChevronDown className={`w-4 ml-1 transition-transform group-hover:text-blue-600 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
      </Button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full sm:w-[600px] bg-white shadow-2xl rounded-lg overflow-hidden z-50 max-h-[80vh] flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start px-2 py-1 text-left hover:bg-white/10 rounded transition-colors text-sm ${selectedService === service ? 'bg-white/20 font-semibold' : ''}`}
                    onClick={() => handleServiceClick(service)}
                  >
                    {service.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-2/3 p-6 bg-white overflow-y-auto">
            {selectedService ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedService.name}</h2>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedService(null)} className="text-gray-500 hover:text-gray-700">
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.description.map((desc, idx) => (
                    <Link href={desc.link} key={idx} className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                      <h3 className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors mb-2">{desc.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{desc.desc}</p>
                      <span className="text-blue-500 group-hover:text-blue-600 transition-colors text-sm flex items-center">
                        Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <p className="text-center">Select a service to see details.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;