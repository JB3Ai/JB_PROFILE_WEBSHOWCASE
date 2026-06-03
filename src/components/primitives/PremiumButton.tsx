import React from 'react'
import { motion } from 'framer-motion'

interface PremiumButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}: PremiumButtonProps) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    success: 'btn-success',
    ghost: 'btn-ghost'
  }[variant]
  
  const sizeClass = {
    sm: 'btn-sm',
    md: 'btn',
    lg: 'btn px-6 py-3 text-base'
  }[size]
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${variantClass} ${sizeClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </motion.button>
  )
}
