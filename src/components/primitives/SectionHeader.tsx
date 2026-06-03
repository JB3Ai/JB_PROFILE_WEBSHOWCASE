import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  animate?: boolean
}

export default function SectionHeader({ title, subtitle, align = 'center', animate = true }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }
  
  return (
    <motion.div
      variants={animate ? containerVariants : undefined}
      initial={animate ? 'hidden' : undefined}
      whileInView={animate ? 'visible' : undefined}
      viewport={animate ? { once: true, margin: '-100px' } : undefined}
      className={alignClass}
    >
      <h2 className="section-heading text-white">{title}</h2>
      {subtitle && (
        <p className="section-subheading text-gray-400">{subtitle}</p>
      )}
    </motion.div>
  )
}
