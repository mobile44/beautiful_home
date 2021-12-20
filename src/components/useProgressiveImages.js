import React, {useState, useEffect} from "react";

const useProgressiveImages = (highQualitySrc, lowQualitySrc) => {
  const [src, setSrc] = useState(lowQualitySrc);
  const Images = ["Img0","Img1","Img2","Img3"];
  useEffect(() => { 
    setSrc(lowQualitySrc);
    for (let i = 0; i<highQualitySrc.length; i++) {
      Images[i] = new Image();
      Images[i].src = highQualitySrc;
      Images[i].onload = setTimeout(() => {
        setSrc(highQualitySrc[i]);
      },500);
    }
  }, [highQualitySrc, lowQualitySrc]);
  return (<div>{Images}</div>); 

  //const imgObj = React.createElement("img",{src:image,alt:"flat"},null);
  //return (<div>{imgObj}</div>);
};
export default useProgressiveImages;
