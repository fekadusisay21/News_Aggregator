/* eslint-disable react/prop-types */
import {
  FaAngleDoubleLeft,
  FaFlag,
  FaGlobe,
  FaHome,
  FaKey,
  FaShare,
} from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Styled_NavLink = styled(NavLink)`
  border-radius: 5px;
  margin: 20px 0;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  width: 90%;
  padding: 15px 0;
  transition: ease-out;
  transition-duration: 200ms;
  &:hover {
    background-color: #4f46e5;
    span {
      color: #0000ff;
    }
  }
`;

const Styled_ToggleBtn = styled.button`
  padding: 10px;
  color: #ccc;
  font-size: 20px;
  background-color: #011627;
  border: none;
  margin: 20px 80% 0 20%;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Styled_MenuBtn = styled.button`
  color: #ccc;
  font-size: 30px;
  background-color: #011627;
  border: none;
  position: fixed;
  top: 35px;
  left: 30px;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Styled_Span = styled.span`
  padding-right: 8px;
`;

function Sidebar({ isHidden, setIsHidden }) {
  const Styled_Sidebar = styled.div`
    width: 12%;
    position: absolute;
    top: 8%;
    bottom: 0;
    background-color: #121621;
    padding: 10px 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${isHidden
      ? "display:none;transition: ease-out;transition-duration: 200ms;"
      : ""}
  `;
  return (
    <div>
      <Styled_Sidebar>
        <Styled_MenuBtn>
          <IoIosMenu />
        </Styled_MenuBtn>
        <Styled_ToggleBtn onClick={() => setIsHidden(!isHidden)}>
          <FaAngleDoubleLeft />
        </Styled_ToggleBtn>
        <Styled_NavLink to="/home">
          <Styled_Span>
            <FaHome />
          </Styled_Span>
          Home
        </Styled_NavLink>
        <Styled_NavLink to="/home">
          <Styled_Span>
            <FaFlag />
          </Styled_Span>
          Bookmark
        </Styled_NavLink>
        <Styled_NavLink to="/home">
          <Styled_Span>
            <FaGlobe />
          </Styled_Span>
          News
        </Styled_NavLink>
        <Styled_NavLink to="/home">
          <Styled_Span>
            <FaShare />
          </Styled_Span>
          Share
        </Styled_NavLink>
        <Styled_NavLink to="/home">
          <Styled_Span>
            <FaKey />
            Key
          </Styled_Span>
        </Styled_NavLink>
      </Styled_Sidebar>
    </div>
  );
}

export default Sidebar;
