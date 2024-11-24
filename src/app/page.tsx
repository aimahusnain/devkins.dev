"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Code } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TemplatesSection from "@/components/TemplatesSection";
import ContactSection from "@/components/ContactSection";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-terminal", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50"
      >
        <div className="text-center max-w-[800px] mx-auto space-y-6">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
            Innovative Solutions for{" "}
            <span className="text-[#22D3EE]">Modern Businesses</span>
          </h1>

          <p className="hero-description text-xl md:text-2xl text-gray-600 max-w-[600px] mx-auto">
            Devkins Pvt. Ltd. delivers cutting-edge technology solutions to
            transform your business and drive growth.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-[#22D3EE] hover:bg-[#1CB5CD] rounded-lg transition-colors duration-200">
              Explore Our Services
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-[#22D3EE] bg-white border-2 border-[#22D3EE] hover:bg-gray-50 rounded-lg transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-1/2 h-1/2 rounded-full bg-[#22D3EE] opacity-[0.15] blur-[120px]"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-1/2 h-1/2 rounded-full bg-[#22D3EE] opacity-[0.15] blur-[120px]"></div>
        </div>
      </section>
      <ServicesSection />
      <PortfolioSection />
      <TemplatesSection />
      <ContactSection />
    </main>
  );
}
