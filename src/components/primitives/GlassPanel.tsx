import React from 'react'
import { motion } from 'framer-motion'

interface GlassPanelProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animate?: boolean
  hover?: boolean
}

export default function GlassPanel({ children, size = 'md', className = '', animate = true, hover = false }: GlassPanelProps) {
  const sizeClass = {
    sm: 'glass-panel-sm',
    md: 'glass-panel-md',
    lg: 'glass-panel-lg'
  }[size]
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }
  
  const hoverVariants = {
    hover: { 
      borderColor: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 16px rgba(6, 182, 212, 0.1)'
    }
  }
  
  return (
    <motion.div
      variants={animate ? containerVariants : undefined}
      initial={animate ? 'hidden' : undefined}
      whileInView={animate ? 'visible' : undefined}
      viewport={animate ? { once: true, margin: '-100px' } : undefined}
      whileHover={hover ? hoverVariants.hover : undefined}
      className={`${sizeClass} ${className} transition-all duration-300`}
    >
      {children}
    </motion.div>
  )
}
