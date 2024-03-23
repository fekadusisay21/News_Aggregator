/* eslint-disable react/prop-types */
import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { BiNews } from "react-icons/bi";
import { GoShareAndroid } from "react-icons/go";
import { IoMdKey } from "react-icons/io";
// import { FaRegEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import profile from "../../public/assets/images/profile.png";
import { useDark } from "../context/DarkContext";
function Sidebar({ isHidden }) {
  //   const { user, userData } = useAuth();
  const { isDark } = useDark();
  const Styled_NavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin: 16px 4px;
    color: ${isDark ? "#e0dfdf" : "#000"};
    text-decoration: none;
    width: 90%;
    span {
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
    }
    &.active {
      background-color: #4f46e5;
      color: white;
    }
    &:hover {
      background-color: #4f46e5;
      span {
        color: ${isDark ? "black" : "white"};
      }
    }
  `;

  const Styled_Sidebar = styled.div`
    font-weight: 550;
    font-size: 18px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 12%;
    position: absolute;
    top: 6%;
    bottom: 0;
    background-color: ${isDark ? "#171819" : "#f9fafb"};
    padding: 0 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${(props) =>
      props.isHidden
        ? "display:none;transition: ease-out;transition-duration: 200ms;"
        : ""}
    position: fixed;
  `;

  //   const Styled_Profile = styled.div`
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     margin-top: 5px;
  //     text-align: center;
  //   `;
  //   const Styled_Button = styled.button`
  //     width: 100px;
  //     background-color: #4f46e5;
  //     border: none;
  //     border-radius: 5px;
  //     padding: 4px 8px;
  //     margin-top: 10px;
  //     color: white;
  //   `;

  //   const Styled_EditIcon = styled.div`
  //     padding-left: 3px;
  //   `;

  //   const Styled_Img = styled.img`
  //     width: 30px;
  //     cursor: pointer;
  //   `;
  //   const Styled_Info = styled.div`
  //     display: flex;
  //     font-size: 12px;
  //   `;
  return (
    <div>
      <Styled_Sidebar isHidden={isHidden}>
        <Styled_NavLink to="/" activeClassName="active">
          <span>
            <IoHomeOutline />
          </span>
          Home
        </Styled_NavLink>
        <Styled_NavLink to="/dashboard" activeClassName="active">
          <span>
            <FaRegBookmark />
          </span>
          Bookmark
        </Styled_NavLink>
        <Styled_NavLink to="/news" activeClassName="active">
          <span>
            <BiNews />
          </span>
          News
        </Styled_NavLink>
        <Styled_NavLink to="/share" activeClassName="active">
          <span>
            <GoShareAndroid />
          </span>
          Share
        </Styled_NavLink>
        <Styled_NavLink to="/key" activeClassName="active">
          <span>
            <IoMdKey />
          </span>
          key
        </Styled_NavLink>
      </Styled_Sidebar>
    </div>
  );
}

export default Sidebar;
