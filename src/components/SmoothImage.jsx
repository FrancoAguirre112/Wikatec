import { useRef, useState, useEffect } from 'react'

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

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  return (
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
  )
}
