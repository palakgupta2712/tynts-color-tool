import React, { useRef } from "react";
import "./styles.css";
import { useClick } from "./useClick";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function App() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <React.Fragment>
      <Menu>
        <MenuButton onClick={onClick}>
          <span>User</span>
          <IoIosArrowDropdownCircle />
        </MenuButton>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <List>
              <Link to="/color-manipulator" onClick={onClick}>
                Manipulator
              </Link>
            </List>
            <List>
              <Link to="/color-gradients" onClick={onClick}>
                Gradients
              </Link>
            </List>
            <List>
              <Link to="/shades-and-tints" onClick={onClick}>
                Shades&Tints
              </Link>
            </List>
            <List>
              <Link to="/color-harmonies" onClick={onClick}>
                Harmonies
              </Link>
            </List>
          </ul>
        </nav>
      </Menu>
    </React.Fragment>
  );
}

const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  /* margin-left: 100px; */
`;

const MenuButton = styled.button`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 17px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto;
  gap: 5px;
`;

const List = styled.li`
  border-bottom: 1px solid #dddddd;

  a {
    text-decoration: none;
    color: #333333;
    padding: 15px 12px;
    display: block;
    @media (max-width: 600px) {
      padding: 10px 12px;
    }
  }
  &:hover {
    background-color: #eeefff;
  }
`;
