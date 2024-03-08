/* eslint-disable react/prop-types */
import Button from "../ui/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Styled_Label, InputWrapper } from "../ui/Input";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

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
  margin: 8px auto 8px;
`;
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
  background-color: #121621;
  border: none;
  top: 0;
`;

const Styled_Input = styled.input`
  display: block;
  background-color: #121621;
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: solid 2px white;
  margin: 8px;
  color: ${(props) => (props.active ? "white" : "white")};
  &:focus {
    outline: none;
    border: solid 2px #3c009d;
  }
`;

function Login() {
  const { confirmationCode, userData, registerUser } = useAuth();
  const [isVerifyActive, setIsVerifyActive] = useState(false);
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
          <Styled_Label active={isVerifyActive} htmlFor="password">
            Enter the code here
          </Styled_Label>
          <Styled_Input
            type="text"
            name="verifyemail"
            id="verifyemail"
            onFocus={() => setIsVerifyActive(true)}
            onBlur={() => setIsVerifyActive(false)}
            {...register("verifyemail")}
          />
        </InputWrapper>
        <Button variation="primary" size="small" type="submit">
          Verify
        </Button>
      </form>
    </Styled_Container>
  );
}

export default Login;
