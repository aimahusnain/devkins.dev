import Image from 'next/image'
import React from 'react'

const MaintenanceAndSupportPage = () => {
    return (
        <div>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WebDevExperts</div>
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#services" className="text-gray-600 hover:text-blue-600">Our Services</a>
                        <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
                        <a href="#plans" className="text-gray-600 hover:text-blue-600">Support Plans</a>
                        <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
                    </div>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Website Maintenance and Support</h1>
                        <p className="text-xl mb-8">Keep your website running smoothly with our expert care</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get Support Now</a>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Maintenance and Support Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Regular Updates", description: "Keep your website and its components up-to-date with the latest versions." },
                                { title: "Security Monitoring", description: "Protect your site from threats with constant security surveillance and patches." },
                                { title: "Performance Optimization", description: "Ensure your website runs at peak performance with regular tune-ups." },
                                { title: "Backup Management", description: "Secure your data with regular backups and quick restoration if needed." },
                                { title: "Content Updates", description: "We can handle your content updates to keep your site fresh and relevant." },
                                { title: "Technical Support", description: "Get expert help for any technical issues that arise with your website." }
                            ].map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Maintenance and Support</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Peace of Mind", description: "Rest easy knowing your website is in expert hands." },
                                { name: "Improved Security", description: "Protect your site and user data from potential threats." },
                                { name: "Enhanced Performance", description: "Keep your site running fast and efficiently." },
                                { name: "Reduced Downtime", description: "Minimize disruptions with proactive maintenance." },
                                { name: "Cost-Effective", description: "Save money on emergency fixes with regular upkeep." },
                                { name: "Stay Competitive", description: "Keep your site current with the latest web technologies." }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{benefit.name}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Support Plans Section */}
                <section id="plans" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Support Plans</h2>
                        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
                            {[
                                { name: "Basic", price: "$99/month", features: ["Monthly Updates", "Security Monitoring", "Basic Performance Checks", "Email Support"] },
                                { name: "Pro", price: "$199/month", features: ["Weekly Updates", "Advanced Security", "Regular Performance Optimization", "Priority Email & Phone Support", "Monthly Reports"] },
                                { name: "Enterprise", price: "Custom", features: ["Daily Updates", "Real-time Security Monitoring", "Continuous Performance Optimization", "24/7 Priority Support", "Custom Development Hours"] }
                            ].map((plan, index) => (
                                <div key={index} className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
                                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{plan.name}</h3>
                                    <p className="text-3xl font-bold mb-6">{plan.price}</p>
                                    <ul className="mb-8 flex-grow">
                                        {plan.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="mb-2 flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-full text-center hover:from-blue-700 hover:to-purple-700 transition duration-300">Choose Plan</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-6 max-w-3xl mx-auto">
                            {[
                                { question: "How often will my website be updated?", answer: "It depends on the plan you choose. Our Basic plan includes monthly updates, while our Pro and Enterprise plans offer more frequent updates." },
                                { question: "What kind of security measures do you implement?", answer: "We use a multi-layered approach including firewalls, malware scanning, and regular security patches to keep your website protected." },
                                { question: "Can I upgrade or downgrade my plan?", answer: "Yes, you can change your plan at any time. We'll prorate the difference if you upgrade mid-cycle." },
                                { question: "Do you offer emergency support?", answer: "Yes, our Pro and Enterprise plans include priority support for urgent issues. Basic plan clients can purchase emergency support as needed." }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Keep Your Website in Top Shape?</h2>
                        <p className="text-xl mb-8">Let our experts handle the technical details while you focus on your business.</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get Started with Maintenance and Support</a>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default MaintenanceAndSupportPage