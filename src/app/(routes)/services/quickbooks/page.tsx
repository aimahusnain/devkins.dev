"use client";
import React, { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  ArrowRight,
  BarChart2,
  Check,
  DollarSign,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Whychooseus from "@/components/Quickbooks/Whychooseus";
import Faqs from "@/components/Quickbooks/Faqs";
import QuickbooksServices from "@/components/Quickbooks/QuickbooksServices";

const QuickBooks = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <>
        <section id="home" className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="relative z-10 text-center md:text-left md:w-2/3 lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
                Streamline Your <span className="text-blue-600">Finances</span>{" "}
                with Expert Bookkeeping
              </h2>
              <p className="text-xl text-gray-500 mb-8">
                Professional bookkeeping solutions tailored for your business
                needs. From QuickBooks to Xero, we&apos;ve got you covered.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-blue-200 to-indigo-200 transform skew-y-6 md:skew-y-0 md:-skew-x-6 -mr-32 md:-mr-16 z-0"></div>
          <div className="absolute md:flex hidden top-0 right-0 w-full h-full items-center justify-center md:justify-end z-0 pointer-events-none">
            <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
              <Image
                alt="Hero Section Image"
                src="/herosectionimage-without-background.png"
                layout="responsive"
                width={600}
                height={700}
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </section>
      <div className="min-h-screen bg-gradient-to-br pt-20 from-blue-50 to-indigo-100">
        <main>
          <QuickbooksServices />

          <Whychooseus />

          <Faqs />

          <section id="contact" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
                Get in Touch
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-blue-600 p-10 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Contact Information
                    </h3>
                    <p className="mb-4">
                      Fill out the form and we&apos;ll be in touch as soon as
                      possible.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <DollarSign className="h-6 w-6 mr-2" />
                        <span>123 Finance Street, Moneyville, FC 12345</span>
                      </li>
                      <li className="flex items-center">
                        <FileText className="h-6 w-6 mr-2" />
                        <span>info@financebooks.com</span>
                      </li>
                      <li className="flex items-center">
                        <BarChart2 className="h-6 w-6 mr-2" />
                        <span>+1 (555) 123-4567</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 p-10">
                    <form>
                      <div className="mb-6">
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        ></textarea>
                      </div>
                      <div className="text-right">
                        <button
                          type="submit"
                          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default QuickBooks;
