import React from 'react'
import {ServicesContainer,HogaresContainer,CompanyContainer,ContainerCards} from './servicesStyles'
import Card from '../card/Card'
import { FiTv } from "react-icons/fi";
import { FaWifi,FaPhoneAlt,FaTools } from "react-icons/fa";
import { PiPhoneDisconnectBold,PiComputerTowerFill } from "react-icons/pi";
import { FaGift } from "react-icons/fa6";
import { IoMdWifi } from "react-icons/io";
import { TbPhoneCalling } from "react-icons/tb";
import { GrCloudComputer } from "react-icons/gr";

const hogaresArray = [
    {icon:<FiTv size={50} />,title:'TELEVISIÓN',description:'Disfrutá del mejor entretenimiento disponible con nuestro nuevo servicio de TV.'},
    {icon:<FaWifi size={50} />,title:'INTERNET',description:'Conexión estable y segura para que te conectes con el mundo. Ideal para redes sociales, descargas, gamers y entretenimiento online.'},
    {icon:<PiPhoneDisconnectBold size={50} />,title:'TELEFONÍA IP',description:'Comunicate mejor y ahorrá costos con las ventajas de la telefonía IP.'},
    {icon:<FaGift size={50} />,title:'COMBOS',description:'Variedad de promociones con beneficios para aprovechar todos nuestros servicios.'}
]

const companyArray = [
    {icon:<IoMdWifi size={50} />,title:'Internet para empresas',description:'Conectividad de alta calidad para empresas. Enlaces punto a punto, internet dedicado, simétrico y por fibra.'},
    {icon:<FaPhoneAlt size={50} />,title:'Telefonía IP para Empresas',description:'Diversos servicios de telefonía IP. Flexibilidad, estabilidad e innovación en telecomunicaciones.'},
    {icon:<FaTools size={50} />,title:'Soluciones para Negocios',description:'Asesoramiento e implementación de redes, cableado e infraestructura de comunicaciones para construcciones, localidades y real state.'},
    {icon:<TbPhoneCalling size={50} />,title:'Central Telefónica Virtual',description:'La central telefónica virtual brinda las funcionalidades de una central telefónica corporativa pero sin necesidad de grandes inversiones en equipamiento.'},
    {icon:<PiComputerTowerFill size={50} />,title:'Central Telefónica IP Pathphone',description:'La central telefónica IP pathphone es una central telefónica física, compacta y potente, que permite hasta 20 llamadas simultáneas y 50 internos.'},
    {icon:<GrCloudComputer size={50} />,title:'Central Telefónica IP Phoneway',description:'La central telefónica IP phoneway es una central telefónica física que ofrece características y funcionalidades avanzadas para corporaciones y grandes empresas.'}
]

const ServicesSection = () => {
  return (
    <ServicesContainer>
        <p>Servicios de <strong>Internet</strong>, <strong>Telefonía IP</strong> y <strong>Televisión</strong></p>
        <HogaresContainer>
            <p>Servicios para <strong>Hogares</strong></p>
            <ContainerCards>
                {
                    hogaresArray.map((item, index)=>(
                        <Card key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))
                }
            </ContainerCards>
        </HogaresContainer>
        <CompanyContainer>
            <p>Servicios para <strong>Empresas</strong></p>
            <ContainerCards>
                {
                    companyArray.map((item, index)=>(
                        <Card key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))
                }
            </ContainerCards>
        </CompanyContainer>
    </ServicesContainer>
  )
}

export default ServicesSection