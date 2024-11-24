// pages/account-cleanup.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  BarChart,
  Book,
  CheckCircle,
} from "lucide-react";

const AccountCleanupPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Account Clean-up Services | Devkins</title>
        <meta
          name="description"
          content="Expert account clean-up services to ensure your financial records are accurate and up-to-date."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
        <header className="bg-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-3xl font-extrabold text-green-600">
                Devkins
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-green-600 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/ecommerce-accounting"
                  className="text-gray-700 hover:text-green-600 transition duration-300"
                >
                  E-commerce Accounting
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-green-600 transition duration-300"
                >
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
                  Account Clean-up Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ensure your financial records are accurate and up-to-date with
                  our expert account clean-up services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-green-600 text-white p-6">
                    <ShieldCheck className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Our Clean-up Process</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Transaction Categorization and Reconciliation",
                        "Accounts Receivable and Payable Review",
                        "Error Detection and Correction",
                        "Historical Data Cleanup",
                        "Financial Statements Preparation",
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
                  <div className="bg-teal-600 text-white p-6">
                    <BarChart className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Benefits</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Improved Financial Accuracy",
                        "Better Decision Making",
                        "Simplified Tax Preparation",
                        "Increased Efficiency",
                        "Peace of Mind",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Our Account Clean-up Approach
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: FileCheck,
                      title: "Thorough Review",
                      description:
                        "We meticulously examine your financial records to identify discrepancies and areas for improvement.",
                    },
                    {
                      icon: AlertTriangle,
                      title: "Issue Resolution",
                      description:
                        "Our experts address and resolve any financial inconsistencies or errors found during the review process.",
                    },
                    {
                      icon: Book,
                      title: "Detailed Reporting",
                      description:
                        "We provide comprehensive reports on the changes made and recommendations for future best practices.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 text-center"
                    >
                      <item.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 text-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-green-600 hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
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
                  Expert bookkeeping and financial services for your business
                  success.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ecommerce-accounting"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      E-commerce Accounting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
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
              <p>&copy; 2024 Devkins. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AccountCleanupPage;