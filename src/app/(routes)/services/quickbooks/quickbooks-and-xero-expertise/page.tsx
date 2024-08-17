// Design of the example page
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const QuickBooksXeroPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>QuickBooks & Xero Expertise | NextGen Financial</title>
        <meta
          name="description"
          content="Expert QuickBooks and Xero services to optimize your accounting software and streamline your financial processes."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <header className="bg-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link className="text-3xl font-extrabold text-purple-600" href="/">
                  NextGen Financial
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link className="text-gray-700 hover:text-purple-600 transition duration-300" href="/#services">
                    Services
                </Link>
                <Link className="text-gray-700 hover:text-purple-600 transition duration-300" href="/#about">
                    About
                </Link>
                <Link className="text-gray-700 hover:text-purple-600 transition duration-300" href="/#contact">
                    Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                  QuickBooks & Xero Expertise
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Harness the power of leading accounting software with our
                  expert guidance and support.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-purple-600 text-white p-6">
                    <h2 className="text-3xl font-bold">QuickBooks</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Setup and customization",
                        "Data migration and cleanup",
                        "Advanced reporting",
                        "Integration with other tools",
                        "Training and support",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-indigo-600 text-white p-6">
                    <h2 className="text-3xl font-bold">Xero</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Cloud-based accounting setup",
                        "Bank feed automation",
                        "Custom invoice designs",
                        "Multi-currency support",
                        "Add-on app integration",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Why Choose Our Expertise
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Cloud,
                      title: "Cloud Integration",
                      description:
                        "Seamless integration with cloud-based tools and services",
                    },
                    {
                      icon: Shield,
                      title: "Data Security",
                      description:
                        "Robust security measures to protect your financial data",
                    },
                    {
                      icon: Zap,
                      title: "Efficiency Boost",
                      description:
                        "Streamline processes to save time and reduce errors",
                    },
                    {
                      icon: Users,
                      title: "Expert Support",
                      description:
                        "Dedicated team of certified QuickBooks and Xero professionals",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 text-center"
                    >
                      <item.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 text-center">
                <Link className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="/#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">NextGen Financial</h3>
                <p className="text-gray-400">
                  Expert bookkeeping and financial services for your business
                  success.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-gray-400 hover:text-white transition duration-300" href="/#services">
                        Services
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-white transition duration-300" href="/#about">
                        About
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-white transition duration-300" href="/#contact">
                        Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <p className="text-gray-400">
                  123 Finance Street, Moneyville, FC 12345
                </p>
                <p className="text-gray-400">info@financebooks.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 NextGen Financial. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default QuickBooksXeroPage;