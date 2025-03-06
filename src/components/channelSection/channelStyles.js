import styled from "styled-components";

export const ChannelContainer = styled.div`
  background-color: #ebebeb;
  width: 100%;
  max-width: 1500px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TextContainer = styled.div`
  h3 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.5rem;
    color: #f3f3f3;
  }
  a {
    text-decoration: none;
    background-color: #593c89;
    border: none;
    border-radius: 10px;
    padding: 20px;
    color: white;
    font-size: 1rem;
    font-weight: 900;
    width: 100%;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    h3 {
      font-size: 1.5rem;
      margin: 0;
    }
    a {
      padding: 10px;
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 500px;
    border-radius: 20px;
  }

  @media (max-width: 800px) {
    img {
      width: 90%;
      border-radius: 5px;
      padding-bottom: 10px;
    }
  }
`;

export const MercadoPagoContainer = styled.div`
  background-color: #9c74bc;
  width: 80%;
  height: 50%;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
    padding: 0;
    padding-top: 20px;
    width: 100%;
  }
`;

export const WhatsappContainer = styled.div`
  background-color: #9c74bc;
  width: 80%;
  height: 50%;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
    padding: 0;
    padding-top: 20px;
    width: 100%;
  }
`;
