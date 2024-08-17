"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/config";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const MobileNav = () => {
  const [showServices, setShowServices] = useState(false);

  const handleServicesClick = () => {
    setShowServices(true);
  };

  const handleBackClick = () => {
    setShowServices(false);
  };

  const primaryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const secondaryVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const secondaryNavLinks = [
    { name: 'Service 1', href: '/service1' },
    { name: 'Service 2', href: '/service2' },
    { name: 'Service 3', href: '/service3' },
  ];

  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="relative z-50 h-5 w-5 text-zinc-700" />
        </SheetTrigger>
        <SheetContent className="flex h-full flex-col justify-center">
            {!showServices ? (
              <motion.div
                key="primary"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={primaryVariants}
              >
                <Button
                  variant="ghost"
                  className="w-full focus:text-purple-500 text-3xl py-10 my-0 transition-all font-bold"
                  onClick={handleServicesClick}
                >
                  Services -&gt;
                </Button>
                {navLinks.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={primaryVariants}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full text-3xl focus:text-purple-500 py-10 my-0 transition-all font-bold"
                      >
                        {link.name}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="secondary"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={secondaryVariants}
              >
                <Button
                  variant="ghost"
                  className="w-full focus:text-purple-500 text-3xl py-10 my-0 transition-all font-bold"
                  onClick={handleBackClick}
                >
                  &lt;- Back
                </Button>
                {secondaryNavLinks.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={secondaryVariants}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full text-3xl focus:text-purple-500 py-10 my-0 transition-all font-bold"
                      >
                        {link.name}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
