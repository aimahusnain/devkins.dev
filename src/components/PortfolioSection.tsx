'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const portfolioItems = [
  { title: 'Brand Identity Design', category: 'Graphic Design', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Corporate Video', category: 'Video Editing', image: '/placeholder.svg?height=300&width=400' },
  { title: 'E-commerce Website', category: 'Web Development', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Social Media Graphics', category: 'Graphic Design', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Product Showcase', category: 'Video Editing', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Portfolio Website', category: 'Web Development', image: '/placeholder.svg?height=300&width=400' },
]

export default function PortfolioSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.portfolio-title',
          start: 'top 80%',
        }
      })

      gsap.from('.portfolio-item', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 80%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="portfolio-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of projects across graphic design, video editing, and web development
          </p>
        </div>

        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  layout="responsive"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#22D3EE] text-white rounded-lg hover:bg-[#1CB5CD] transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

