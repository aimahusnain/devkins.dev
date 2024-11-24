import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerData = {
  logo: {
    src: "/devkins_full_logo.svg",
    alt: "Devkins Logo",
    width: 130,
    height: 30
  },
  sections: [
    {
      title: "Resources",
      links: [
        { text: "Docs", href: "#" },
        { text: "Learn", href: "#" },
        { text: "Showcase", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Analytics", href: "#" },
        { text: "Next.js Conf", href: "#" },
        { text: "Previews", href: "#" }
      ]
    },
    {
      title: "More",
      links: [
        { text: "Next.js Commerce", href: "#" },
        { text: "Contact Sales", href: "#" },
        { text: "GitHub", href: "#" },
        { text: "Releases", href: "#" },
        { text: "Telemetry", href: "#" },
        { text: "Governance", href: "#" }
      ]
    },
    {
      title: "About Devkins",
      links: [
        { text: "Next.js + Devkins", href: "#" },
        { text: "Open Source Software", href: "#" },
        { text: "GitHub", href: "#" },
        { text: "X", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "#" }
      ]
    }
  ],
  newsletter: {
    title: "Subscribe to our newsletter",
    description: "Stay updated on new releases and features, guides, and case studies.",
    successMessage: "Thanks for subscribing!"
  },
  bottomFooter: {
    copyright: "© 2024 Devkins Pvt. Ltd.",
    socialLinks: [
      { text: "GitHub", href: "#" },
      { text: "X", href: "#" }
    ]
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {/* Logo */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-1">
            <Image
              {...footerData.logo}
              className="block mb-6"
            />
          </div>

          {/* Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-base lg:text-lg font-semibold mb-3 sm:mb-4 text-black">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:underline hover:text-gray-900 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-1">
            <h3 className="text-base lg:text-lg font-semibold mb-3 sm:mb-4 text-black">
              {footerData.newsletter.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {footerData.newsletter.description}
            </p>
            <p className="flex items-center text-blue-600 font-medium text-sm sm:text-base">
              <span className="mr-2">✔</span> {footerData.newsletter.successMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="text-xs sm:text-sm">{footerData.bottomFooter.copyright}</p>
            <div className="flex space-x-4">
              {footerData.bottomFooter.socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-xs sm:text-sm hover:text-gray-900 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;