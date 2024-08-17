// pages/payroll-processing.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, DollarSign, Calculator, FileText, Clock, Shield } from 'lucide-react';

const PayrollProcessingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Payroll Processing Services | NextGen Financial</title>
        <meta
          name="description"
          content="Streamline your payroll operations with our expert payroll processing services. Accurate, timely, and compliant payroll management."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-3xl font-extrabold text-blue-600">
                NextGen Financial
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
                  Home
                </Link>
                <Link href="/ecommerce-accounting" className="text-gray-700 hover:text-blue-600 transition duration-300">
                  E-commerce Accounting
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
                  Expert Payroll Processing Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Streamline your payroll operations with our accurate, timely, and compliant payroll management solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-6">
                    <DollarSign className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Comprehensive Payroll Services</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Salary and wage calculations",
                        "Tax withholdings and deductions",
                        "Direct deposit management",
                        "Payroll tax filings",
                        "Year-end reporting (W-2, 1099)",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-indigo-600 text-white p-6">
                    <Calculator className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Why Choose Our Payroll Services</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Accurate and timely processing",
                        "Compliance with federal and state regulations",
                        "Customized solutions for your business",
                        "Integration with popular accounting software",
                        "Dedicated support team",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Our Payroll Processing Approach
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      icon: FileText,
                      title: "Data Collection",
                      description: "We gather all necessary employee and payroll information.",
                    },
                    {
                      icon: Calculator,
                      title: "Payroll Calculation",
                      description: "We accurately calculate wages, taxes, and deductions.",
                    },
                    {
                      icon: Clock,
                      title: "Timely Processing",
                      description: "We ensure on-time payment processing and direct deposits.",
                    },
                    {
                      icon: Shield,
                      title: "Compliance",
                      description: "We handle all tax filings and regulatory compliance.",
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

              <div className="mt-20 text-center">
                <Link href="/payroll-processing/details" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Learn More About Our Payroll Services
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
                  Expert bookkeeping, payroll, and financial services for your business success.
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
                    <Link href="/ecommerce-accounting" className="text-gray-400 hover:text-white transition duration-300">
                      E-commerce Accounting
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
              <p>&copy; 2024 NextGen Financial. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PayrollProcessingPage;