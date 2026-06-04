import React, { useEffect, useState } from 'react'
import { resolveAssetPath } from '../../data/assetRegistry'

type AssetThumbnailProps = {
  src?: string | null
  fallbackSrc: string
  alt: string
  className?: string
  imageClassName?: string
  overlay?: React.ReactNode
}

export default function AssetThumbnail({
  src,
  fallbackSrc,
  alt,
  className = '',
  imageClassName = '',
  overlay
}: AssetThumbnailProps) {
  const preferredSrc = resolveAssetPath(src, fallbackSrc)
  const [currentSrc, setCurrentSrc] = useState(preferredSrc)

  useEffect(() => {
    setCurrentSrc(preferredSrc)
  }, [preferredSrc])

  return (
    <div className={`asset-frame ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        className={`asset-image ${imageClassName}`}
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
