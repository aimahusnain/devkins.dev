"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <motion.section
        id="home"
        className="h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
        >
          {[...Array(250)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: i * 0.01 }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 14 + 8}px`,
                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              }}
            >
              {Math.random() > 0.5 ? "0" : "1"}
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold mb-6 text-gray-800">
            Redefining Digital Frontiers
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-600">
            Devkins crafts innovative tech solutions that propel businesses into
            the future.
          </p>
          <motion.a
            href="#services"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Expertise
          </motion.a>
        </motion.div>
      </motion.section>

      <section id="services" className="py-20 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center text-gray-800"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                ></motion.div>
                <motion.div 
                  className="h-24 w-24 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <i className={`fas ${service.icon} text-4xl text-white`}></i>
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  layout="responsive"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-white flex flex-col justify-end p-6"
                  initial={{ opacity: 0.8, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  <motion.a
                    href={project.link}
                    className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.form 
            className="max-w-lg mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none placeholder-gray-500"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none placeholder-gray-500"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <motion.textarea
              placeholder="Your Message"
              rows={4}
              className="w-full mb-4 p-3 rounded-lg bg-white border border-gray-300 focus:border-blue-500 outline-none placeholder-gray-500"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}

// services and projects arrays remain unchanged

const services = [
  {
    title: "AI-Driven Development",
    description:
      "Harness the power of artificial intelligence to create smarter, more efficient applications.",
    icon: "fa-robot",
  },
  {
    title: "Blockchain Solutions",
    description:
      "Implement secure, transparent, and decentralized systems using cutting-edge blockchain technology.",
    icon: "fa-link",
  },
  {
    title: "IoT Ecosystems",
    description:
      "Connect and optimize your devices in a seamless Internet of Things network.",
    icon: "fa-network-wired",
  },
  {
    title: "AR/VR Experiences",
    description:
      "Create immersive augmented and virtual reality solutions for various industries.",
    icon: "fa-vr-cardboard",
  },
  {
    title: "Quantum Computing",
    description:
      "Explore the frontiers of computational power with quantum-inspired algorithms.",
    icon: "fa-atom",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with advanced threat detection and prevention systems.",
    icon: "fa-shield-alt",
  },
];

const projects = [
  {
    title: "NeuroTech AI Assistant",
    description:
      "An AI-powered virtual assistant for healthcare professionals.",
    image: "/projects/neurotech.jpg",
    link: "#",
  },
  {
    title: "BlockChain Supply Chain",
    description:
      "A blockchain-based supply chain management system for global logistics.",
    image: "/projects/blockchain-supply.jpg",
    link: "#",
  },
  {
    title: "SmartCity IoT Platform",
    description:
      "An IoT platform for managing and optimizing urban infrastructure.",
    image: "/projects/smartcity.jpg",
    link: "#",
  },
  {
    title: "Quantum Encryption System",
    description:
      "A next-generation encryption system leveraging quantum computing principles.",
    image: "/projects/quantum-encryption.jpg",
    link: "#",
  },
];