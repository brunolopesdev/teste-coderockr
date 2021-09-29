import { useState } from "react";
import styled from "styled-components";
import { ContactModal } from "../Modal";
import { GiHamburgerMenu } from "react-icons/gi"

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
    cursor: pointer;
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
  button {
    font-weight: 400;
    line-height: 1.5;
    color: var(--white);
    text-decoration: none;
    font-size: 26px;
    cursor: pointer;
    background: none;
    border: none;
  }
`;

const HamburgerBtn = styled(GiHamburgerMenu)`
  position: relative;
  background-color: transparent;
  width: 50px;
  cursor: pointer;
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
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
    text-decoration: none;
  }
  button {
    font-weight: 400;
    line-height: 1.5;
    color: var(--white);
    text-decoration: none;
    font-size: 26px;
    cursor: pointer;
    background: none;
    border: none;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const handleClick = () => setClick(!click)

  return (
    <Headers>
      <Logo>

        <h3>Rockr Blog</h3>

      </Logo>
      <Nav>
        <a href="/">Posts</a>
        <button onClick={openModal}>Contact</button>
        <ContactModal showModal={showModal} setShowModal={setShowModal} />
      </Nav>
      <HamburgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="/" onClick={() => handleClick()}>
          Posts
        </a>
        <button onClick={openModal}>
          Contact
        </button>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
