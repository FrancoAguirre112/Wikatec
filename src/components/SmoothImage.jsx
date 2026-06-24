import { useRef, useState, useEffect } from 'react'

function getWebpSrc(src) {
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
}

export default function SmoothImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority,
  width,
  height,
  ...props
}) {
  const imgRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const webpSrc = getWebpSrc(src)
  const hasWebp = webpSrc !== src

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  return (
    <picture style={{ display: 'contents' }}>
      {hasWebp && <source srcSet={webpSrc} type="image/webp" />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`transition-opacity duration-700 ease-out ${loaded ? '' : '!opacity-0'} ${className}`}
        {...props}
      />
    </picture>
  )
}
