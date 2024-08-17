'use client'

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ServicesDropdown from "./ServicesDropdown";
import { buttonVariants } from "../ui/button";
import ServicesNavCompo from "../ServicesNavComponent";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeNavbar = () => setIsMenuOpen(false);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white shadow-sm">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold" onClick={closeNavbar}>
            <span>DevKins</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden z-50 p-2 text-gray-500 hover:text-gray-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden items-center space-x-4 sm:flex">
            <ServicesNavCompo />
            <Link
              href="/portfolio"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={closeNavbar}
            >
              Portfolio
            </Link>
            <Link
              href="/about-us"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={closeNavbar}
            >
              About
            </Link>
            <Link
              href="/careers"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={closeNavbar}
            >
              Careers
            </Link>
            <Link
              href="/tools"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={closeNavbar}
            >
              Tools
            </Link>
            <Link
              href="/sign-up"
              className={buttonVariants({
                size: "sm",
              })}
              onClick={closeNavbar}
            >
              Get started <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed inset-0 z-40 bg-white transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out sm:hidden`}
          >
            <div className="flex flex-col h-full justify-start items-start space-y-4 p-6 pt-20">
              <ServicesDropdown closeNavbar={closeNavbar} />
              <Link
                href="/portfolio"
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "w-full justify-start",
                })}
                onClick={closeNavbar}
              >
                Portfolio
              </Link>
              <Link
                href="/about-us"
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "w-full justify-start",
                })}
                onClick={closeNavbar}
              >
                About
              </Link>
              <Link
                href="/careers"
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "w-full justify-start",
                })}
                onClick={closeNavbar}
              >
                Careers
              </Link>
              <Link
                href="/tools"
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "w-full justify-start",
                })}
                onClick={closeNavbar}
              >
                Tools
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full",
                })}
                onClick={closeNavbar}
              >
                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;