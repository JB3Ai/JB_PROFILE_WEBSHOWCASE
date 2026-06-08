import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface PremiumButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export default function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel
}: PremiumButtonProps) {
  const reduceMotion = useReducedMotion()
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
    lg: 'btn-lg'
  }[size]
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={reduceMotion || disabled ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion || disabled ? undefined : { scale: 0.98 }}
      className={`btn ${variantClass} ${sizeClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed saturate-50' : ''}`}
    >
      {children}
    </motion.button>
  )
}
