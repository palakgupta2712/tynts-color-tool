import React from "react";
import styled from "styled-components";
import logo from "../rgb.png";
import DropdownMenu from "./dropdownMenu/DropdownMenu";
import { AiFillGithub } from "react-icons/ai";

function Navbar() {
  return (
    <NavbarContainer>
      <NavLogo>
        <Logo src={logo} alt="logo" />
        Tynts
      </NavLogo>
      <NavMenu>
        <Button>
          <AiFillGithub />
          Github
        </Button>
        <DropdownMenu />
      </NavMenu>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 18px;
  height: 80px;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 100px;
  }
`;
const NavLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  border: 2px solid white;
  padding: 10px;
  letter-spacing: 6px;
  @media (max-width: 600px) {
    margin: 10px;
    padding: 6px;
  }
  color: white;
  font-weight: 800;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  margin-right: 20px;
  @media (max-width: 600px) {
    margin: 2px;
  }
`;

const Button = styled.button`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin: 0px 12px;
  padding: 10px 17px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto;
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;
