import React, { useState } from 'react'

// SmartImage tries a list of extensions until the image loads.
// If all fail, it stops trying to avoid console 404 errors.
// Usage: <SmartImage base="/assets/img/logos/html" alt="HTML" />
export default function SmartImage({ base, alt, className, style, extensions = ['png','jpg','jpeg','svg'] }){
  const [idx, setIdx] = useState(0)
  const [failed, setFailed] = useState(false)

  const src = failed ? '' : `${base}.${extensions[idx]}`

  const handleError = () => {
    if (idx < extensions.length - 1) {
      setIdx(i => i + 1)
    } else {
      setFailed(true)
    }
  }

  if (failed) {
    return null // Or return a placeholder: <div className={className} style={style}>{alt}</div>
  }

  return (
    <img src={src} alt={alt} className={className} style={style} onError={handleError} />
  )
}
