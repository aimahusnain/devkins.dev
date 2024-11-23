'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  icon: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-indigo-700">{title}</h4>
    </motion.div>
  )
}

export default ServiceCard