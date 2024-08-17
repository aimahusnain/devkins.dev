import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ServicesNavComponent from "../ServicesNavComponent";
import { buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>DevKins</span>
          </Link>

          <MobileNav />

          <div className="hidden items-center space-x-4 sm:flex">
            <ServicesNavComponent />
            <Link
              href="/portfolio"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Portfolio
            </Link>
            <Link
              href="/about-us"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              About
            </Link>
            <Link
              href="/careers"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Careers
            </Link>
            <Link
              href="/tools"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Tools
            </Link>
          </div>
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/sign-up"
              className={buttonVariants({
                size: "sm",
              })}
            >
              Get started <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
