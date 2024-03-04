/* eslint-disable react/prop-types */
import Button from "../ui/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosLogOut, IoIosMenu, IoIosSearch } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";

const Styled_Header = styled.div`
  width: 100%;
  height: 8%;
  background-color: #011627;
  display: flex;
  flex-direction: column;
  position: fixed;
  border-top-left-radius: 8px;
  border: 2px solid white;
`;

const Styled_SearchFiled = styled.input`
  background-color: #3c4043;
  width: 45rem;
  color: #ccc;
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
  background-color: #3c4043;
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

const Styled_Nav = styled.nav`
  margin: 4px;
  width: 90%;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
`;

const Styled_NavLink = styled(NavLink)`
  color: #ccc;
  font-size: 16px;
  font-family: serif;
  text-decoration: none;
  padding: 0 20px;
  &:hover {
    color: white;
  }
`;

const Styled_Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 25% 0;
`;

const Styled_BellBtn = styled.button`
  position: absolute;
  background-color: #011627;
  color: #ccc;
  right: 200px;
  top: 35%;
  border: none;
  font-size: 16px;
  &:hover {
    color: white;
  }
`;

const Styled_LogoutBtn = styled.button`
  position: absolute;
  background-color: #011627;
  color: #ccc;
  right: 100px;
  top: 35%;
  border: none;
  font-size: 16px;
  &:hover {
    color: white;
  }
`;

const Styled_Auth = styled.span`
  display: flex;
  position: absolute;
  right: 100px;
  top: 35%;
  gap: 15px;
`;

function Header({ isHidden, setIsHidden }) {
  const { logged, logout } = useAuth();
  const navigate = useNavigate();

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
  return (
    <Styled_Header>
      <Styled_Container>
        <Styled_MenuBtn
          onClick={() => setIsHidden(!isHidden)}
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
        />
        <IoIosMenu />
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
      <Styled_Nav>
        <Styled_NavLink>Home</Styled_NavLink>
        <Styled_NavLink>For You</Styled_NavLink>
        <Styled_NavLink>Following</Styled_NavLink>
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
      </Styled_Nav>
    </Styled_Header>
  );
}

export default Header;
