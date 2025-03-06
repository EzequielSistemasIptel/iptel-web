import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20%;
  min-height: 290px;
  height: auto;
  //background-color: #d3d3d3;
  background-color: white;
  border: none;
  border-radius: 20px;
  //padding: 1rem;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

export const CardContent = styled.div`
  padding: 8px;
  flex-grow: 1;
  text-overflow: ellipsis;

  img {
    width: 100%;
    height: 80px;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
  }
`;
