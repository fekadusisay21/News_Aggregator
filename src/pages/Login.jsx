import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import GoogleLogin from "../ui/GoogleLogin";
import Button from "@mui/material/Button";
import { InputWrapper, Styled_Input, Styled_Label } from "../ui/Input";
import { useDark } from "../context/DarkContext";

const Styled_CloseBtn = styled.button`
  position: relative;
  color: red;
  margin-left: 110%;
  font-size: 32px;
  background-color: transparent;
  border: none;
  z-index: 1;
`;

const Styled_Container = styled.div`
  background-color: ${(props) => (props.isDark ? "#00172b" : "#ccc")};
  padding: 0 70px;
  padding-bottom: 60px;
  text-align: center;
  align-content: center;
  border-radius: 10px;
  margin-top: 12.5%;
`;

const Styled_Span = styled.span`
  display: block;
  color: ${(props) => (props.isDark ? "white" : "black")};
  a {
    color: ${(props) => (props.isDark ? "white" : "black")};
    &:hover {
      color: red;
    }
  }
`;

const Styled_Title = styled.h1`
  color: ${(props) => (props.isDark ? "white" : "black")};
  text-align: center;
`;

const Styled_Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

function Login() {
  const { logUser, logged } = useAuth();
  const { isDark } = useDark();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);

  if (logged) return null;

  const onSubmit = (data) => {
    logUser(data);
  };

  return (
    <Styled_Container isDark={isDark}>
      <Styled_CloseBtn onClick={() => navigate("/")}>
        <IoIosCloseCircleOutline />
      </Styled_CloseBtn>
      <Styled_Title isDark={isDark}>Login</Styled_Title>
      <Styled_Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Styled_Label
            active={isUsernameFocused}
            htmlFor="username"
            isDark={isDark}
          >
            Username
          </Styled_Label>
          <Styled_Input
            type="text"
            name="username"
            id="username"
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(true)}
            isDark={isDark}
            {...register("username")}
          />
        </InputWrapper>
        <br />
        <InputWrapper>
          <Styled_Label
            active={isPasswordFocused}
            htmlFor="password"
            isDark={isDark}
          >
            Password
          </Styled_Label>
          <Styled_Input
            type="password"
            name="password"
            id="password"
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(true)}
            {...register("password")}
            isDark={isDark}
          />
        </InputWrapper>
        <Styled_Span isDark={isDark}>
          Are you a new user? <Link to="/signup">signup</Link>
        </Styled_Span>
        <br />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Styled_Form>
      <GoogleLogin />
    </Styled_Container>
  );
}

export default Login;
