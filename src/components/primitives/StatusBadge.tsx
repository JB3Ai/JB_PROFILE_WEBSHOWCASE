import React from 'react'

interface StatusBadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
  size?: 'sm' | 'md'
}

export default function StatusBadge({ children, variant = 'primary', size = 'md' }: StatusBadgeProps) {
  const variantClass = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
    neutral: 'badge-neutral'
  }[variant]
  
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'
  
  return (
    <span className={`${variantClass} ${sizeClass}`}>
      {children}
    </span>
  )
}
