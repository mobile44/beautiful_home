import React from "react";
import useProgressive from "./components/useProgressive";
import {flatImageData, flatImageDataBlur} from "./components/useLoadImages";
import "./Home.css";

const Home = () => {
  const src = [0, 1, 2, 3];
  let blur;
  [src[0], { blur }] = useProgressive(flatImageDataBlur[0], flatImageData[0]);
  [src[1]] = useProgressive(flatImageDataBlur[1], flatImageData[1]);
  [src[2]] = useProgressive(flatImageDataBlur[2], flatImageData[2]);
  [src[3]] = useProgressive(flatImageDataBlur[3], flatImageData[3]);

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