import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Album from "./Album";

function App(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeHome, setActiveHome] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  const setActive = (activeItem) => {
    if (activeItem==="Home") {
      setActiveHome(true);
      setActiveAlbum(false);
      setActiveContact(false);
    }
    if (activeItem==="Album") {
      setActiveHome(false);
      setActiveAlbum(true);
      setActiveContact(false);
    }
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  }, [])

  return (
    <Router>
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <div className="list">
          <Link className={activeHome?"aitems":"items"} to="/" onClick={()=>setActive("Home")}>Home</Link>
          <Link className={activeAlbum?"aitems":"items"} to="/album" onClick={()=>setActive("Album")}>Album</Link>
          <Link className="items" to="/">CONTACT</Link>
        </div>
      )}
      <button onClick={toggleNav} className="btn">Menu</button>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beautiful_home" element={<Home/>} />
        <Route path="/album" element={<Album/>} />
      </Routes>
    </Router>
  )
}
export default App;