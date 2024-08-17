import Image from 'next/image'
import React from 'react'

const WebsiteRedesignPage = () => {
    return (
        <div>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WebDevExperts</div>
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#why-redesign" className="text-gray-600 hover:text-blue-600">Why Redesign</a>
                        <a href="#services" className="text-gray-600 hover:text-blue-600">Our Services</a>
                        <a href="#process" className="text-gray-600 hover:text-blue-600">Our Process</a>
                        <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
                    </div>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Website Redesign Services</h1>
                        <p className="text-xl mb-8">Transform your online presence with a modern, effective website</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Your Redesign</a>
                    </div>
                </section>

                {/* Why Redesign Section */}
                <section id="why-redesign" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Consider a Website Redesign?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Outdated Design", description: "Refresh your brand image with a modern, appealing design." },
                                { title: "Poor User Experience", description: "Improve navigation and functionality for better engagement." },
                                { title: "Mobile Responsiveness", description: "Ensure your site works flawlessly on all devices." },
                                { title: "Slow Loading Speed", description: "Optimize performance for faster loading and better SEO." },
                                { title: "Low Conversion Rates", description: "Implement conversion-focused design to boost results." },
                                { title: "Difficult to Update", description: "Switch to a user-friendly CMS for easy content management." }
                            ].map((reason, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Services Section */}
                <section id="services" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Website Redesign Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "UI/UX Overhaul", description: "Create an intuitive and visually appealing user interface." },
                                { name: "Responsive Design", description: "Ensure your site looks great on desktop, tablet, and mobile." },
                                { name: "Performance Optimization", description: "Speed up your site for better user experience and SEO." },
                                { name: "Content Strategy", description: "Develop a content plan that aligns with your business goals." },
                                { name: "SEO Enhancement", description: "Implement on-page SEO best practices for better visibility." },
                                { name: "Accessibility Improvements", description: "Make your site usable for people with disabilities." },
                                { name: "E-commerce Integration", description: "Add or upgrade e-commerce functionality to boost sales." },
                                { name: "Analytics Setup", description: "Implement tracking to measure your site's performance." },
                                { name: "Security Upgrades", description: "Enhance your website's security measures." }
                            ].map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{service.name}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Website Redesign Process</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                            {[
                                { step: "1", title: "Analysis", description: "Evaluate current site performance and identify improvement areas." },
                                { step: "2", title: "Strategy", description: "Develop a redesign plan aligned with your business objectives." },
                                { step: "3", title: "Design", description: "Create wireframes and visual designs for the new site." },
                                { step: "4", title: "Development", description: "Build the new site with modern, efficient code." },
                                { step: "5", title: "Testing & Launch", description: "Thoroughly test and deploy your redesigned website." }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">{step.step}</div>
                                    <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                                    <p className="mt-2 text-gray-600 text-center">{step.description}</p>
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
                                { question: "How long does a website redesign typically take?", answer: "The timeline varies depending on the complexity of the site, but most redesigns take 8-12 weeks from start to finish." },
                                { question: "Will my website be offline during the redesign process?", answer: "No, we develop the new design on a staging site, ensuring your current site remains live until the new one is ready to launch." },
                                { question: "Can you preserve our current SEO rankings during a redesign?", answer: "Yes, we implement SEO best practices and create a proper redirection plan to maintain your current SEO standings." },
                                { question: "Do you offer post-launch support for redesigned websites?", answer: "Absolutely! We provide ongoing support and maintenance packages to keep your new site running smoothly." }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Revitalize Your Online Presence?</h2>
                        <p className="text-xl mb-8">Let&apos;s create a website that truly represents your brand and drives results.</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Your Website Redesign Project</a>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default WebsiteRedesignPage