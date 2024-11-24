import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  BarChart2,
  DollarSign,
  FileText,
} from "lucide-react";

const BookkeepingAccountingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bookkeeping & Accounting Services | Devkins</title>
        <meta
          name="description"
          content="Professional bookkeeping and accounting services to streamline your financial processes and ensure accuracy."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white bg-opacity-90 sticky top-0 z-50 backdrop-filter backdrop-blur-lg">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link
                className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                href="/"
              >
                Devkins
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link className="text-gray-700 hover:text-blue-600 transition duration-300" href="/#services">
                    Services
                </Link>
                <Link className="text-gray-700 hover:text-blue-600 transition duration-300" href="/#about">
                    About
                </Link>
                <Link className="text-gray-700 hover:text-blue-600 transition duration-300" href="/#contact">
                    Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
                Bookkeeping & Accounting Services
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Streamline your financial processes and ensure accuracy with our
                professional bookkeeping and accounting services.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    What We Offer
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Accurate financial record-keeping",
                      "Monthly financial statement preparation",
                      "Account reconciliation",
                      "Accounts payable and receivable management",
                      "General ledger maintenance",
                      "Financial data analysis and reporting",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Our Service
                  </h2>
                  <ul className="space-y-4">
                    {[
                      {
                        icon: BarChart2,
                        text: "Improved financial visibility and control",
                      },
                      {
                        icon: DollarSign,
                        text: "Cost-effective solution for businesses of all sizes",
                      },
                      {
                        icon: FileText,
                        text: "Compliance with accounting standards and regulations",
                      },
                      {
                        icon: CheckCircle,
                        text: "Timely and accurate financial reporting",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <item.icon className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Process
                </h2>
                <ol className="space-y-4">
                  {[
                    "Initial consultation to understand your business needs",
                    "Set up or review your current bookkeeping system",
                    "Implement best practices for financial record-keeping",
                    "Regular check-ins and financial reviews",
                    "Monthly or quarterly financial report preparation",
                    "Year-end financial statement compilation",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-16 text-center">
                <Link className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="/#contact">
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
              <p>&copy; 2024 Devkins. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BookkeepingAccountingPage;