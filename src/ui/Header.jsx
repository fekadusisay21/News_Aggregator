/* eslint-disable react/prop-types */
import Button from "../ui/Button";
import styled from "styled-components";
import profile from "../../public/assets/images/profile.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useDark } from "../context/DarkContext";
const Styled_Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin-left: 25.5%;
  gap: 100px;
`;

const Styled_Auth = styled.span`
  display: flex;
  position: absolute;
  right: 14%;
  top: 35%;
  gap: 15px;
`;

const Styled_Buttons = styled.div`
  display: flex;
  position: absolute;
  top: 27%;
  right: 200px;
  gap: 10px;
  align-items: center;
`;

function Header({ setIsHidden }) {
  const { isDark, setIsDark } = useDark();
  const { logged, logout, user } = useAuth();
  const navigate = useNavigate();
  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  const Styled_ProfileBtn = styled.img`
    width: 30px;
    position: fixed;
    top: 1.5%;
    right: 30px;
    position: fixed;
    ${logged ? "" : "display:none;top:0;"}
    &:hover {
      color: white;
      cursor: pointer;
    }
  `;
  const Styled_Header = styled.div`
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    background-color: ${isDark ? "#171819" : "#f9fafb"};
    color: ${isDark ? "#ccc" : "#000"};
    display: flex;
    position: fixed;
    justify-content: stretch;
    border-top-left-radius: 8px;
    padding: 8px;
    z-index: 5;
  `;

  const Styled_SearchFieldContainer = styled.div`
    position: relative;
    display: inline-block;
  `;

  const Styled_SearchField = styled.input`
    background-color: ${isDark ? "#9d9c9c" : "#e3dddd"};
    color: ${isDark ? "white" : "black"};
    border-radius: 16px;
    padding: 8px 12px;
    outline: none;
    border: none;
    &:focus {
      background-color: #9d9c9c;
    }
  `;

  const Styled_MenuBtn = styled.a`
    left: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${isDark ? "white" : "black"};
  `;

  const Styled_SearchButton = styled.button`
    outline: none;
    background-color: transparent;
    color: white;
    border: none;
    position: absolute;
    right: 8px;
    top: 60%;
    transform: translateY(-50%);
  `;

  const Styled_BellBtn = styled.button`
    color: ${isDark ? "#ccc" : "#000"};
    border: none;
    background-color: transparent;
    font-size: 18px;
    &:hover {
      color: #4f46e5;
    }
  `;

  const Styled_LogoutBtn = styled.button`
    color: ${isDark ? "#e0dfdf" : "#000"};
    background-color: transparent;
    border: none;
    font-size: 18px;
    &:hover {
      color: #4f46e5;
    }
  `;
  const Styled_ThemeBtn = styled.button`
    background-color: transparent;
    border: none;
    color: ${isDark ? "#ccc" : "#000"};
    font-size: 16px;
    &:hover {
      color: #4f46e5;
    }
  `;
  const Styled_NavLink = styled(NavLink)`
    color: ${isDark ? "#ccc" : "#000"};
    font-size: 20px;
    text-decoration: none;
    padding: 0 10px;
    &:hover {
      color: ${isDark ? "white" : "#4f46e5"};
    }
  `;

  const Styled_Name = styled.span`
    color: ${isDark ? "red" : "#000"};
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;
    position: fixed;
    top: 1.4%;
    right: 80px;
    display: ${logged ? "inline" : "none"};
  `;
  return (
    <Styled_Header>
      <Styled_MenuBtn onClick={() => setIsHidden((prevState) => !prevState)}>
        <IoMenu />
      </Styled_MenuBtn>
      <Styled_Name>{user}</Styled_Name>
      <Styled_ProfileBtn
        src={profile}
        logged={logged}
        onClick={() => navigate("/editprofile")}
      />
      <Styled_Buttons>
        <Styled_BellBtn>
          <FaBell />
        </Styled_BellBtn>
        <Styled_ThemeBtn onClick={toggleTheme}>
          {isDark ? <FaSun /> : <FaMoon />}
        </Styled_ThemeBtn>
        <Styled_LogoutBtn onClick={logout}>
          <TbLogout />
        </Styled_LogoutBtn>
      </Styled_Buttons>
      {!logged && (
        <Styled_Auth>
          <Button
            variation="danger"
            size="vsmall"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          <Button
            variation="secondary"
            size="vsmall"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Styled_Auth>
      )}
      <Styled_Nav>
        <Styled_NavLink>Home</Styled_NavLink>
        <Styled_NavLink>For You</Styled_NavLink>
        <Styled_NavLink>Following</Styled_NavLink>
        <form>
          <Styled_SearchFieldContainer>
            <Styled_SearchField type="text" placeholder="Search...." />
            <Styled_SearchButton type="submit">
              <BiSearchAlt2 />
            </Styled_SearchButton>
          </Styled_SearchFieldContainer>
        </form>
      </Styled_Nav>
    </Styled_Header>
  );
}

export default Header;
