"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string[]>(
    []
  );
  const pathname = usePathname();

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b shadow-sm fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto sm:px-10 px-4">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/devkins_full_logo.svg"
                alt="Devkins Logo"
                width={150}
                height={80}
                priority
                className="cursor-pointer hidden md:block"
              />
              <Image
                src="/devkins_short_logo.svg"
                alt="Devkins Logo"
                width={60}
                height={80}
                priority
                className="cursor-pointer block md:hidden"
              />
            </Link>
          </div>

          <DesktopMenu
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />

          <MobileMenuToggle
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </div>

      <DesktopDropdownMenu activeDropdown={activeDropdown} />

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        activeMobileDropdown={activeMobileDropdown}
        toggleMobileDropdown={toggleMobileDropdown}
        closeMobileMenu={closeMobileMenu}
      />
    </nav>
  );
}

function DesktopMenu({ activeDropdown, setActiveDropdown }: any) {
  return (
    <div className="hidden lg:flex items-center space-x-1">
      {navItems.map((item) => (
        <div key={item.title} className="relative">
          <button
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center group",
              "bg-white shadow-sm",
              activeDropdown === item.title
                ? "text-blue-600 ring-2 ring-blue-200"
                : "text-gray-700 hover:text-blue-600 hover:ring-2 hover:ring-blue-100"
            )}
            onClick={() =>
              item.submenu
                ? setActiveDropdown(
                    activeDropdown === item.title ? null : item.title
                  )
                : null
            }
          >
            {item.title}
            {item.submenu && (
              <ChevronIcon
                className={cn(
                  "ml-1.5 h-4 w-4 transition-transform duration-300 ease-out",
                  activeDropdown === item.title
                    ? "rotate-180 text-blue-600"
                    : "text-gray-400 group-hover:text-blue-600"
                )}
              />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}

function DesktopDropdownMenu({ activeDropdown }: any) {
  return (
    <AnimatePresence>
      {activeDropdown && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 w-full bg-white shadow-xl border-b z-50 max-h-[85vh] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-8 py-8">
            {navItems.map(
              (item) =>
                item.title === activeDropdown &&
                item.submenu && (
                  <div
                    key={item.title}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                  >
                    {item.submenu.map((category) => (
                      <div key={category.title} className="space-y-5">
                        <Link
                          href={category.href}
                          className="group inline-block"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            {category.title}
                          </h3>
                          {category.description && (
                            <p className="text-sm text-gray-500 mt-1.5 group-hover:text-gray-600 transition-colors duration-200">
                              {category.description}
                            </p>
                          )}
                        </Link>

                        {category.submenu && (
                          <div className="border-l-2 border-gray-100">
                            <div
                              className={cn(
                                "space-y-1",
                                category.submenu.length > 3 &&
                                  "max-h-[250px] overflow-y-auto pr-4 custom-scrollbar"
                              )}
                            >
                              {category.submenu.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="group block"
                                >
                                  <div className="pl-4 py-2.5 transition-all duration-200 hover:bg-gray-50 rounded-r-lg">
                                    <h4 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                                      {subItem.title}
                                    </h4>
                                    {subItem.description && (
                                      <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-200">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileMenuToggle({ mobileMenuOpen, setMobileMenuOpen }: any) {
  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 rounded-md text-gray-600 hover:text-blue-600 bg-white shadow-sm hover:ring-2 hover:ring-blue-100 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  );
}

function MobileMenu({
  mobileMenuOpen,
  activeMobileDropdown,
  toggleMobileDropdown,
  closeMobileMenu,
}: any) {
  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="lg:hidden fixed inset-x-0 top-20 bg-white shadow-lg z-50 overflow-y-auto max-h-[calc(100vh-5rem)]"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                {item.submenu ? (
                  <button
                    className="w-full flex items-center justify-between py-4 text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => toggleMobileDropdown(item.title)}
                  >
                    <span>{item.title}</span>
                    <ChevronIcon
                      className={cn(
                        "ml-2 h-5 w-5 transition-transform duration-300",
                        activeMobileDropdown.includes(item.title) &&
                          "rotate-180"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                )}

                {item.submenu && activeMobileDropdown.includes(item.title) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 pb-4 space-y-6"
                  >
                    {item.submenu.map((category) => (
                      <div key={category.title} className="space-y-2">
                        <Link
                          href={category.href}
                          className="block text-base font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                          onClick={closeMobileMenu}
                        >
                          {category.title}
                        </Link>
                        {category.description && (
                          <p className="text-sm text-gray-500">
                            {category.description}
                          </p>
                        )}

                        {category.submenu && (
                          <div className="mt-2 pl-4 space-y-2">
                            {category.submenu.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="block text-sm text-gray-600 py-2 hover:text-blue-600 transition-colors duration-200"
                                onClick={closeMobileMenu}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ChevronIcon({ className }: any) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
