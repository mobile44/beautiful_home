import {useState, useEffect} from "react";

const ProgressiveLoad = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = useState(lowQualitySrc);
  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = setTimeout(() => {
      setSrc(highQualitySrc);
    },500);
  }, [lowQualitySrc, highQualitySrc]);
  return [src, { blur: src === lowQualitySrc }];
};
export default ProgressiveLoad;