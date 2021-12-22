import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './useNavBar.css';

const useNavbar=()=> {
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
          <Link className="items" to="/">HOME</Link>
          <Link className="items" to="/services">SERVICES</Link>
          <Link className="items" to="/contact">CONTACT</Link>
        </div>
      )}
      <button onClick={toggleNav} className="btn">Menu</button>
    </nav>
      <Routes>
        <Route path="/" element={<HOME pageName="HOME"/>} />
        <Route path="/beautiful_home" element={<HOME pageName="Home"/>} />
        <Route path="/services" element={<SERVICES pageName="SERVICES"/>} />
        <Route path="/contact" element={<CONTACT pageName="CONTACT"/>} />
      </Routes>
    </Router>
  )
}
export default useNavbar;