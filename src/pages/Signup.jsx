import styled from "styled-components";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import GoogleAuth from "../ui/GoogleAuth";
import { InputWrapper, Styled_Input, Styled_Label } from "../ui/Input";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { generateNumber } from "../utils/helpers";
import { useAuth } from "../context/AuthContext";
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
  padding: 0;
  color: red;
  margin-left: 130%;
  margin-top: 0;
  font-size: 32px;
  background-color: transparent;
  border: none;
  top: 0;
`;

const Styled_Container = styled.div`
  padding: 0 100px;
  padding-right: 110px;
  text-align: center;
  align-content: center;
  border-radius: 10px;
  margin-top: 12.5%;
  background-color: ${(props) => (props.isDark ? "#00172b" : "#ccc")};
`;

const Styled_Span = styled.span`
  display: block;
  padding-bottom: 20px;
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
  margin: 4px auto 4px;
`;

const Styled_Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

function Signup() {
  const [focusState, setFocusState] = useState({
    fname: false,
    lname: false,
    uname: false,
    email: false,
    password: false,
    confpassword: false,
  });

  function setFocus(focustype) {
    setFocusState((prevState) => ({
      ...prevState,
      [focustype]: true,
    }));
  }

  function unSetFocus(focustype) {
    setFocusState((prevState) => ({
      ...prevState,
      [focustype]: false,
    }));
  }

  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const form = useRef();
  const formbtn = useRef();
  const { setUserData, setConfirmationCode, confirmationCode, logged } =
    useAuth();
  useEffect(() => {
    setConfirmationCode(generateNumber());
  }, []);
  const { isDark } = useDark();
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
    console.log("clicked");
    setUserData(data);
    navigate("/verify");
  };

  if (logged) return null;

  return (
    <>
      <Styled_Container isDark={isDark}>
        <Styled_CloseBtn onClick={() => navigate("/")}>
          <IoIosCloseCircleOutline />
        </Styled_CloseBtn>
        <Styled_Title isDark={isDark}>Sign Up</Styled_Title>
        <Styled_Hr />
        <Styled_Form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Styled_Label
              active={focusState.fname}
              htmlFor="firstname"
              isDark={isDark}
            >
              First Name
            </Styled_Label>
            <Styled_Input
              type="text"
              name="firstname"
              onInput={(e) => setUsernameValue(e.target.value)}
              id="firstname"
              onFocus={() => setFocus("fname")}
              onBlur={() => unSetFocus("fname")}
              {...register("firstname")}
              isDark={isDark}
            />
          </InputWrapper>

          <br />
          <InputWrapper>
            <Styled_Label
              active={focusState.lname}
              htmlFor="lastname"
              isDark={isDark}
            >
              Last Name
            </Styled_Label>
            <Styled_Input
              type="text"
              name="lastname"
              id="lastname"
              onFocus={() => setFocus("lname")}
              onBlur={() => unSetFocus("lname")}
              {...register("lastname")}
              isDark={isDark}
            />
          </InputWrapper>
          <br />
          <InputWrapper>
            <Styled_Label
              active={focusState.uname}
              htmlFor="username"
              isDark={isDark}
            >
              Username
            </Styled_Label>
            <Styled_Input
              type="text"
              name="username"
              id="username"
              onFocus={() => setFocus("uname")}
              onBlur={() => unSetFocus("uname")}
              {...register("username")}
              isDark={isDark}
            />
          </InputWrapper>
          <br />
          <InputWrapper>
            <Styled_Label
              active={focusState.email}
              htmlFor="email"
              isDark={isDark}
            >
              Email
            </Styled_Label>
            <Styled_Input
              type="email"
              onInput={(e) => setEmailValue(e.target.value)}
              name="email"
              id="email"
              onFocus={() => setFocus("email")}
              onBlur={() => unSetFocus("email")}
              {...register("email")}
              isDark={isDark}
            />
          </InputWrapper>
          <br />

          <InputWrapper>
            <Styled_Label
              active={focusState.password}
              htmlFor="password"
              isDark={isDark}
            >
              Password
            </Styled_Label>
            <Styled_Input
              type="password"
              name="password"
              id="password"
              onFocus={() => setFocus("password")}
              onBlur={() => unSetFocus("password")}
              {...register("password")}
              isDark={isDark}
            />
          </InputWrapper>
          <br />
          <InputWrapper>
            <Styled_Label
              active={focusState.confpassword}
              htmlFor="confirmpassword"
              isDark={isDark}
            >
              Confirm Password
            </Styled_Label>
            <Styled_Input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onFocus={() => setFocus("confpassword")}
              onBlur={() => unSetFocus("confpassword")}
              {...register("confirmpassword")}
              isDark={isDark}
            />
          </InputWrapper>
          <Styled_Span isDark={isDark}>
            Already a user? <Link to="/login">login</Link>
          </Styled_Span>
          <Button
            variation="primary"
            size="small"
            onClick={() => console.log("clicked")}
          >
            Sign up
          </Button>
          <GoogleAuth />
        </Styled_Form>
      </Styled_Container>
      <form ref={form} onSubmit={sendEmail} hidden>
        <label>Name</label>
        <input type="text" name="user_name" value={usernameValue} />
        <label>Email</label>
        <input type="email" name="user_email" value={emailValue} />
        <label>Message</label>
        <input name="message" value={confirmationCode} />
        <Button value="Send" ref={formbtn}></Button>
      </form>
    </>
  );
}

export default Signup;
