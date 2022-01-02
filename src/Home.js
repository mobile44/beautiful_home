import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import * as d3 from "d3";
import UseD3Chart from "./hooks/UseD3Chart";
import "./Home.css";

function Home(props) {
  useEffect(()=>{
    try {
      props.updateHome(true);
      props.updateAlbum(false);
      props.updateForm(false);
      props.updateContact(false);
    } catch(err) {}
    
  },[props])
  window.localStorage.setItem('appPage', JSON.stringify('home'));
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData());
  const changeData = () => {
    setData(generateData());
  };

  return (
    <div className="portalContent">
      <div className="chartContent">
        
        <div className="chartDiagram">
          <UseD3Chart
            data={data}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
          <div className="chartLabel">
            <span>Demo Chart</span>
          </div>
        </div>
        
      </div>
      <div className="chartButton">
        <button onClick={changeData}>Generate Radom Data</button>
      </div>
    </div>
  );
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
export default Home;