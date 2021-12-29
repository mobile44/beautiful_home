import { useState,useEffect} from 'react';

const useWindowSize=()=>{
    const [device,setDevice]=useState("mobile");

    const handleRWD=()=>{
        if(window.innerWidth>768)
            setDevice("PC-size");
        else if (window.innerWidth>576)
            setDevice("tablet-size");
        else
            setDevice("mobile-size");
    }

    useEffect(()=>{ 
        window.addEventListener('resize',handleRWD);
        handleRWD();
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return device;
}

export default useWindowSize;