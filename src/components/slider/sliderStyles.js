import styled, { keyframes } from "styled-components";

export const slideLeftToRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1500px;
  //height: 500px;
  height: 80vh;
  margin: 0 auto;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    height: 20vh;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  animation: ${slideLeftToRight} 0.5s ease-in-out;
`;

export const ButtonStyled = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const PrevBtn = styled(ButtonStyled)`
  left: 0;
`;

export const NextBtn = styled(ButtonStyled)`
  right: 0;
`;
