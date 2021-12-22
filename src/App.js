import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
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
          <Link className="items" to="/">Home</Link>
          <Link className="items" to="/">SERVICES</Link>
          <Link className="items" to="/">CONTACT</Link>
        </div>
      )}
      <button onClick={toggleNav} className="btn">Menu</button>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beautiful_home" element={<Home/>} />
      </Routes>
    </Router>
  )
}
export default App;