import React from 'react'
import {FooterContainer,ImageContainer,ListContainer} from './footerStyles'
import cc from '../../assets/footer/CC.png'
import cisco from '../../assets/footer/cisco.png'
import dataFiscal from '../../assets/footer/DATAWEB.jpg'
import furukawa from '../../assets/footer/furukawa.png'
import { MdArrowForwardIos } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <FooterContainer>
      <ListContainer>
        <ul>
          <h2>Contacto</h2>
          <li>
              <IoLocationSharp />
              Cobertura
          </li>
          <li>
              <IoLocationSharp />
              Centros de contacto
          </li>
          <li>
              <FaPhoneAlt />
              0810-268-1111
          </li>
          <li>
              <MdMail />
              ventas@iptel.com.ar
          </li>
          <li>
              <MdMail />
              atencionalcliente@iptel.com.ar
          </li>
          <li>
              <MdMail />
              soporte@iptel.com.ar
          </li>
        </ul>
        <ul>
          <h2>Servicio de Internet</h2>
          <li>
              <MdArrowForwardIos />
              Internet Para el Hogar
          </li>
          <li>
              <MdArrowForwardIos />
              Internet Para Empresas
          </li>
          <li>
              <MdArrowForwardIos />
              Internet Banda Ancha
          </li>
          <li>
              <MdArrowForwardIos />
              Internet Dedicado
          </li>
          <li>
              <MdArrowForwardIos />
              Internet Fibra Óptica
          </li>
          <li>
              <MdArrowForwardIos />
              Internet Inalámbrico
          </li>
          <li>
              <MdArrowForwardIos />
              Internet Simétrico
          </li>
          <li>
              <MdArrowForwardIos />
              PBU Enacom
          </li>
        </ul>
        <ul>
          <h2>Servicio de Telefonía</h2>
          <li>
              <MdArrowForwardIos />
              Telefonía IP (VoIP)
          </li>
          <li>
              <MdArrowForwardIos />
              Softphone
          </li>
          <li>
              <MdArrowForwardIos />
              Troncales IP
          </li>
          <li>
              <MdArrowForwardIos />
              Centrales Telefónicas
          </li>
          <li>
              <MdArrowForwardIos />
              Centrales Telefónicas IP
          </li>
          <li>
              <MdArrowForwardIos />
              Centrales Telefónicas Virtuales
          </li>
          <li>
              <MdArrowForwardIos />
              Centrales Telefónicas En La Nube
          </li>
        </ul>
        <ul>
          <h2>Servicio de Televisión</h2>
          <li>
              <MdArrowForwardIos />
              Iptel Play
          </li>
          <li>
              <MdArrowForwardIos />
              Televisión Por Cable
          </li>
          <li>
              <MdArrowForwardIos />
              Acuerdo con Asociación Civil Usuarios y Consumidores
          </li>
        </ul>
      </ListContainer>
      <ImageContainer>
        <img src={cisco} alt="" />
        <img src={furukawa} alt="" />
        <img src={cc} alt="" />
        <img src={dataFiscal} alt="" />
      </ImageContainer>
      <p>
        Todos los derechos reservados. Copyright 2025 Iptel S.A. | Términos y condiciones | Mapa del sitio | Darse de Baja| Botón de Arrepentimiento
      </p>
    </FooterContainer>
  )
}

export default Footer