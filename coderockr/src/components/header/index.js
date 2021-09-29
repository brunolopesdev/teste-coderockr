import { useState } from "react";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  background: #2D2D2D;
  color: #fff;
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 30rem;
  height: auto;
  cursor: pointer;
  font-size: 26px;
  img {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  width: 15rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 400;
    line-height: 1.5;
    color: var(--white);
    text-decoration: none;
    font-size: 26px;
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const Button = styled.button`
  background-color: #4a80aa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;

const HamburgerBtn = styled.button`
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  cursor: pointer;
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  background: rgba(53, 53, 63, 0.95);
  border-radius: 20px;
  margin: 0.5rem;
  overflow-x: hidden;
  a {
    color: var(--white);
    font-weight: 500;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Headers>
      <Logo>

        <h3>Rockr Blog</h3>

      </Logo>
      <Nav>
        <a href="/">Posts</a>
        <a href="#">Contact</a>
      </Nav>
      <HamburgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="/" onClick={() => handleClick()}>
          Posts
        </a>
        <a href="#" onClick={() => handleClick()}>
          Contact
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
