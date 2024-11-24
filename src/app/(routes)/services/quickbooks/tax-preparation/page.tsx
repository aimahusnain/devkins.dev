import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, FileText, Calculator, Calendar, Shield, Users, Clock, CheckCircle } from 'lucide-react';

const TaxPreparationPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tax Preparation Services | Devkins</title>
        <meta
          name="description"
          content="Expert tax preparation services to help you maximize deductions and ensure compliance with tax regulations."
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
                <Link href="/financial-reporting" className="text-gray-700 hover:text-blue-600 transition duration-300">
                  Financial Reporting
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
                  Expert Tax Preparation Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Maximize your deductions and ensure compliance with our comprehensive tax preparation solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-6">
                    <FileText className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Our Tax Preparation Services</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Personal income tax returns",
                        "Corporate tax returns",
                        "Partnership tax returns",
                        "Self-employed tax preparation",
                        "Multi-state tax returns",
                        "Tax planning and strategy",
                        "Estimated tax payments",
                        "Prior year tax return amendments",
                        "Tax credit identification",
                        "IRS audit support",
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
                    <Calculator className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Benefits of Our Tax Services</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Maximize deductions and credits",
                        "Ensure compliance with tax laws",
                        "Reduce tax liability",
                        "Save time and reduce stress",
                        "Expert handling of complex tax situations",
                        "Year-round tax planning support",
                        "Minimize the risk of audits",
                        "Personalized tax strategies",
                        "Electronic filing for faster refunds",
                        "Access to experienced tax professionals",
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
                  Why Choose Our Tax Preparation Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Users,
                      title: "Expert Team",
                      description: "Our certified tax professionals have years of experience in handling various tax situations.",
                    },
                    {
                      icon: Shield,
                      title: "Accuracy Guarantee",
                      description: "We stand behind our work with a 100% accuracy guarantee for your peace of mind.",
                    },
                    {
                      icon: Clock,
                      title: "Timely Filing",
                      description: "We ensure your taxes are filed on time, helping you avoid late penalties and interest.",
                    },
                    {
                      icon: Calendar,
                      title: "Year-Round Support",
                      description: "Get tax advice and planning support throughout the year, not just during tax season.",
                    },
                    {
                      icon: Calculator,
                      title: "Maximum Refund",
                      description: "We work diligently to identify all possible deductions and credits to maximize your refund.",
                    },
                    {
                      icon: FileText,
                      title: "Audit Assistance",
                      description: "In the rare event of an audit, we provide full support and representation with the IRS.",
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
                  <Calendar className="h-12 w-12 mb-4" />
                  <h2 className="text-2xl font-bold">Our Tax Preparation Process</h2>
                </div>
                <div className="p-6">
                  <ol className="space-y-4">
                    {[
                      "Initial consultation to understand your tax situation",
                      "Collection of necessary documents and information",
                      "Thorough review of your financial records",
                      "Identification of all applicable deductions and credits",
                      "Preparation of your tax returns",
                      "Quality assurance review",
                      "Explanation of your tax return and filing options",
                      "Electronic filing or printing for mail-in submission",
                      "Providing copies of all documents for your records",
                      "Year-round support for tax-related questions",
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
                  Ready to Simplify Your Tax Preparation?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Contact us today for a free consultation and see how our tax preparation services can save you time, money, and stress.
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
                <h3 className="text-2xl font-bold mb-4">Devkins</h3>
                <p className="text-gray-400">
                  Expert tax preparation, financial reporting, and business advisory services for your success.
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
                    <Link href="/financial-reporting" className="text-gray-400 hover:text-white transition duration-300">
                      Financial Reporting
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

export default TaxPreparationPage;