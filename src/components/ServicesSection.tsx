'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Paintbrush, Video, Code, FileSpreadsheet, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Graphic Design',
    description: 'Eye-catching visuals that bring your brand to life.',
    icon: Paintbrush,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing to captivate your audience.',
    icon: Video,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Web Development',
    description: 'Custom websites that drive engagement and conversions.',
    icon: Code,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Digital Templates',
    description: 'Premium templates to streamline your workflow.',
    icon: FileSpreadsheet,
    gradient: 'from-emerald-500 to-teal-500'
  }
]

export default function ServicesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 80%',
        }
      })

      gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="services-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your brand and streamline your workflow
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="w-12 h-12 mb-6 text-[#22D3EE]">
                  <service.icon className="w-full h-full" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <button className="flex items-center text-[#22D3EE] font-medium group/button">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/button:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

