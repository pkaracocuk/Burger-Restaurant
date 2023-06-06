import React from 'react'
import Logo from '../assets/hamburgerlogo.png'
import{Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faBars,faCircleInfo,faPhone, } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
          <img src={Logo}/>
          <h1 style={{color:'white'}}>Happy Burgers</h1>
        </div>
        <div className='rightSide'>
         <Link to="/"><FontAwesomeIcon icon={faHouse}/> Home</Link>
         <Link to="/menu"><FontAwesomeIcon icon={faBars}/> Menu</Link>
         <Link to="/about"><FontAwesomeIcon icon={faCircleInfo}/> About</Link>
         <Link to="/contact"><FontAwesomeIcon icon={faPhone}/> Contact</Link>
        </div>
    </div>
  )
}

export default Navbar