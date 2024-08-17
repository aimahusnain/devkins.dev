import Image from 'next/image'
import React from 'react'

const CMSIntegrationPage = () => {
    return (
        <div>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WebDevExperts</div>
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
                        <a href="#cms-options" className="text-gray-600 hover:text-blue-600">CMS Options</a>
                        <a href="#process" className="text-gray-600 hover:text-blue-600">Our Process</a>
                        <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
                    </div>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">CMS Integration Services</h1>
                        <p className="text-xl mb-8">Empower your website with seamless content management</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get Started</a>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Benefits of CMS Integration</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Easy Content Management", description: "Update your website content without technical knowledge." },
                                { title: "Improved Collaboration", description: "Multiple users can contribute and manage content efficiently." },
                                { title: "Consistent Design", description: "Maintain a uniform look across your website with templating." },
                                { title: "SEO Optimization", description: "Built-in tools to improve your search engine rankings." },
                                { title: "Scalability", description: "Easily add new pages and sections as your website grows." },
                                { title: "Cost-Effective", description: "Reduce long-term maintenance costs with self-management." }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CMS Options Section */}
                <section id="cms-options" className="bg-gray-100 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Popular CMS Options</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "WordPress", description: "Versatile and user-friendly, perfect for blogs and small to medium websites." },
                                { name: "Drupal", description: "Powerful and flexible, ideal for complex and large-scale websites." },
                                { name: "Joomla", description: "Feature-rich and extensible, great for e-commerce and social networking sites." },
                                { name: "Contentful", description: "Headless CMS for creating and managing content across multiple platforms." },
                                { name: "Strapi", description: "Open-source headless CMS with a focus on developer experience." },
                                { name: "Custom CMS", description: "Tailored solution built specifically for your unique requirements." }
                            ].map((cms, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{cms.name}</h3>
                                    <p className="text-gray-600">{cms.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Our CMS Integration Process</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                            {[
                                { step: "1", title: "Requirements Analysis", description: "Understanding your content management needs and goals." },
                                { step: "2", title: "CMS Selection", description: "Choosing the right CMS platform for your specific requirements." },
                                { step: "3", title: "Design & Development", description: "Creating custom themes and functionality for your CMS." },
                                { step: "4", title: "Content Migration", description: "Transferring existing content to the new CMS platform." },
                                { step: "5", title: "Training & Support", description: "Empowering your team to manage the new CMS effectively." }
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
                                { question: "Can I integrate a CMS into my existing website?", answer: "Yes, in most cases we can integrate a CMS into your existing website structure." },
                                { question: "How long does CMS integration typically take?", answer: "The timeline varies depending on the complexity, but it usually takes 4-8 weeks for a full integration." },
                                { question: "Do you provide CMS training for our team?", answer: "Absolutely! We offer comprehensive training to ensure your team can effectively manage the new CMS." },
                                { question: "Can you help with ongoing CMS maintenance?", answer: "Yes, we offer maintenance packages to keep your CMS updated, secure, and optimized." }
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
                        <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Content Management?</h2>
                        <p className="text-xl mb-8">Let&apos;s integrate the perfect CMS solution for your website.</p>
                        <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Start Your CMS Integration Project</a>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CMSIntegrationPage