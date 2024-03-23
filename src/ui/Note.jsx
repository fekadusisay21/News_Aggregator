/* eslint-disable react/prop-types */
import { styled, alpha } from '@mui/material/styles';
import {styled as Styled}from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { NavLink, useNavigate } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import profile from "../../public/assets/images/profile.png";
import { useDark } from "../context/DarkContext";
import { Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
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
export default function SearchAppBar({ setIsHidden }) {
  const { isDark,setIsDark} = useDark();
  const { logged, logout } = useAuth();
  const navigate = useNavigate();
  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };
  const Styled_Toolbar = styled(Toolbar)`
width:100%;
display: flex;
gap: 15px;
background-color: ${isDark ? "#171819" : "#f9fafb"};
color: ${isDark ? "#ccc" : "#000"};
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
const Styled_ThemeBtn = styled(Button)`
background-color: transparent;
border: none;
color: ${isDark ? "#ccc" : "#000"};
font-size: 16px;
&:hover {
  color: #4f46e5;
}
`;
const Styled_MenuBtn = Styled.a`
    left: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${isDark ? "white" : "black"};
  `;
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Styled_Toolbar>
        <Styled_MenuBtn onClick={() => setIsHidden((prevState) => !prevState)}>
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
          <Styled_NavLink
          >
            Home 
          </Styled_NavLink>
          <Styled_NavLink

          >
            For You 
          </Styled_NavLink>
          <Styled_NavLink
          >
            Following 
          </Styled_NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Styled_ThemeBtn>
          <NotificationsActiveIcon/>
          </Styled_ThemeBtn>
          <Styled_ThemeBtn onClick={toggleTheme}>
          {isDark ? <LightModeIcon/> : <ModeNightIcon/>}
        </Styled_ThemeBtn>

          
        <Styled_ThemeBtn onClick={logout}>
        <LogoutIcon />
          </Styled_ThemeBtn>
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
        </Styled_Toolbar>
      </AppBar>
    </Box>
  );
}