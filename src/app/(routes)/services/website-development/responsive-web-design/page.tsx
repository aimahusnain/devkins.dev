import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div><header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WebDevExperts</div>
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Responsive Web Design</h1>
                        <p className="text-xl mb-8">Websites that look great on every device</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get a Free Consultation</a>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Responsive Design?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Mobile-First Approach", description: "Optimized for smartphones and tablets, where most web browsing occurs." },
                                { title: "Improved User Experience", description: "Seamless navigation and readability across all screen sizes." },
                                { title: "Better SEO Performance", description: "Google favors mobile-friendly websites in search rankings." },
                                { title: "Cost-Effective", description: "One website that works everywhere, reducing development and maintenance costs." },
                                { title: "Faster Loading Times", description: "Optimized images and layouts for quicker loading on mobile devices." },
                                { title: "Future-Proof Design", description: "Adaptable to new devices and screen sizes as technology evolves." }
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
                        <h2 className="text-3xl font-bold text-center mb-12">Our Responsive Design Process</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                            {[
                                { step: "1", title: "Analysis", description: "Understanding your audience and device usage patterns." },
                                { step: "2", title: "Content Strategy", description: "Prioritizing content for different screen sizes." },
                                { step: "3", title: "Wireframing", description: "Creating flexible layouts that adapt to various devices." },
                                { step: "4", title: "Design", description: "Developing fluid grids and flexible images." },
                                { step: "5", title: "Development", description: "Implementing responsive code and testing across devices." }
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
                        <h2 className="text-3xl font-bold text-center mb-12">Our Responsive Design Portfolio</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                    <Image src={`/responsive-${item}.jpg`} alt={`Project ${item}`} width={400} height={300} layout="responsive" />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Responsive Project {item}</h3>
                                        <p className="text-gray-600">A brief description of the responsive design project and its adaptability features.</p>
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
                                { question: "What is responsive web design?", answer: "Responsive web design is an approach that makes web pages render well on a variety of devices and window or screen sizes." },
                                { question: "How does responsive design differ from mobile-first design?", answer: "Mobile-first is a strategy within responsive design that prioritizes designing for mobile devices before scaling up to larger screens." },
                                { question: "Can my existing website be made responsive?", answer: "Yes, we can retrofit your existing website with responsive design principles to improve its performance across devices." },
                                { question: "How long does it take to create a responsive website?", answer: "The timeline varies based on complexity, but typically ranges from 6-12 weeks for a fully responsive website." }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Make Your Website Responsive?</h2>
                        <p className="text-xl mb-8">Let&apos;s create a website that looks great on every device.</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get Started Now</a>
                    </div>
                </section>
            </main></div>
    )
}

export default page