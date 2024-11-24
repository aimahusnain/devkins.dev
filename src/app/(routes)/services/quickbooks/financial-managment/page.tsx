// pages/financial-management.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, BarChart, DollarSign, FileText, Calculator, TrendingUp } from 'lucide-react';

const FinancialManagementPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Financial Management Services | Devkins</title>
        <meta
          name="description"
          content="Expert financial management services to optimize your business finances and drive growth."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
        <header className="bg-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-3xl font-extrabold text-indigo-600">
                Devkins
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">
                  Home
                </Link>
                <Link href="/account-cleanup" className="text-gray-700 hover:text-indigo-600 transition duration-300">
                  Account Clean-up
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-indigo-600 transition duration-300">
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
                  Financial Management Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Optimize your business finances with our expert financial management solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    icon: BarChart,
                    title: "Budgeting and Forecasting",
                    description: "Develop detailed budgets and financial forecasts to plan for the future and ensure financial stability.",
                  },
                  {
                    icon: DollarSign,
                    title: "Cash Flow Management",
                    description: "Monitor and manage your cash flow to ensure your business has the liquidity it needs for operations and growth.",
                  },
                  {
                    icon: FileText,
                    title: "Financial Reporting",
                    description: "Prepare and analyze financial statements, including balance sheets, profit and loss statements, and cash flow statements.",
                  },
                  {
                    icon: Calculator,
                    title: "Tax Preparation and Planning",
                    description: "Assist with the preparation and planning of taxes to ensure compliance and optimize tax liabilities.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Business Advisory",
                    description: "Provide strategic financial advice to help your business grow and succeed in a competitive market.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-2xl p-8">
                    <item.icon className="h-12 w-12 text-indigo-600 mb-4" />
                    <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-20 text-center">
                <Link href="#contact" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          {/* Footer content (same as homepage) */}
        </footer>
      </div>
    </>
  );
};

export default FinancialManagementPage;