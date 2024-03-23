/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Styled_Label, InputWrapper, Styled_Input } from "../ui/Input";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useDark } from "../context/DarkContext";

const Styled_Container = styled.div`
  background-color: #121621;
  padding: 80px 100px;
  padding-right: 110px;
  text-align: center;
  align-content: center;
  border-radius: 10px;
  margin-top: 12.5%;
`;

const Styled_Title = styled.h1`
  color: white;
  text-align: center;
  margin: 8px auto;
`;
const Styled_Hr = styled.h1`
  width: 61px;
  height: 6px;
  background: #3c009d;
  border-radius: 9px;
  margin: 0 auto 40px;
`;

const Styled_CloseBtn = styled.button`
  position: relative;
  color: red;
  margin-left: 100%;
  margin-top: 0;
  font-size: 32px;
  background-color: #121621;
  border: none;
  top: 0;
`;

function Login() {
  const { isDark } = useDark();
  const { confirmationCode, userData, registerUser } = useAuth();
  const [isVerifyActive, serVerifyActive] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (confirmationCode === Number(data.verifyemail)) registerUser(userData);
    else toast.error("Incorrect Code");
  };
  return (
    <Styled_Container>
      <Styled_CloseBtn onClick={() => navigate("/")}>
        <IoIosCloseCircleOutline />
      </Styled_CloseBtn>
      <Styled_Title>Verify Email</Styled_Title>
      <Styled_Hr />
      <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Styled_Label
            active={isVerifyActive}
            htmlFor="verifyemail"
            isDark={isDark}
          >
            Code
          </Styled_Label>
          <Styled_Input
            type="verifyemail"
            name="verifyemail"
            id="verifyemail"
            onFocus={() => serVerifyActive(true)}
            onBlur={() => serVerifyActive(true)}
            {...register("verifyemail", { required: true })}
            isDark={isDark}
          />
        </InputWrapper>
        <Button variant="contained" type="submit">
          Verify
        </Button>
      </form>
    </Styled_Container>
  );
}

export default Login;
