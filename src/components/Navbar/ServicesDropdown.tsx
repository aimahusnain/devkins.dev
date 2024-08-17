"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  X,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Service, services } from "@/lib/config";

const ServicesDropdown = ({ closeNavbar }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleServiceClick = (service: Service, isLink: boolean = false) => {
      if (isLink) {
        closeDropdown();
        closeNavbar();
        router.push(service.link);
      } else {
        setSelectedService(selectedService === service ? null : service);
      }
    };
  
    const closeDropdown = () => {
      setIsOpen(false);
      setSelectedService(null);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          closeDropdown();
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  const MobileView = () => (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Services</h2>
        <Button variant="ghost" className="" onClick={closeDropdown}>
          <X className="w-6 h-6" />
        </Button>
      </div>
      <div className="p-4">
        {selectedService ? (
          <>
            <Button
              variant="ghost"
              onClick={() => setSelectedService(null)}
              className="mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back to Services
            </Button>
            <h3 className="text-2xl font-bold mb-4">{selectedService.name}</h3>
            {selectedService.description.map((desc, idx) => (
              <Link
                href={desc.link}
                key={idx}
                className="block p-4 bg-gray-50 rounded-lg mb-4 hover:bg-gray-100 transition-colors"
                onClick={closeDropdown}
              >
                <h4 className="font-semibold text-blue-600 mb-2">
                  {desc.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{desc.desc}</p>
                <span className="text-blue-500 text-sm flex items-center">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </>
        ) : (
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className="flex w-full justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <Link 
                    href={service.link} 
                    className="flex-grow text-left"
                    onClick={() => handleServiceClick(service, true)}
                  >
                    {service.name}
                  </Link>
                  <ChevronRight 
                    className="w-4 h-4" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceClick(service);
                    }}
                  />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  const DesktopView = () => (
    <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-2xl rounded-lg overflow-hidden z-50 max-h-[80vh] flex">
      <div className="w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-white">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className={`w-full justify-between px-2 py-1 text-left hover:bg-white/10 rounded transition-colors text-sm ${
                  selectedService === service ? "bg-white/20 font-semibold" : ""
                }`}
              >
                <Link 
                  href={service.link} 
                  className="flex-grow"
                  onClick={() => handleServiceClick(service, true)}
                >
                  {service.name}
                </Link>
                <ChevronRight 
                  className="w-4 h-4" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick(service);
                  }}
                />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-6 bg-white overflow-y-auto">
        {selectedService ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedService.name}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedService.description.map((desc, idx) => (
                <Link
                  href={desc.link}
                  key={idx}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={closeDropdown}
                >
                  <h3 className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors mb-2">
                    {desc.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{desc.desc}</p>
                  <span className="text-blue-500 group-hover:text-blue-600 transition-colors text-sm flex items-center">
                    Learn more{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
  );

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <Button
        variant="ghost"
        onClick={toggleDropdown}
        className="w-full sm:w-auto justify-between hover:bg-gray-100 transition-colors group"
      >
        Services
        <ChevronDown
          className={`w-4 ml-1 transition-transform group-hover:text-blue-600 ${
            isOpen ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </Button>
      {isOpen && (isMobile ? <MobileView /> : <DesktopView />)}
    </div>
  );
};

export default ServicesDropdown;