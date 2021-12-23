import React from "react";
import {flatImageData} from "./components/useLoadImages";
import "./Home.css";

const Album=()=> {
  return (
    <div>
      {flatImageData.map((c,i)=>
        <img
          key={`${i}`}
          src={`${c}`}
          alt={`${i}_${c}`}
        />
      )}
    </div>  
  );
}
export default Album;