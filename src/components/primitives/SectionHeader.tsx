import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: 'left' | 'center'
  animate?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  animate = true,
  className = ''
}: SectionHeaderProps) {
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
      className={`${alignClass} ${className}`}
    >
      {eyebrow ? <div className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</div> : null}
      <h2 className="mt-4 text-heading-lg text-white">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-3xl text-body-lg text-[color:var(--text-secondary)]">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
