import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Album from "./Album";
import Form from "./Form";
import Restful from "./Restful";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeHome, setActiveHome] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  const [activeRestful, setActiveRestful] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    console.log("Toggle:", toggleMenu);
  }
  //console.log("Path: ", window.location.pathname);
  //console.log("Page: ", currentPage);
  let appPage;
  try {
    appPage=JSON.parse(window.localStorage.getItem('appPage'));
    //console.log("App: ", appPage);
  } catch(err) {
    //console.log(err);
  }
  useEffect(()=> {
    if (currentPage==="" && appPage!=="") {
      if (appPage==="home") {
        setActiveHome(true);
        setActiveAlbum(false);
        setActiveForm(false);
        setActiveRestful(false);
      }
      if (appPage==="album") {
        setActiveHome(false);
        setActiveAlbum(true);
        setActiveForm(false);
        setActiveRestful(false);
      }
      if (appPage==="form") {
        setActiveHome(false);
        setActiveAlbum(false);
        setActiveForm(true);
        setActiveRestful(false);
      }
      if (appPage==="restful") {
        setActiveHome(false);
        setActiveAlbum(false);
        setActiveForm(false);
        setActiveRestful(true);
      }
    }
  },[currentPage,appPage]);
  
  function updatePage(activePage) { //by click event to update activePage
    setCurrentPage(activePage);
    if (toggleMenu) {
      setToggleMenu(false);
    }
    if (activePage==="Home") {
      setActiveHome(true);
      setActiveAlbum(false);
      setActiveForm(false);
      setActiveRestful(false);
    }
    if (activePage==="Album") {
      setActiveHome(false);
      setActiveAlbum(true);
      setActiveForm(false);
      setActiveRestful(false);
    }
    if (activePage==="Form") {
      setActiveHome(false);
      setActiveAlbum(false);
      setActiveForm(true);
      setActiveRestful(false);
    }
    if (activePage==="Restful") {
      setActiveHome(false);
      setActiveAlbum(false);
      setActiveForm(false);
      setActiveRestful(true);
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
            <Link className={activeForm?"aitems":"items"} to="/beautiful_home/form" onClick={()=>updatePage("Form")}>Form</Link>
            <Link className={activeRestful?"aitems":"items"} to="/beautiful_home/restful" onClick={()=>updatePage("Restful")}>Restful</Link>
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
        <Route path="/beautiful_home/form" element={<Form/>} />
        <Route path="/beautiful_home/restful" element={<Restful/>} />
        <Route path="*" element={<Home updateHome={setActiveHome} updateAlbum={setActiveAlbum} updateForm={setActiveForm} updateRestful={setActiveRestful} />} />
      </Routes>
    </Router>
  )
}
export default App;