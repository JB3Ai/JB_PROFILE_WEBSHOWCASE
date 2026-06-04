import React from 'react'

interface StatusBadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
  size?: 'sm' | 'md'
  className?: string
}

export default function StatusBadge({ children, variant = 'primary', size = 'md', className = '' }: StatusBadgeProps) {
  const variantClass = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
    neutral: 'badge-neutral'
  }[variant]
  
  const sizeClass = size === 'sm' ? 'px-2.5 py-1 text-[10px]' : 'px-3 py-1.5 text-[11px]'
  
  return (
    <span className={`${variantClass} ${sizeClass} ${className}`}>
      {children}
    </span>
  )
}
