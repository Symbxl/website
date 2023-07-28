import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiMenu } from 'react-icons/hi';
import { useState } from "react";
import Modal from "./Modal";
import Button from "../common/Button";
const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)
  const handleMenu = () => setIsOpen(true)

  return (
    <Nav>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Ul>
          <Li><NavLink to="/" onClick={handleClose}>Home</NavLink></Li>
        </Ul>
        <Ul>
          <Li><A href="#services" onClick={handleClose}>Services</A></Li>
        </Ul>
        <Ul>
          <Li><A href="#process" onClick={handleClose} >Process</A></Li>
        </Ul>
        <Ul>
          <Li><NavLink to="/Contact" onClick={handleClose}>Contact</NavLink></Li>
        </Ul>
      </Modal>
      <NavItem>
        <NavLink to="/">
          LOGO
        </NavLink>
      </NavItem>
      {!isOpen && (
        <Span>
          <NavItem>
            <Button width="150px" height="50px">Contact</Button>
          </NavItem>
          <NavItem>
            <Menu onClick={handleMenu} />
          </NavItem>
        </Span>
      )}
    </Nav>
  );
};

export default MainNavigation;

const Ul = styled.ul`

`
const Li = styled.li`
  list-style: none;
  margin: 1rem 0.5rem;
`

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 1rem;
  height: 3vh;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
`

const Menu = styled(HiMenu)`
  height: 30px;
  width: 30px;
  &:hover {
    height: 33px;
    width: 33px;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  position: relative;
  font-size: 40px;
  &:hover {
    font-weight: 600;

    &.active {
    font-weight: bold;
  }
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #333;
  position: relative;
  font-size: 40px;
  &:hover {
    font-weight: 600;

    &.active {
    font-weight: bold;
  }
  }
`;