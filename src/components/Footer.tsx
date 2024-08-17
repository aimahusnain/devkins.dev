"use client";

import React, { useEffect, useRef } from "react";
import { Instagram, Linkedin, Twitter, Youtube, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">NextGen Financial</h2>
            <p className="text-sm">
              Empowering your financial future with innovative solutions and trusted expertise.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-400 transition-colors duration-300" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <li key={item} className="group">
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">support@nextgenfinancial.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-sm">123 Financial District, NY 10004</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Newsletter</h3>
            <p className="text-sm">Stay updated with our latest news and offers.</p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} NextGen Financial. All Rights Reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400">
                Designed and developed with ❤️ by the <Link href="https://webkinsolutions.vercel.app" target="_blank" className="text-white underline">WebKin Solutions</Link> team
              </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;