// pages/custom-website-design.js
import Head from 'next/head'
import Image from 'next/image'

export default function CustomWebsiteDesign() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Head>
                <title>Custom Website Design | WebDevExperts</title>
                <meta name="description" content="Tailored website designs created from scratch based on your unique specifications and requirements." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
                <header className="bg-white shadow-md sticky top-0 z-50">
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
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Custom Website Design</h1>
                            <p className="text-xl mb-8">Tailored designs that bring your vision to life</p>
                            <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get a Free Consultation</a>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-20">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Custom Design?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { title: "Unique Branding", description: "Stand out with a design that perfectly reflects your brand identity." },
                                    { title: "User-Centric Approach", description: "Intuitive layouts and navigation tailored to your target audience." },
                                    { title: "Scalable Solutions", description: "Designs that grow with your business and adapt to future needs." },
                                    { title: "SEO Optimization", description: "Built-in best practices to improve your search engine rankings." },
                                    { title: "Performance Focused", description: "Lightning-fast load times and smooth user experiences." },
                                    { title: "Cross-Platform Compatibility", description: "Seamless functionality across all devices and browsers." }
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
                            <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
                            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                                {[
                                    { step: "1", title: "Discovery", description: "We learn about your business, goals, and target audience." },
                                    { step: "2", title: "Wireframing", description: "Creating the blueprint of your website's structure and layout." },
                                    { step: "3", title: "Design", description: "Bringing your website to life with colors, typography, and imagery." },
                                    { step: "4", title: "Development", description: "Building a fully functional website based on the approved design." },
                                    { step: "5", title: "Launch", description: "Rigorous testing and a smooth deployment of your new website." }
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
                            <h2 className="text-3xl font-bold text-center mb-12">Our Custom Design Portfolio</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                        <Image src={`/portfolio-${item}.jpg`} alt={`Project ${item}`} width={400} height={300} layout="responsive" />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Project {item}</h3>
                                            <p className="text-gray-600">A brief description of the custom design project and its unique features.</p>
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
                                    { question: "How long does the custom design process take?", answer: "The timeline varies depending on the project complexity, but typically ranges from 4-8 weeks." },
                                    { question: "Do you offer website maintenance after launch?", answer: "Yes, we offer ongoing maintenance and support packages to keep your website up-to-date and secure." },
                                    { question: "Can you redesign my existing website?", answer: "Absolutely! We specialize in both new designs and redesigns of existing websites." },
                                    { question: "How do you ensure my website will be mobile-friendly?", answer: "We use responsive design techniques to ensure your website looks great on all devices." }
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
                            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Custom Website Project?</h2>
                        <p className="text-xl mb-8">Let&apos;s bring your vision to life with a unique, tailored design.</p>
                            <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get Started Now</a>
                        </div>
                    </section>
            </main>

        </div>
    )
}