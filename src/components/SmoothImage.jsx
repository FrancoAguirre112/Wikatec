function getWebpSrc(src) {
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
}

export default function SmoothImage({
  src,
  alt,
  className = '',
  loading = 'eager',
  fetchPriority,
  width,
  height,
  ...props
}) {
  const webpSrc = getWebpSrc(src)
  const hasWebp = webpSrc !== src

  return (
    <picture style={{ display: 'contents' }}>
      {hasWebp && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    </picture>
  )
}
