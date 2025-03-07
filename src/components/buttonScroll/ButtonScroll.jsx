import React, { useEffect, useState } from 'react'
import {ButtonScrollContainer} from './buttonScrollStyles'
import { FaArrowCircleUp } from "react-icons/fa";


const ButtonScroll = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop

    if(scrolled > 300)
    {
        setIsVisible(true)
    }else if(scrolled <= 300){
        setIsVisible(false)
    }
  }

  const handleScrollTop = ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return ()=>window.removeEventListener('scroll', handleScroll)
  },[])

  console.log("scroll:",isVisible);
  
  return (
    isVisible && (
    <ButtonScrollContainer onClick={handleScrollTop}>
        <FaArrowCircleUp size={20}/>
    </ButtonScrollContainer>
    )
  )
}

export default ButtonScroll