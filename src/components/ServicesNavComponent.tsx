"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Service, services } from "@/lib/config";


const ServicesNavCompo = () => {
  const [hoveredService, setHoveredService] = useState<Service | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleLinkClick = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button variant="ghost">
        Services <ChevronDown className="w-4 ml-1" />
      </Button>
      <div
        className={`fixed top-12 left-0 w-full h-[70vh] p-4 bg-white z-50 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full">
          <div className="w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
            {services.map((service, index) => (
              <Link
                key={index}
                onClick={handleLinkClick}
                href={`${service.link}`}
              >
                <div
                  key={index}
                  onMouseEnter={() => setHoveredService(service)}
                  className="p-2 my-2 text-lg w-full font-semibold cursor-pointer hover:bg-gray-300 rounded-lg"
                >
                  {service.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="w-3/4 p-4 rounded-lg bg-gray-100 overflow-y-auto max-h-[70vh]">
            {hoveredService ? (
              <div className="">
                <h2 className="text-2xl font-bold">{hoveredService.name}</h2>
                <div className="flex flex-col">
                  {hoveredService.description.map((desc, idx) => (
                    <Link
                      onClick={handleLinkClick}
                      href={desc.link}
                      key={idx}
                      className="my-6"
                    >
                      <h3 className="text-xl font-semibold">{desc.title}</h3>
                      <p>{desc.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-500">
                Hover over a service to see the details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNavCompo;
