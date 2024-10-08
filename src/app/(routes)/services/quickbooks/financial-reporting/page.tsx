// pages/financial-reporting.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, BarChart2, PieChart, TrendingUp, FileText, CheckCircle, Users, Clock, Shield } from 'lucide-react';

const FinancialReportingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Financial Reporting Services | NextGen Financial</title>
        <meta
          name="description"
          content="Comprehensive financial reporting services to help you make informed business decisions and meet regulatory requirements."
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
                <Link href="/payroll-processing" className="text-gray-700 hover:text-blue-600 transition duration-300">
                  Payroll Services
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
                  Expert Financial Reporting Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Gain valuable insights into your business&apos;s financial health with our comprehensive reporting solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-6">
                    <BarChart2 className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Our Financial Reporting Services</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Preparation of income statements",
                        "Balance sheet creation and analysis",
                        "Cash flow statements",
                        "Customized financial dashboards",
                        "Budgeting and forecasting reports",
                        "Key performance indicator (KPI) tracking",
                        "Variance analysis reports",
                        "Industry benchmarking comparisons",
                        "Regulatory compliance reporting",
                        "Investor and stakeholder presentations",
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
                    <PieChart className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Benefits of Our Reporting</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Clear visibility into your financial position",
                        "Data-driven decision-making support",
                        "Identification of cost-saving opportunities",
                        "Early detection of financial trends and issues",
                        "Improved budgeting and forecasting accuracy",
                        "Enhanced stakeholder communication",
                        "Streamlined audit processes",
                        "Compliance with accounting standards (GAAP, IFRS)",
                        "Customized reports tailored to your business needs",
                        "Regular financial health check-ups",
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

              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Why Choose Our Financial Reporting Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Users,
                      title: "Expert Team",
                      description: "Our certified professionals have years of experience in financial reporting across various industries.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Actionable Insights",
                      description: "We don't just provide data; we offer insights and recommendations to help grow your business.",
                    },
                    {
                      icon: Clock,
                      title: "Timely Delivery",
                      description: "Get your financial reports when you need them, ensuring you always have up-to-date information.",
                    },
                    {
                      icon: Shield,
                      title: "Data Security",
                      description: "We use advanced security measures to protect your sensitive financial information.",
                    },
                    {
                      icon: FileText,
                      title: "Customization",
                      description: "Our reports are tailored to your specific business needs and industry requirements.",
                    },
                    {
                      icon: BarChart2,
                      title: "Advanced Analytics",
                      description: "Utilize cutting-edge financial analytics tools to gain deeper insights into your business performance.",
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

              <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-20">
                <div className="bg-green-600 text-white p-6">
                  <TrendingUp className="h-12 w-12 mb-4" />
                  <h2 className="text-2xl font-bold">Our Financial Reporting Process</h2>
                </div>
                <div className="p-6">
                  <ol className="space-y-4">
                    {[
                      "Initial consultation to understand your business and reporting needs",
                      "Data collection and verification from various sources",
                      "Thorough analysis of financial data",
                      "Preparation of customized financial reports",
                      "Review and quality assurance checks",
                      "Delivery of reports with executive summaries",
                      "Follow-up consultation to explain findings and recommendations",
                      "Ongoing support and adjustments as needed",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                          {index + 1}
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Gain Clarity on Your Finances?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Contact us today for a free consultation and see how our financial reporting services can transform your business decision-making.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">NextGen Financial</h3>
                <p className="text-gray-400">
                  Expert financial reporting, bookkeeping, and business advisory services for your success.
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
                    <Link href="/payroll-processing" className="text-gray-400 hover:text-white transition duration-300">
                      Payroll Services
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

export default FinancialReportingPage;