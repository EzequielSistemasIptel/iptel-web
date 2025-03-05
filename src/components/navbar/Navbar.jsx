import React from 'react'
import logo from '../../assets/logo_iptel.png'
import {NavbarContainer} from './navbarStyles'

const Navbar = () => {
  return (
    <>
        <NavbarContainer>
            <img src={logo} alt='Logo'/>
            <ul>
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