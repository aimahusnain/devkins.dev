'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PortfolioItemProps {
  image: string
  title: string
  category: string
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h4>
        <p className="text-indigo-500 capitalize">{category}</p>
      </div>
    </motion.div>
  )
}

export default PortfolioItem