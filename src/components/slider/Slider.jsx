// Slider.jsx
import React, { useState,useEffect } from 'react';
import { SliderContainer,SliderWrapper,SliderImage,PrevBtn,NextBtn}  from './sliderStyles';
import mitigacionImg from '../../assets/slidder/banner-mitigacion-1.jpg'
import bancoPatagoniaImg from '../../assets/slidder/Diseno-sin-titulo-4-1.jpg'
import iptelPlayImg from '../../assets/slidder/IPT-banner-Iptel-play.jpg'
import lineaFijaImg from '../../assets/slidder/IPT-banner-linea-fija.jpg'
import debitoImg from '../../assets/slidder/WhatsApp-Image-2025-01-28-at-11.28.34.jpeg'

const Slider = () => {
  const images = [
    `${mitigacionImg}`,
    `${bancoPatagoniaImg}`,
    `${iptelPlayImg}`,
    `${lineaFijaImg}`,
    `${debitoImg}`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval);
    }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <SliderContainer>
      <PrevBtn onClick={prevSlide}>❮</PrevBtn>
      <SliderWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <SliderImage key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </SliderWrapper>
      <NextBtn onClick={nextSlide}>❯</NextBtn>
    </SliderContainer>
  );
};

export default Slider;
