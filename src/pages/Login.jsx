/* eslint-disable react/prop-types */
// import Input from "../ui/Input";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Styled_Input, Styled_Label, InputWrapper } from "../ui/Input";
import { useAuth } from "../context/AuthContext";
import GoogleLogin from "../ui/GoogleLogin";
import { useDark } from "../context/DarkContext";
import Button from "../ui/Button";

const Styled_Hr = styled.h1`
  width: 61px;
  height: 6px;
  background: #3c009d;
  border-radius: 9px;
  margin: 0 auto 20px;
`;
const Styled_CloseBtn = styled.button`
  position: relative;
  color: red;
  margin-left: 100%;
  margin-top: 0;
  font-size: 32px;
  background-color: transparent;
  border: none;
  top: 0;
`;

function Login() {
  const { logUser, logged } = useAuth();
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigate = useNavigate();
  const { isDark } = useDark();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    logUser(data);
  };
  if (logged) return;

  const Styled_Container = styled.div`
    background-color: ${isDark ? "#00172b" : "#ccc"};
    padding: 80px 100px;
    padding-right: 110px;
    text-align: center;
    align-content: center;
    border-radius: 10px;
    margin-top: 12.5%;
  `;
  const Styled_Span = styled.span`
    display: block;
    padding-bottom: 40px;
    color: ${isDark ? "white" : "black"};
    a {
      color: ${isDark ? "white" : "black"};
      &:hover {
        color: red;
      }
    }
  `;

  const Styled_Title = styled.h1`
    color: ${isDark ? "white" : "black"};
    text-align: center;
    margin: 8px auto 8px;
  `;
  return (
    <Styled_Container>
      <Styled_CloseBtn onClick={() => navigate("/")}>
        <IoIosCloseCircleOutline />
      </Styled_CloseBtn>
      <Styled_Title>Login</Styled_Title>
      <Styled_Hr />
      <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
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
            onBlur={() => setIsUsernameFocused(false)}
            {...register("username")}
            isDark={isDark}
          />
        </InputWrapper>

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
            onBlur={() => setIsPasswordFocused(false)}
            {...register("password")}
            isDark={isDark}
          />
        </InputWrapper>
        <Styled_Span>
          Are you a new user? <Link to="/signup">signup</Link>
        </Styled_Span>
        <Button variation="primary" size="small" type="submit">
          Login
        </Button>
      </form>
      <GoogleLogin />
    </Styled_Container>
  );
}

export default Login;
