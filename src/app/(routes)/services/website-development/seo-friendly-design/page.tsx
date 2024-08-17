import Image from 'next/image'
import React from 'react'

const SEOFriendlyDesignPage = () => {
    return (
        <div>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WebDevExperts</div>
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
                        <a href="#key-elements" className="text-gray-600 hover:text-blue-600">Key Elements</a>
                        <a href="#process" className="text-gray-600 hover:text-blue-600">Our Process</a>
                        <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
                    </div>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">SEO-friendly Web Design</h1>
                        <p className="text-xl mb-8">Boost your online visibility with search engine optimized websites</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Optimize Your Site</a>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Benefits of SEO-friendly Design</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Increased Organic Traffic", description: "Attract more visitors through improved search engine rankings." },
                                { title: "Better User Experience", description: "SEO best practices often align with improved usability and accessibility." },
                                { title: "Higher Conversion Rates", description: "Targeted traffic is more likely to convert into customers or leads." },
                                { title: "Cost-Effective Marketing", description: "Organic search traffic can reduce reliance on paid advertising." },
                                { title: "Brand Credibility", description: "Higher search rankings can increase trust in your brand." },
                                { title: "Long-Term Results", description: "SEO efforts compound over time, providing lasting benefits." }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Elements Section */}
                <section id="key-elements" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Key Elements of SEO-friendly Design</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Responsive Design", description: "Ensures optimal viewing experience across all devices." },
                                { name: "Fast Load Times", description: "Optimized images and code for quick page loading." },
                                { name: "Clean URL Structure", description: "Logical and readable URLs for both users and search engines." },
                                { name: "Optimized Meta Tags", description: "Well-crafted title tags and meta descriptions for each page." },
                                { name: "Semantic HTML", description: "Proper use of HTML tags to convey content hierarchy and meaning." },
                                { name: "Internal Linking", description: "Strategic internal links to improve site structure and user navigation." },
                                { name: "Mobile-First Approach", description: "Designing for mobile devices as a priority." },
                                { name: "Content Organization", description: "Logical content structure with proper use of headings (H1, H2, etc.)." },
                                { name: "Image Optimization", description: "Compressed images with descriptive alt text for better accessibility and SEO." }
                            ].map((element, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{element.name}</h3>
                                    <p className="text-gray-600">{element.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our SEO-friendly Design Process</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                            {[
                                { step: "1", title: "Keyword Research", description: "Identifying target keywords and search intent." },
                                { step: "2", title: "Site Architecture", description: "Planning an SEO-optimized site structure and navigation." },
                                { step: "3", title: "Content Strategy", description: "Developing a content plan aligned with SEO goals." },
                                { step: "4", title: "Technical Optimization", description: "Implementing technical SEO best practices in the design." },
                                { step: "5", title: "Performance Tuning", description: "Optimizing site speed and mobile responsiveness." }
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
                                { question: "How long does it take to see results from SEO-friendly design?", answer: "While some improvements can be seen quickly, significant results typically take 3-6 months as search engines index and evaluate your site." },
                                { question: "Can you optimize my existing website design for SEO?", answer: "Yes, we can audit your current site and implement SEO improvements without a complete redesign if the existing structure allows." },
                                { question: "Do you provide ongoing SEO services after the design is complete?", answer: "We offer ongoing SEO maintenance and optimization packages to keep your site performing well in search results." },
                                { question: "How do you measure the success of SEO-friendly design?", answer: "We track key metrics such as organic traffic growth, search engine rankings, and conversion rates to measure SEO success." }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Search Engine Rankings?</h2>
                        <p className="text-xl mb-8">Let&apos;s create an SEO-friendly website that drives organic traffic and conversions.</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Your SEO-friendly Design Project</a>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SEOFriendlyDesignPage