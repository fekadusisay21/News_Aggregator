/* eslint-disable react/prop-types */
import { styled, alpha } from "@mui/material/styles";
import { styled as Styled } from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { NavLink, useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LogoutIcon from "@mui/icons-material/Logout";
// import Avatar from '@mui/material/Avatar';
import profile from "../../public/assets/images/profile.png";
import { useDark } from "../context/DarkContext";
import { Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

// const Styled_Nav = styled.nav`
//   display: flex;
//   justify-content: space-evenly;
//   margin-left: 25.5%;
//   gap: 100px;
// `;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Styled_Auth = Styled.span`
  display: flex;
  position: absolute;
  right: 14%;
  top: 35%;
  gap: 15px;
`;

// const Styled_Buttons = styled.div`
//   display: flex;
//   position: absolute;
//   top: 27%;
//   right: 200px;
//   gap: 10px;
//   align-items: center;
// `;

function Header({ setIsHidden }) {
  const { isDark, setIsDark } = useDark();
  const { logged, logout, user } = useAuth();
  const navigate = useNavigate();
  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  const Styled_ProfileBtn = Styled.img`
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
  //   const Styled_Header = styled.div`
  //     font-size: 20px;
  //     font-weight: 400;
  //     width: 100%;
  //     background-color: ${isDark ? "#171819" : "#f9fafb"};
  //     color: ${isDark ? "#ccc" : "#000"};
  //     display: flex;
  //     position: fixed;
  //     justify-content: stretch;
  //     border-top-left-radius: 8px;
  //     padding: 8px;
  //     z-index: 5;
  //   `;

  //   const Styled_SearchFieldContainer = styled.div`
  //     position: relative;
  //     display: inline-block;
  //   `;

  //   const Styled_SearchField = styled.input`
  //     background-color: ${isDark ? "#9d9c9c" : "#e3dddd"};
  //     color: ${isDark ? "white" : "black"};
  //     border-radius: 16px;
  //     padding: 8px 12px;
  //     outline: none;
  //     border: none;
  //     &:focus {
  //       background-color: #9d9c9c;
  //     }
  //   `;

  const Styled_MenuBtn = Styled.a`
    left: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${isDark ? "white" : "black"};
  `;

  //   const Styled_SearchButton = styled.button`
  //     outline: none;
  //     background-color: transparent;
  //     color: white;
  //     border: none;
  //     position: absolute;
  //     right: 8px;
  //     top: 60%;
  //     transform: translateY(-50%);
  //   `;

  //   const Styled_BellBtn = styled.button`
  //     color: ${isDark ? "#ccc" : "#000"};
  //     border: none;
  //     background-color: transparent;
  //     font-size: 18px;
  //     &:hover {
  //       color: #4f46e5;
  //     }
  //   `;

  //   const Styled_LogoutBtn = styled.button`
  //     color: ${isDark ? "#e0dfdf" : "#000"};
  //     background-color: transparent;
  //     border: none;
  //     font-size: 18px;
  //     &:hover {
  //       color: #4f46e5;
  //     }
  //   `;
  const Styled_ThemeBtn = Styled.button`
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

  const Styled_Name = Styled.span`
    color: ${isDark ? "red" : "#000"};
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;
    position: fixed;
    top: 1.4%;
    right: 80px;
    display: ${logged ? "inline" : "none"};
  `;

  const Styled_Navs = Styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width:45%;
`;

  const Styled_Toolbar = styled(Toolbar)`
    display: flex;
    gap: 15px;
    background-color: ${isDark ? "#171819" : "#f9fafb"};
    color: ${isDark ? "#ccc" : "#000"};
  `;

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const Styled_Container = Styled.div`
  position: fixed;
  width:100%
  `;

  return (
    //     <Box sx={{ flexGrow: 1 }}>
    //     <AppBar position="static">
    //       <Styled_Toolbar>
    //       <Styled_MenuBtn onClick={() => setIsHidden((prevState) => !prevState)}>
    //         <IconButton
    //           size="large"
    //           edge="start"
    //           color="inherit"
    //           aria-label="open drawer"
    //           sx={{ mr: 3 }}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         </Styled_MenuBtn>
    // {profile_image}
    //        {!logged && (
    //       <Styled_Auth>
    //         <Button variant="outlined" size="small"
    //         onClick={() => navigate("/signup")}
    //         >
    // Sign Up
    // </Button>
    // <Button variant="outlined" size="small" onClick={() => navigate("/login")}>Login</Button>
    //       </Styled_Auth>
    //     )}
    //     <Styled_Navs>
    //     <Styled_NavLink
    //         >
    //           Home
    //         </Styled_NavLink>
    //         <Styled_NavLink

    //         >
    //           For You
    //         </Styled_NavLink>
    //         <Styled_NavLink
    //         >
    //           Following
    //         </Styled_NavLink>
    //     </Styled_Navs>

    //         <Search>
    //           <SearchIconWrapper>
    //             <SearchIcon />
    //           </SearchIconWrapper>
    //           <StyledInputBase
    //             placeholder="Search…"
    //             inputProps={{ 'aria-label': 'search' }}
    //           />
    //         </Search>
    //         <Styled_ThemeBtn>
    //         <NotificationsActiveIcon/>
    //         </Styled_ThemeBtn>
    //         <Styled_ThemeBtn onClick={toggleTheme}>
    //         {isDark ? <LightModeIcon/> : <ModeNightIcon/>}
    //       </Styled_ThemeBtn>

    //       <Styled_ThemeBtn onClick={logout}>
    //       <LogoutIcon />
    //         </Styled_ThemeBtn>
    //       </Styled_Toolbar>
    //     </AppBar>
    //   </Box>
    <Styled_Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Styled_Toolbar>
            <Styled_MenuBtn
              onClick={() => setIsHidden((prevState) => !prevState)}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 3 }}
              >
                <MenuIcon />
              </IconButton>
            </Styled_MenuBtn>
            <Styled_ProfileBtn
              src={profile}
              logged={logged}
              onClick={() => navigate("/editprofile")}
            />
            {!logged && (
              <Styled_Auth>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </Styled_Auth>
            )}
            <Styled_Name>{user}</Styled_Name>
            <Styled_ProfileBtn
              src={profile}
              logged={logged}
              onClick={() => navigate("/editprofile")}
            />
            {/* <Styled_Buttons>
            <Styled_BellBtn>
              <FaBell />
            </Styled_BellBtn>
            <Styled_ThemeBtn onClick={toggleTheme}>
              {isDark ? <FaSun /> : <FaMoon />}
            </Styled_ThemeBtn>
            <Styled_LogoutBtn onClick={logout}>
              <TbLogout />
            </Styled_LogoutBtn>
          </Styled_Buttons> */}

            <Styled_Navs>
              <Styled_NavLink>Home</Styled_NavLink>
              <Styled_NavLink>For You</Styled_NavLink>
              <Styled_NavLink>Following</Styled_NavLink>
            </Styled_Navs>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Styled_ThemeBtn>
              <NotificationsActiveIcon />
            </Styled_ThemeBtn>
            <Styled_ThemeBtn onClick={toggleTheme}>
              {isDark ? <LightModeIcon /> : <ModeNightIcon />}
            </Styled_ThemeBtn>

            <Styled_ThemeBtn onClick={logout}>
              <LogoutIcon />
            </Styled_ThemeBtn>
          </Styled_Toolbar>
        </AppBar>
      </Box>
    </Styled_Container>
  );
}

export default Header;
