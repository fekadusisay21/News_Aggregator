import Button from "../ui/Button";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import GoogleAuth from "../ui/GoogleAuth";
import { Styled_Input, Styled_Label, InputWrapper } from "../ui/Input";
import { useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { generateNumber } from "../utils/helpers";
import { useAuth } from "../context/AuthContext";
import { useRef } from "react";

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
const Styled_Span = styled.span`
  display: block;
  padding-bottom: 20px;
  color: white;
  a {
    color: #ccc;
    &:hover {
      color: white;
    }
  }
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

function reducer(state, action) {
  if (action.type === "toggle_fname") return { ...state, fname: true };
  if (action.type === "toggle_lname") return { ...state, lname: true };
  if (action.type === "toggle_uname") return { ...state, uname: true };
  if (action.type === "toggle_email") return { ...state, email: true };
  if (action.type === "toggle_password") return { ...state, password: true };
  if (action.type === "toggle_confpassword")
    return { ...state, confpassword: true };
}

function Signup() {
  const initailState = {};
  const [state, dispatch] = useReducer(reducer, initailState);
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const form = useRef();
  const formbtn = useRef();
  const { setUserData, setConfirmationCode, confirmationCode, logged } =
    useAuth();
  useEffect(() => {
    setConfirmationCode(generateNumber());
  }, []);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_3d6cxkw", "template_2sg6hto", form.current, {
        publicKey: "n7kbqTx01c_VI-8gl",
      })
      .then(
        () => {
          toast.success("Email sent");
        },
        () => {
          toast.error("Email sending is failed");
          navigate("/signup");
        }
      );
  };

  const onSubmit = (data) => {
    formbtn.current.click();
    setUserData(data);
    navigate("/verify");
  };
  if (logged) return;
  return (
    <>
      <Styled_Container>
        <Styled_CloseBtn onClick={() => navigate("/")}>
          <IoIosCloseCircleOutline />
        </Styled_CloseBtn>
        <Styled_Title>Sign Up</Styled_Title>
        <Styled_Hr />
        <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Styled_Label active={state.fname} htmlFor="firstname">
              First Name
            </Styled_Label>
            <Styled_Input
              type="text"
              name="firstname"
              onInput={(e) => setUsernameValue(e.target.value)}
              id="firstname"
              onFocus={() => dispatch({ type: "toggle_fname" })}
              onBlur={() => dispatch({ type: "toggle_fname" })}
              {...register("firstname")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label active={state.lname} htmlFor="lastname">
              Last Name
            </Styled_Label>
            <Styled_Input
              type="text"
              name="lastname"
              id="lastname"
              onFocus={() => dispatch({ type: "toggle_lname" })}
              onBlur={() => dispatch({ type: "toggle_lname" })}
              {...register("lastname")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label active={state.uname} htmlFor="username">
              Username
            </Styled_Label>
            <Styled_Input
              type="text"
              name="username"
              id="username"
              onFocus={() => dispatch({ type: "toggle_uname" })}
              onBlur={() => dispatch({ type: "toggle_uname" })}
              {...register("username")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label active={state.email} htmlFor="email">
              Email
            </Styled_Label>
            <Styled_Input
              type="email"
              onInput={(e) => setEmailValue(e.target.value)}
              name="email"
              id="email"
              onFocus={() => dispatch({ type: "toggle_email" })}
              onBlur={() => dispatch({ type: "toggle_email" })}
              {...register("email")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label active={state.password} htmlFor="password">
              Password
            </Styled_Label>
            <Styled_Input
              type="password"
              name="password"
              id="password"
              onFocus={() => dispatch({ type: "toggle_password" })}
              onBlur={() => dispatch({ type: "toggle_password" })}
              {...register("password")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label active={state.confpassword} htmlFor="confirmpassword">
              Confirm Password
            </Styled_Label>
            <Styled_Input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onFocus={() => dispatch({ type: "toggle_confpassword" })}
              onBlur={() => dispatch({ type: "toggle_confpassword" })}
              {...register("confirmpassword")}
            />
          </InputWrapper>
          <Styled_Span>
            Already a user? <Link to="/login">login</Link>
          </Styled_Span>
          <Button variation="primary" size="small" type="submit">
            Sign up
          </Button>
          <GoogleAuth />
        </form>
      </Styled_Container>
      <form ref={form} onSubmit={sendEmail} hidden>
        <label>Name</label>
        <input type="text" name="user_name" value={usernameValue} />
        <label>Email</label>
        <input type="email" name="user_email" value={emailValue} />
        <label>Message</label>
        <input name="message" value={confirmationCode} />
        <input type="submit" value="Send" ref={formbtn} />
      </form>
    </>
  );
}

export default Signup;
