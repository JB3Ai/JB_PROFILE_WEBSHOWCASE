import React from 'react'

interface OsMetricCardProps {
  label: string
  value: string
  detail?: string
  tone?: 'default' | 'accent' | 'success' | 'warning'
  className?: string
}

export default function OsMetricCard({
  label,
  value,
  detail,
  tone = 'default',
  className = ''
}: OsMetricCardProps) {
  return (
    <div className={`os-metric-card os-metric-card-${tone} ${className}`.trim()}>
      <div className="os-metric-label">{label}</div>
      <div className="os-metric-value">{value}</div>
      {detail ? <p className="os-metric-detail">{detail}</p> : null}
    </div>
  )
}
