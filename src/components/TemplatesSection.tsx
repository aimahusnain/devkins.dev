'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FileSpreadsheet, FileText, Layout } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const templates = [
  { title: 'Financial Dashboard', type: 'Excel', icon: FileSpreadsheet, price: '$29.99' },
  { title: 'Project Proposal', type: 'Word', icon: FileText, price: '$19.99' },
  { title: 'Portfolio Website', type: 'HTML/CSS', icon: Layout, price: '$39.99' },
]

export default function TemplatesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.templates-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.templates-title',
          start: 'top 80%',
        }
      })

      gsap.from('.template-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.templates-grid',
          start: 'top 80%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="templates">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="templates-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Digital Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Boost your productivity with our professionally designed templates
          </p>
        </div>

        <div className="templates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="template-card bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <template.icon className="w-8 h-8 text-[#22D3EE] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{template.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">Type: {template.type}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#22D3EE]">{template.price}</span>
                <button className="px-4 py-2 bg-[#22D3EE] text-white rounded-lg hover:bg-[#1CB5CD] transition-colors duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-[#22D3EE] text-[#22D3EE] rounded-lg hover:bg-[#22D3EE] hover:text-white transition-colors duration-300">
            View All Templates
          </button>
        </div>
      </div>
    </section>
  )
}

