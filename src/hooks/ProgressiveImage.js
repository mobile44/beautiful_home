import React, { useState, useEffect } from 'react';

const ProgressiveImage = React.memo(({ src, placeholder, alt = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = setTimeout(() => {
      setLoading(false);
      updateSrc(src);
    },500);
  }, [src])

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity .15s linear"
      }}
      alt={alt}
    />
  )
});

export default ProgressiveImage;