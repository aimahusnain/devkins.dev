"use client";

import DesignServices from "@/components/Graphicdesigning/ServicesSection";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Monitor,
  Palette,
  PenTool,
  Printer,
  Twitter
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    category: "Brand Identity",
    icon: <Palette />,
    items: ["Company Branding", "Logo Design"],
  },
  {
    category: "Print Media",
    icon: <Printer />,
    items: [
      "Brochure/Flyer Design",
      "Book/Catalog Design",
      "Print Design",
      "Poster Design",
      "Marketing Collateral",
      "Ad Design",
      "Packaging Design",
      "Infographic Design",
    ],
  },
  {
    category: "Digital Design",
    icon: <Monitor />,
    items: ["Web Graphics", "Social Media Graphics", "PSD Design"],
  },
  {
    category: "Illustration",
    icon: <PenTool />,
    items: ["Digital Illustration", "Graphic Design", "T-Shirt Design"],
  },
];

const HomePage = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentServiceIndex(
          (prevIndex) => (prevIndex + 1) % services.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-indigo-900">
      <main>
        <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900">
          {/* Main content */}
          <div className="container mx-auto text-center relative z-10 px-4">
            <motion.h2
              className="text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Designing Dreams into Reality
            </motion.h2>
            <motion.p
              className="text-3xl mb-12 text-indigo-100 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Where Imagination Meets Innovation
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
              >
                Ignite Your Vision
              </button>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-tr-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500 to-pink-600 rounded-bl-full opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </section>

        {/* <section className="services py-20 bg-white">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Our Design Services</h3>
            <div className="relative"
                 onMouseEnter={() => setIsHovering(true)}
                 onMouseLeave={() => setIsHovering(false)}>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentServiceIndex}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-7xl text-indigo-600 mb-6">
                    {services[currentServiceIndex].icon}
                  </div>
                  <h4 className="text-3xl font-semibold mb-4 text-indigo-700">{services[currentServiceIndex].category}</h4>
                  <ul className="space-y-2 text-center">
                    {services[currentServiceIndex].items.map((item) => (
                      <li key={item} className="text-lg text-indigo-600">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              <button 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-indigo-100 p-2 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors"
                onClick={() => setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-100 p-2 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors"
                onClick={() => setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length)}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section> */}

        <DesignServices />

        <section className="featured-work py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Masterpieces in Motion
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={`/api/placeholder/800/600`}
                      alt={`Project ${item}`}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-end">
                      <span className="text-white text-xl font-semibold p-4">
                        Project Nebula
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-indigo-700">
                      Cosmic Branding
                    </h4>
                    <p className="text-indigo-600">
                      Elevating brands to stellar heights
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials py-20 bg-white">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Voices of Satisfaction
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2].map((item) => (
                <motion.div
                  key={item}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg shadow-md relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                >
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-16 w-16 text-indigo-200 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative z-10 text-indigo-700 italic mb-4">
                    "PixelPulse transformed our brand identity with their
                    innovative designs. Their creativity knows no bounds!"
                  </p>
                  <p className="text-purple-600 font-semibold">
                    - Alex Rivera, CEO of FutureTech
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Paint Your Success?
            </h3>
            <p className="text-xl mb-12">
              Let's create a masterpiece that speaks volumes
            </p>
            <motion.button
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-100 transition-colors transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Artistic Journey
            </motion.button>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-900 text-white py-12 relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div>
            <motion.h4
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              PixelPulse
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transforming ideas into visual masterpieces
            </motion.p>
          </div>
          <div>
            <motion.h5
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Quick Links
            </motion.h5>
            <ul className="space-y-2">
              {["Services", "Portfolio", "About", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="hover:text-indigo-300 transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>
          <div>
            <motion.h5
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              123 Creativity Lane, Imagination City, IC 12345
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              hello@pixelpulse.com
            </motion.p>
            <motion.div
              className="flex space-x-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white hover:text-indigo-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="mt-8 text-center relative z-10">
          <p>&copy; 2024 PixelPulse. All rights reserved.</p>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(129, 140, 248, 0.8) 0%, rgba(129, 140, 248, 0) 50%)`,
            mixBlendMode: "screen",
          }}
        />
      </footer>
    </div>
  );
};

export default HomePage;
