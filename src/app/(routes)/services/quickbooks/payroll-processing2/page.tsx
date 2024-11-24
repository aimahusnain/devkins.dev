// pages/payroll-processing/details.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, DollarSign, Shield, Clock, FileText, Briefcase, Users, CheckCircle, PieChart, HelpCircle } from 'lucide-react';

const PayrollProcessingDetailsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Detailed Payroll Processing Services | Devkins</title>
        <meta
          name="description"
          content="In-depth information about our comprehensive payroll processing services. Discover how we can streamline your payroll operations and ensure compliance."
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
                  Comprehensive Payroll Processing Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how our expert payroll solutions can save you time, ensure compliance, and keep your employees satisfied with accurate and timely payments.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-blue-600 text-white p-6">
                    <DollarSign className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Core Payroll Services</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Accurate salary and wage calculations for all employee types",
                        "Automated tax withholdings and deductions (federal, state, and local)",
                        "Seamless direct deposit management and check printing options",
                        "Timely payroll tax filings and payments",
                        "Comprehensive year-end reporting (W-2, 1099-MISC, 1099-NEC)",
                        "User-friendly employee self-service portals",
                        "Multi-state and multi-location payroll processing",
                        "Garnishment and levy administration",
                        "Paid time off (PTO) tracking and management",
                        "Integration with time and attendance systems",
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
                    <Shield className="h-12 w-12 mb-4" />
                    <h2 className="text-2xl font-bold">Compliance and Support</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {[
                        "Continuous updates on changing payroll laws and regulations",
                        "Ensure compliance with federal, state, and local tax requirements",
                        "Handle payroll tax notices and assist during audits",
                        "Provide expert guidance on payroll best practices and optimization",
                        "Offer dedicated support for all payroll-related queries",
                        "Assist with initial payroll setup and ongoing employee onboarding",
                        "Generate and analyze regular payroll reports",
                        "Ensure accurate classification of employees and contractors",
                        "Manage compliance with labor laws (FLSA, FMLA, ACA)",
                        "Provide guidance on payroll-related HR policies",
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
                  Benefits of Our Payroll Processing Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Clock,
                      title: "Time Savings",
                      description: "Free up valuable time to focus on growing your business while we handle your complex payroll needs.",
                    },
                    {
                      icon: Shield,
                      title: "Reduced Errors",
                      description: "Our expert team and advanced systems minimize payroll errors, ensuring accuracy and employee satisfaction.",
                    },
                    {
                      icon: FileText,
                      title: "Compliance Assurance",
                      description: "Stay compliant with ever-changing payroll laws and regulations without the stress of constant monitoring.",
                    },
                    {
                      icon: Briefcase,
                      title: "Cost-Effective",
                      description: "Reduce overall payroll processing costs and avoid expensive penalties for compliance violations.",
                    },
                    {
                      icon: Users,
                      title: "Employee Satisfaction",
                      description: "Ensure timely and accurate payments, boosting employee morale and trust in your organization.",
                    },
                    {
                      icon: PieChart,
                      title: "Data-Driven Insights",
                      description: "Gain valuable insights into your payroll data to make informed business decisions and optimize labor costs.",
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
                  <HelpCircle className="h-12 w-12 mb-4" />
                  <h2 className="text-2xl font-bold">Why Choose Devkins for Payroll Processing?</h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {[
                      "Decades of combined experience in payroll processing and tax compliance",
                      "Cutting-edge payroll software tailored to your business needs",
                      "Dedicated payroll specialists assigned to your account",
                      "Scalable solutions that grow with your business",
                      "Integration capabilities with popular accounting and HR software",
                      "Robust data security measures to protect sensitive employee information",
                      "Transparent pricing with no hidden fees",
                      "Commitment to exceptional customer service and support",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Streamline Your Payroll Process?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Contact us today for a personalized consultation and see how our payroll processing services can benefit your business.
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
              <p>&copy; 2024 Devkins. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PayrollProcessingDetailsPage;