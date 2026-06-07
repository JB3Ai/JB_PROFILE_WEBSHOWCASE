import React, { useEffect, useState } from 'react'
import { resolveAssetPath } from '../../data/assetRegistry'

type AssetThumbnailProps = {
  src?: string | null
  fallbackSrc: string
  alt: string
  className?: string
  imageClassName?: string
  overlay?: React.ReactNode
  loading?: 'lazy' | 'eager'
  sizes?: string
}

export default function AssetThumbnail({
  src,
  fallbackSrc,
  alt,
  className = '',
  imageClassName = '',
  overlay,
  loading = 'lazy',
  sizes
}: AssetThumbnailProps) {
  const preferredSrc = resolveAssetPath(src, fallbackSrc)
  const [currentSrc, setCurrentSrc] = useState(preferredSrc)
  const isUsingFallback = currentSrc === fallbackSrc

  useEffect(() => {
    setCurrentSrc(preferredSrc)
  }, [preferredSrc])

  return (
    <div className={`asset-frame ${isUsingFallback ? 'asset-frame-fallback' : ''} ${className}`.trim()}>
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        sizes={sizes}
        className={`asset-image ${isUsingFallback ? 'asset-image-fallback' : ''} ${imageClassName}`.trim()}
        onError={() => {
          if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc)
          }
        }}
      />
      {overlay ? <div className="asset-overlay">{overlay}</div> : null}
    </div>
  )
}
