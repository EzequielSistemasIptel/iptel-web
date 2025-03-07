import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  height: auto;
  min-height: 6rem;
  background-color: #9c74bc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color: #593c89;
  padding: 2rem 0 3.5rem 0;

  @media (max-width: 800px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  img {
    width: 150px;
    aspect-ratio: 3/2;
    object-fit: contain;
    //mix-blend-mode: color-burn;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  ul {
    text-decoration: none;
    list-style: none;
    text-align: left;
  }

  li {
    padding-bottom: 10px;
    color: #d3d3d3;
    display: flex;
    align-items: center;
    gap: 7px;
    //font-weight: 800;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    ul {
      padding-left: 20px;
    }
  }
`;
