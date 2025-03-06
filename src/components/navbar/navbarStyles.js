import styled from "styled-components";

export const NavbarContainer = styled.header`
  background-color: #9c74bc;
  color: white;
  height: 6rem;
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 120px;
  }

  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 15px;
    list-style-type: none;
  }

  li {
    cursor: pointer;
    position: relative;

    &:hover {
      color: #593c89;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #593c89;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  .menu-icon {
    display: none;
    font-size: 30px;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    img {
      width: 80px;
    }
    ul {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 6rem;
      left: 0;
      right: 0;
      background-color: #9c74bc;
      padding: 20px;
      margin: 0;
      z-index: 99;
      display: none;
    }
    ul.active {
      display: block;
    }
    li {
      font-size: 1.5rem;
      padding: 8px;
    }
    .menu-icon {
      display: block;
    }
  }
`;
