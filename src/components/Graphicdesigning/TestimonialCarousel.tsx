'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { id: 1, text: "Creative Graphics Co. transformed our brand identity. Their designs are innovative and captivating!", author: "Jane Doe, CEO" },
  { id: 2, text: "Working with this team was a pleasure. They understood our vision and delivered beyond our expectations.", author: "John Smith, Marketing Director" },
  { id: 3, text: "The attention to detail and creativity in their work is unmatched. Highly recommended!", author: "Alice Johnson, Small Business Owner" },
]

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-indigo-700 p-8 rounded-lg shadow-lg"
        >
          <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
          <p className="font-semibold">{testimonials[currentIndex].author}</p>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  )
}

export default TestimonialCarousel