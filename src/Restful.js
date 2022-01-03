import React, { useState, useEffect } from 'react';

function Restful(url) {
  window.localStorage.setItem('appPage', JSON.stringify('restful'));
  const [data, setData] = useState();
  //const [value, setValue] = useState(0);

  useEffect(()=>{
    const url = 'https://my-json-server.typicode.com/mobile44/beautiful_home/db';

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log("JSON: ", json.list[0].id);
        //setList(json=>[...list,json]);
        //setNames(names=>[...names,name]);
        //console.log("List: ", list);
        //setData(json.list[0].id);
        //setValue(1);
        setData(json);
        console.log(data);
      } catch(err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);
  return (
    <div>
      <p>JSON URL: https://my-json-server.typicode.com/mobile44/beautiful_home/db</p>
      {data && <p>{data.list[0].id}</p>}
      {data && <p>{data.list[0].item}</p>}
      {data && <p>{data.list[1].id}</p>}
      {data && <p>{data.list[1].item}</p>}
      {/*list && <p>{list.map((c,i)=><p>c</p>)}</p>*/}
    </div>
  );
}

export default Restful;