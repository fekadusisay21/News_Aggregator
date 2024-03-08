import Button from "../ui/Button";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
// import GoogleAuth from "../ui/GoogleAuth";
import { Styled_Input, Styled_Label, InputWrapper } from "../ui/Input";
import { useEffect, useState } from "react";
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

function Signup() {
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const form = useRef();
  const formbtn = useRef();
  const { setUserData, setConfirmationCode, confirmationCode } = useAuth();
  useEffect(() => {
    setConfirmationCode(generateNumber());
  }, [setConfirmationCode]);
  const { register, handleSubmit } = useForm();
  const [focusedField, setFocusedField] = useState("");
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qzwee87", "template_dmbtmjs", form.current, {
        publicKey: "fJLtJwq9pj046YL8H",
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
            <Styled_Label
              active={focusedField === "firstname"}
              htmlFor="firstname"
            >
              First Name
            </Styled_Label>
            <Styled_Input
              type="text"
              name="firstname"
              onInput={(e) => setUsernameValue(e.target.value)}
              id="firstname"
              onFocus={() => handleFocus("firstname")}
              onBlur={() => handleFocus("firstname")}
              {...register("firstname")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label
              active={focusedField === "lastname"}
              htmlFor="lastname"
            >
              Last Name
            </Styled_Label>
            <Styled_Input
              type="text"
              name="lastname"
              id="lastname"
              onFocus={() => handleFocus("lastname")}
              onBlur={() => handleFocus("")}
              {...register("lastname")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label
              active={focusedField === "username"}
              htmlFor="username"
            >
              Username
            </Styled_Label>
            <Styled_Input
              type="text"
              name="username"
              id="username"
              onFocus={() => handleFocus("username")}
              onBlur={() => handleFocus("")}
              {...register("username")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label active={focusedField === "email"} htmlFor="email">
              Email
            </Styled_Label>
            <Styled_Input
              type="email"
              onInput={(e) => setEmailValue(e.target.value)}
              name="email"
              id="email"
              onFocus={() => handleFocus("email")}
              onBlur={() => handleFocus("")}
              {...register("email")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label
              active={focusedField === "password"}
              htmlFor="password"
            >
              Password
            </Styled_Label>
            <Styled_Input
              type="password"
              name="password"
              id="password"
              onFocus={() => handleFocus("password")}
              onBlur={() => handleFocus("")}
              {...register("password")}
            />
          </InputWrapper>
          <InputWrapper>
            <Styled_Label
              active={focusedField === "confirmpassword"}
              htmlFor="confirmpassword"
            >
              Confirm Password
            </Styled_Label>
            <Styled_Input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onFocus={() => handleFocus("confirmpassword")}
              onBlur={() => handleFocus("")}
              {...register("confirmpassword")}
            />
          </InputWrapper>
          <Styled_Span>
            Already a user? <Link to="/login">login</Link>
          </Styled_Span>
          <Button variation="primary" size="small" type="submit">
            Sign up
          </Button>
          {/* <GoogleAuth /> */}
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
