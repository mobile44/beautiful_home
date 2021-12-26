import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Album from "./Album";
import Contact from "./Contact";

function App(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeHome, setActiveHome] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => { //initiate && reload update
    try {
      const currentPage=JSON.parse(window.localStorage.getItem('activePage'));
      if (currentPage==="Home" || currentPage==="") {
        setActiveHome(true);
        setActiveAlbum(false);
        setActiveContact(false);
        window.localStorage.setItem('activePage', JSON.stringify('Home'));
      }
      if (currentPage==="Album") {
        setActiveHome(false);
        setActiveAlbum(true);
        setActiveContact(false);
        window.localStorage.setItem('activePage', JSON.stringify('Album'));
      }
      if (currentPage==="Contact") {
        setActiveHome(false);
        setActiveAlbum(false);
        setActiveContact(true);
        window.localStorage.setItem('activePage', JSON.stringify('Contact'));
      }
    } catch(err) {
      console.log(err)
    }
  },[setActiveHome,setActiveAlbum,setActiveContact]);
    
  function updatePage(activePage) { //by click event to update activePage
    if (activePage==="Home") {
      setActiveHome(true);
      setActiveAlbum(false);
      setActiveContact(false);
    }
    if (activePage==="Album") {
      setActiveHome(false);
      setActiveAlbum(true);
      setActiveContact(false);
    }
    if (activePage==="Contact") {
      setActiveHome(false);
      setActiveAlbum(false);
      setActiveContact(true);
    }
    window.localStorage.setItem('activePage', JSON.stringify(activePage));
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
          <Link className={activeHome?"aitems":"items"} to="/" onClick={()=>updatePage("Home")}>Home</Link>
          <Link className={activeAlbum?"aitems":"items"} to="/beautiful_home/album" onClick={()=>updatePage("Album")}>Album</Link>
          <Link className={activeContact?"aitems":"items"} to="/beautiful_home/contact" onClick={()=>updatePage("Contact")}>Contact</Link>
        </div>
      )}
      {/*<button onClick={toggleNav} className="btn">Menu</button>*/}
      <div className="shortMenu" onClick={toggleNav}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beautiful_home" element={<Home/>} />
        <Route path="/beautiful_home/album" element={<Album/>} />
        <Route path="/beautiful_home/contact" element={<Contact/>} />
        {/*<Route path="/album" element={<Album/>} />
        <Route path="/contact" element={<Contact/>} />*/}
      </Routes>
    </Router>
  )
}
export default App;