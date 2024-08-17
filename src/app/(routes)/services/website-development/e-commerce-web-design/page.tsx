import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div><header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WebDevExperts</div>
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
                    <a href="#process" className="text-gray-600 hover:text-blue-600">Our Process</a>
                    <a href="#portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</a>
                    <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
                </div>
            </nav>
        </header>

            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">E-commerce Website Design</h1>
                        <p className="text-xl mb-8">Turn your online store into a sales powerhouse</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get a Free Consultation</a>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our E-commerce Design?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "User-Friendly Interface", description: "Intuitive navigation and smooth checkout process to boost conversions." },
                                { title: "Mobile Optimization", description: "Responsive design for seamless shopping on all devices." },
                                { title: "Secure Transactions", description: "Implement robust security measures to protect customer data." },
                                { title: "Scalable Architecture", description: "Built to grow with your business and handle increased traffic." },
                                { title: "SEO-Friendly Structure", description: "Optimized for search engines to improve organic visibility." },
                                { title: "Integration Capabilities", description: "Seamless connection with payment gateways, CRMs, and other tools." }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our E-commerce Design Process</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                            {[
                                { step: "1", title: "Discovery", description: "Understanding your brand, products, and target market." },
                                { step: "2", title: "Planning", description: "Mapping out user journeys and site architecture." },
                                { step: "3", title: "Design", description: "Creating visually appealing and conversion-oriented layouts." },
                                { step: "4", title: "Development", description: "Building a robust, secure, and scalable e-commerce platform." },
                                { step: "5", title: "Testing & Launch", description: "Rigorous quality assurance and smooth deployment." }
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

                {/* Portfolio Section */}
                <section id="portfolio" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our E-commerce Portfolio</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                    <Image src={`/ecommerce-${item}.jpg`} alt={`E-commerce Project ${item}`} width={400} height={300} layout="responsive" />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">E-commerce Project {item}</h3>
                                        <p className="text-gray-600">A brief description of the e-commerce project and its key features.</p>
                                    </div>
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
                                { question: "Which e-commerce platforms do you work with?", answer: "We have expertise in various platforms including Shopify, WooCommerce, Magento, and custom solutions." },
                                { question: "Can you migrate my existing store to a new platform?", answer: "Yes, we offer seamless migration services to transfer your products, customers, and order history to a new platform." },
                                { question: "Do you provide ongoing support after launch?", answer: "Absolutely! We offer maintenance packages to keep your store updated, secure, and optimized." },
                                { question: "How long does it take to build an e-commerce website?", answer: "The timeline varies based on complexity, but typically ranges from 8-12 weeks for a fully functional e-commerce site." }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Online Sales?</h2>
                        <p className="text-xl mb-8">Let&apos;s create an e-commerce website that converts visitors into customers.</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Your E-commerce Project</a>
                    </div>
                </section>
            </main></div>
    )
}

export default page