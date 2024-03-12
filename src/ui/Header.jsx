/* eslint-disable react/prop-types */
import Button from "../ui/Button";
import styled from "styled-components";
import profile from "../../public/assets/images/profile.png";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosLogOut, IoIosSearch } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useDark } from "../context/DarkContext";
const Styled_Nav = styled.nav`
  margin: 2px;
  width: 90%;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
`;
const Styled_Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 100px 0; 
`;
const Styled_ThemeToggle = styled.div`
button{
  border:none;
  background-color:transparent;
  color:white;
}
  display: flex;
  align-items: center;
  position: absolute;
  right: 70px; 
  top: 20%;
  gap: 10px;
`;
const Styled_Auth = styled.span`
  display: flex;
  position: absolute;
  right: 100px;
  top: 35%;
  gap: 15px;
`;

function Header({ isHidden, setIsHidden }) {
  const { isDark, setIsDark } = useDark();
  const { logged, logout } = useAuth();
  const navigate = useNavigate();
  const toggleTheme = () => {
    setIsDark((prevTheme) => (!prevTheme));
  };
  const Styled_MenuBtn = styled.img`
    width: 30px;
    position: fixed;
    top: 3%;
    left: 30px;
    position: fixed;
    ${isHidden && logged ? "" : "display:none;top:0;"}
    &:hover {
      color: white;
      cursor: pointer;
    }
  `;
  const Styled_Header = styled.div`
  font-family: monospace;
    width: 100%;
    height: 11%;
    background-color: ${isDark ? "#1f1f1f" : "#d2d0d0"};
    color: ${isDark ? "#ccc" : "#000"};
    display: flex;
    flex-direction: column;
    position: fixed;
    border-top-left-radius: 8px;
    border: 2px solid white;
  `;
  
  const Styled_SearchFiled = styled.input`
    background-color:${isDark ? "#010008" : "#e3dddd"};
    width: 55rem;
    color: ${isDark ? "#000" : "#fffefe"};
    font-weight: bold;
    height: 2rem;
    outline: none;
    font-size: 14px;
    text-align: center;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 8px;
  `;
  const Styled_SearchBtn = styled.button`
  background-color:${isDark ? "#2c2d2f" : "#9a9a9a"};
    height: 2.1rem;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    color: #ccc;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 4px;
    font-weight: bold;
    &:hover {
      color: white;
      background-color: #494d51;
    }
  `;
  const Styled_BellBtn = styled.button`
  background-color: ${ isDark ? "#00172b" : "#d2d0d0"};
color: ${isDark ? "#ccc" : "#000"};
  position: absolute;
  right: 250px; 
  top: 27%;
  border: none;
  font-size: 16px;
  &:hover {
    color: white;
  }
`;

const Styled_LogoutBtn = styled.button` 
  background-color: ${isDark ? "#00172b" : "#d2d0d0"};
color: ${isDark ? "#e0dfdf" : "#000"};
  position: absolute;
  right: 200px;
  top: 27%;
  border: none;
  font-size: 16px;
  &:hover {
    color: white;
  }
`;
const Styled_NavLink = styled(NavLink)`
 color: ${isDark ? "#ccc" : "#000"};
  font-size: 18px;
  text-decoration: none;
  padding: 0 10px;
  &:hover {
    color: white;
  }
`;
const Styled_ToggleTheme = styled.div`
font-size:20px;
color:${isDark ? "#ccc" : "#000"};
`;
   return (
    <Styled_Header>
      <Styled_Container>
        <Styled_MenuBtn
          onClick={() => setIsHidden(!isHidden)}
          src={profile}
          isHidden={isHidden}
          logged={logged}
        />
        
        <Styled_SearchBtn>
          <IoIosSearch />
        </Styled_SearchBtn>
        <form>
          <Styled_SearchFiled
            type="text"
            placeholder="Search for locations,topics & sources"
          />
        </form>
      </Styled_Container>
        {logged && (
          <Styled_BellBtn>
            <FaBell />
          </Styled_BellBtn>
        )}
        {logged && (
          <Styled_LogoutBtn onClick={logout}>
            <IoIosLogOut />
          </Styled_LogoutBtn>
        )}
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
        <Styled_ThemeToggle>
        <button onClick={toggleTheme}>
      {isDark ? <Styled_ToggleTheme><FaSun/></Styled_ToggleTheme> : 
      <Styled_ToggleTheme><FaMoon/></Styled_ToggleTheme>}
        </button>
      </Styled_ThemeToggle>
        <Styled_Nav>
        <Styled_NavLink>Home</Styled_NavLink>
        <Styled_NavLink>For You</Styled_NavLink>
        <Styled_NavLink>Following</Styled_NavLink>
      </Styled_Nav>
    </Styled_Header>
  );
}

export default Header;
