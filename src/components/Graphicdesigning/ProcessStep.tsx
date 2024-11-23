'use client'

import { motion } from 'framer-motion'

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        {number}
      </div>
      <h4 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h4>
      <p className="text-indigo-500">{description}</p>
    </motion.div>
  )
}

export default ProcessStep