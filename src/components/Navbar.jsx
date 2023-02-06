import React,{useState} from 'react'
 import MaterialUISwitch from '../resources/MaterialUISwitch';
 import './Navbar.css'
 import{GiHamburgerMenu} from 'react-icons/gi'; 
import {AiFillCloseCircle} from'react-icons/ai'


const Navbar = ({toggleTheme}) => {
  const [toggleMenu,setToggleMenu]=useState(false )
 
  return (
  
    <nav className="main__container" >
      <div className="logo__container">
        {/* <img src={} alt="logo"></img> */}       
      </div>
      <div className='mode__container'> <MaterialUISwitch onChange={toggleTheme}/></div>
      <div className="links__container">
        <ul className='links'>
          <li>01.About</li>
          <li>02.Work</li>
          <li>03.Experience</li>
          <li>04.Contact</li>
        </ul>
      </div>

      <div className="app__navbar-smallscreen">
    <GiHamburgerMenu className="icon"  fontSize={27} onClick={()=> setToggleMenu(true)}/>
     {toggleMenu &&(
    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <AiFillCloseCircle  fontSize={27} className="overlay__close" onClick={()=> setToggleMenu(false)}/>
    
    <ul className="app__navbar-smallscreen-links">
          <li>01.About</li>
          <li>02.Work</li>
          <li>03.Experience</li>
          <li>04.Contact</li>
    </ul>
    </div>
    )}

  </div>
    </nav>
  

  )
}

export default Navbar