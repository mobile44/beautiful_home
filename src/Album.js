import React from "react";
import ProgressiveLoad from "./hooks/ProgressiveLoad";
import {flatImageData, flatImageDataBlur} from "./hooks/useLoadImages";
import "./Album.css";
//import { useParams } from 'react-router-dom';

const Album = (props) => {
  window.localStorage.setItem('appPage', JSON.stringify('album'));
  const src = [0, 1, 2, 3];
  let blur;
  [src[0], { blur }] = ProgressiveLoad(flatImageDataBlur[3], flatImageData[3]);
  [src[1]] = ProgressiveLoad(flatImageDataBlur[2], flatImageData[2]);
  [src[2]] = ProgressiveLoad(flatImageDataBlur[1], flatImageData[1]);
  [src[3]] = ProgressiveLoad(flatImageDataBlur[0], flatImageData[0]);

  return (
    <div className="albumContent">
      <div className="albumContainer">
        <img className={blur?"albumBlur":"albumReal"}
          src={src[0]}
          alt="img"
        />
        <div className="albumMiddle">
          <div className="albumText">Leafless Tree</div>
        </div>
      </div>
      <div className="albumContainer">
        <img className={blur?"albumBlur":"albumReal"}
          src={src[1]}
          alt="img"
        />
        <div className="albumMiddle">
          <div className="albumText">Evening Sunset</div>
        </div>
      </div>
      <div className="albumContainer">
        <img className={blur?"albumBlur":"albumReal"}
          src={src[2]}
          alt="img"
        />
        <div className="albumMiddle">
          <div className="albumText">Twilight Moment</div>
        </div>
      </div>
      <div className="albumContainer">
        <img className={blur?"albumBlur":"albumReal"}
          src={src[3]}
          alt="img"
        />
        <div className="albumMiddle">
          <div className="albumText">Cloudy Day</div>
        </div>
      </div>
    </div>
        
  )
}
export default Album;