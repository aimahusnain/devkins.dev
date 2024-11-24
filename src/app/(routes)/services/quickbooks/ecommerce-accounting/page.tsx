
// pages/ecommerce-accounting.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, BarChart2, DollarSign, Globe, Briefcase, CheckCircle } from 'lucide-react';

const EcommerceAccountingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>E-commerce Accounting Services | Devkins</title>
        <meta
          name="description"
          content="Specialized accounting services for e-commerce businesses to streamline your financial operations and drive growth."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-3xl font-extrabold text-blue-600">
                Devkins
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
                  Home
                </Link>
                <Link href="/account-cleanup" className="text-gray-700 hover:text-blue-600 transition duration-300">
                  Account Clean-up
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
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
                  E-commerce Accounting Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Streamline your e-commerce finances with our specialized accounting solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-6">
                    <ShoppingCart className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">E-commerce Platforms We Support</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Amazon",
                        "Shopify",
                        "Walmart",
                        "eBay",
                        "Etsy",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-indigo-600 text-white p-6">
                    <BarChart2 className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Our Services</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Sales and revenue tracking",
                        "Inventory management",
                        "Cost of goods sold (COGS) calculation",
                        "Multi-channel integration",
                        "Tax compliance for e-commerce",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Why Choose Our E-commerce Accounting Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Globe,
                      title: "Multi-Platform Expertise",
                      description: "We specialize in accounting for various e-commerce platforms, ensuring seamless integration and reporting.",
                    },
                    {
                      icon: DollarSign,
                      title: "Optimize Cash Flow",
                      description: "Our services help you manage cash flow effectively, crucial for e-commerce business growth.",
                    },
                    {
                      icon: Briefcase,
                      title: "Scalable Solutions",
                      description: "Our services grow with your business, from startup to enterprise-level e-commerce operations.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                      <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Our E-commerce Accounting Process
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Data Integration",
                      description: "We connect with your e-commerce platforms to gather all relevant financial data.",
                    },
                    {
                      step: "2",
                      title: "Transaction Categorization",
                      description: "We accurately categorize all transactions for proper financial reporting.",
                    },
                    {
                      step: "3",
                      title: "Financial Analysis",
                      description: "We analyze your financial data to provide insights and growth opportunities.",
                    },
                    {
                      step: "4",
                      title: "Reporting & Advisory",
                      description: "We deliver detailed reports and provide expert advice to optimize your e-commerce finances.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 text-center">
                <Link href="#contact" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
                <h3 className="text-2xl font-bold mb-4">Devkins</h3>
                <p className="text-gray-400">
                  Expert bookkeeping and financial services for your e-commerce business success.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/account-cleanup" className="text-gray-400 hover:text-white transition duration-300">
                      Account Clean-up
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <p className="text-gray-400">123 Finance Street, Moneyville, FC 12345</p>
                <p className="text-gray-400">info@financebooks.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 Devkins. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EcommerceAccountingPage;
