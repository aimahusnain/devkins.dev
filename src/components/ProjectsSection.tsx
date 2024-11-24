'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'E-commerce Platform', description: 'A modern online shopping experience', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Health & Fitness App', description: 'Track your workouts and nutrition', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Smart Home Dashboard', description: 'Control your home with ease', image: '/placeholder.svg?height=300&width=400' },
]

export default function ProjectsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-[color:var(--color-background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--color-text)] mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[color:var(--color-secondary)] mb-2">{project.title}</h3>
                <p className="text-[color:var(--color-text)] opacity-80 mb-4">{project.description}</p>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

