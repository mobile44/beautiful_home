import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Album from "./Album";
import Contact from "./Contact";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeHome, setActiveHome] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }
  console.log("Path: ", window.location.pathname);
  console.log("Page: ", currentPage);
  let appPage;
  try {
    appPage=JSON.parse(window.localStorage.getItem('appPage'));
    console.log("App: ", appPage);
  } catch(err) {
    console.log(err);
  }
  useEffect(()=> {
    if (currentPage==="" && appPage!=="") {
      if (appPage==="home") {
        setActiveHome(true);
        setActiveAlbum(false);
        setActiveContact(false);
      }
      if (appPage==="album") {
        setActiveHome(false);
        setActiveAlbum(true);
        setActiveContact(false);
      }
      if (appPage==="contact") {
        setActiveHome(false);
        setActiveAlbum(false);
        setActiveContact(true);
      }
    }
  },[currentPage,appPage]);
  
  //let windowPath = window.location.pathname;
  //windowPath = windowPath.substring(16,windowPath.length);
  //console.log("Pathname:", windowPath);
  /*
  useEffect(() => { //initiate && reload update
    try {
      //const currentPage=JSON.parse(window.localStorage.getItem('activePage'));
      if (windowPath==="home" || windowPath==="") {
        setActiveHome(true);
        setActiveAlbum(false);
        setActiveContact(false);
        //window.localStorage.setItem('activePage', JSON.stringify('Home'));
      } else {
        if (windowPath==="album") {
          setActiveHome(false);
          setActiveAlbum(true);
          setActiveContact(false);
          //window.localStorage.setItem('activePage', JSON.stringify('Album'));
        } else {
          if (windowPath==="contact") {
            setActiveHome(false);
            setActiveAlbum(false);
            setActiveContact(true);
            //window.localStorage.setItem('activePage', JSON.stringify('Contact'));
          } else {
            setActiveHome(true);
            setActiveAlbum(false);
            setActiveContact(false);
          }
        }
      }
    } catch(err) {
      console.log(err)
    }
  },[setActiveHome,setActiveAlbum,setActiveContact,windowPath]);
    */
  function updatePage(activePage) { //by click event to update activePage
    setCurrentPage(activePage);
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
    //window.localStorage.setItem('activePage', JSON.stringify(activePage));
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
            <Link className={activeHome?"aitems":"items"} to="/beautiful_home/" onClick={()=>updatePage("Home")}>Home</Link>
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
        <Route path="/beautiful_home/" element={<Home/>} />
        <Route path="/beautiful_home/album" element={<Album/> } />
        <Route path="/beautiful_home/contact" element={<Contact/>} />
        <Route path="*" element={<Home updateHome={setActiveHome} updateAlbum={setActiveAlbum} updateContact={setActiveContact} />} />
      </Routes>
    </Router>
  )
}
export default App;