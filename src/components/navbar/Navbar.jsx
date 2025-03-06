import React, { useState } from 'react'
import logo from '../../assets/logo_iptel.png'
import {NavbarContainer} from './navbarStyles'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
        <NavbarContainer>
            <img src={logo} alt='Logo'/>
            <div onClick={toggleMenu} className='menu-icon'>
              {
                isMenuOpen ? <FaTimes/> : <FaBars/>
              }
            </div>
            <ul className={isMenuOpen? 'active':''}>
                <li>COBERTURA</li>
                <li>IPTEL PLAY</li>
                <li>TELEVISIÓN</li>
                <li>INTERNET</li>
                <li>TELEFONÍA</li>
                <li>COMBOS</li>
                <li>EMPRESAS</li>
                <li>NOSOTROS</li>
                <li>AT. AL CLIENTE</li>
            </ul>
        </NavbarContainer>
    </>
  )
}

export default Navbar