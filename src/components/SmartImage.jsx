import React, { useState } from 'react'

// SmartImage tries a list of extensions until the image loads.
// Usage: <SmartImage base="/assets/img/logos/html" alt="HTML" />
export default function SmartImage({ base, alt, className, style, extensions = ['png','jpg','jpeg','svg'] }){
  const [idx, setIdx] = useState(0)

  const src = `${base}.${extensions[idx]}`

  const handleError = () => {
    if (idx < extensions.length - 1) {
      setIdx(i => i + 1)
    }
  }

  return (
    <img src={src} alt={alt} className={className} style={style} onError={handleError} />
  )
}
