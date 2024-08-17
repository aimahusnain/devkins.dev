import Image from 'next/image'
import React from 'react'

const PerformanceOptimizationPage = () => {
    return (
        <div>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WebDevExperts</div>
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#importance" className="text-gray-600 hover:text-blue-600">Importance</a>
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Website Performance Optimization</h1>
                        <p className="text-xl mb-8">Boost your site speed and user experience</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Optimize Your Site</a>
                    </div>
                </section>

                {/* Importance Section */}
                <section id="importance" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Performance Matters</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "User Experience", description: "Faster sites lead to better user engagement and satisfaction." },
                                { title: "Conversion Rates", description: "Improved speed can significantly boost conversion rates." },
                                { title: "SEO Rankings", description: "Site speed is a crucial factor in search engine rankings." },
                                { title: "Mobile Performance", description: "Optimized sites perform better on mobile devices." },
                                { title: "Reduced Bounce Rates", description: "Faster load times keep visitors on your site longer." },
                                { title: "Competitive Edge", description: "Outperform competitors with a lightning-fast website." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Performance Optimization Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Page Speed Analysis", description: "Comprehensive analysis of your website's current performance." },
                                { name: "Image Optimization", description: "Compress and optimize images without losing quality." },
                                { name: "Code Minification", description: "Minimize HTML, CSS, and JavaScript for faster loading." },
                                { name: "Caching Implementation", description: "Set up effective caching strategies to reduce server load." },
                                { name: "CDN Integration", description: "Implement Content Delivery Networks for faster global access." },
                                { name: "Database Optimization", description: "Streamline database queries and structure for quicker data retrieval." },
                                { name: "Mobile Optimization", description: "Ensure fast loading and smooth performance on mobile devices." },
                                { name: "Third-party Script Management", description: "Optimize and manage third-party scripts to reduce load times." },
                                { name: "Server Optimization", description: "Fine-tune server settings for optimal performance." }
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
                        <h2 className="text-3xl font-bold text-center mb-12">Our Optimization Process</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                            {[
                                { step: "1", title: "Analysis", description: "Conduct thorough performance audits and identify bottlenecks." },
                                { step: "2", title: "Strategy", description: "Develop a customized optimization plan based on findings." },
                                { step: "3", title: "Implementation", description: "Apply optimizations and best practices to your website." },
                                { step: "4", title: "Testing", description: "Rigorous testing to ensure improvements and identify any issues." },
                                { step: "5", title: "Monitoring", description: "Ongoing performance monitoring and further optimizations." }
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
                                { question: "How long does the optimization process take?", answer: "The timeline varies depending on the size and complexity of your website, but typically ranges from 1-4 weeks for initial optimizations." },
                                { question: "Will optimizations affect my website's design or functionality?", answer: "Our goal is to improve performance without altering design or functionality. In some cases, minor adjustments might be suggested for significant performance gains." },
                                { question: "How much can I expect my website speed to improve?", answer: "Results vary, but we typically see load time improvements of 30-70%. The exact improvement depends on your current setup and the optimizations implemented." },
                                { question: "Do you offer ongoing performance monitoring?", answer: "Yes, we provide ongoing monitoring and maintenance services to ensure your website maintains its optimized performance over time." }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Website?</h2>
                        <p className="text-xl mb-8">Let&apos;s optimize your site for peak performance and user satisfaction.</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Your Optimization Project</a>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default PerformanceOptimizationPage