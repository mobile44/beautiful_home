import React, {useEffect} from "react";
import ProgressiveLoad from "./hooks/ProgressiveLoad";
import {flatImageData, flatImageDataBlur} from "./hooks/useLoadImages";
import "./Home.css";

const Home = (props) => {
  useEffect(()=>{
    try {
      props.updateHome(true);
      props.updateAlbum(false);
      props.updateForm(false);
      props.updateContact(false);
    } catch(err) {}
    
  },[props])
  
  window.localStorage.setItem('appPage', JSON.stringify('home'));
  const src = [0, 1, 2, 3];
  let blur;
  [src[0], { blur }] = ProgressiveLoad(flatImageDataBlur[0], flatImageData[0]);
  [src[1]] = ProgressiveLoad(flatImageDataBlur[1], flatImageData[1]);
  [src[2]] = ProgressiveLoad(flatImageDataBlur[2], flatImageData[2]);
  [src[3]] = ProgressiveLoad(flatImageDataBlur[3], flatImageData[3]);

  return (
    <div className="pageContent">
      <img className={blur?"colBlur":"colReal"}
        src={src[0]}
        alt="img"
      />
      <img className={blur?"colBlur":"colReal"}
        src={src[1]}
        alt="img"
      />
      <img className={blur?"colBlur":"colReal"}
        src={src[2]}
        alt="img"
      />
      <img className={blur?"colBlur":"colReal"}
        src={src[3]}
        alt="img"
      />
    </div>
        
  )
}
export default Home;