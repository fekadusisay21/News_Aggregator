import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import styled from "styled-components";
import GoogleSignup from "../ui/GoogleSignup";
import { useAuth } from "../context/AuthContext";
import { FaWindowClose } from "react-icons/fa";

const Styled_Container = styled.div`
  background-color: #ccc;
  padding: 80px 100px;
  padding-right: 110px;
  text-align: center;
  align-content: center;
  border-radius: 10px;
  margin-top: 12.5%;
`;

const Styled_Title = styled.h1`
  color: #3c009d;
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
`;

const Styled_CloseBtn = styled.button`
  position: relative;
  color: black;
  margin-left: 100%;
  margin-top: 0;

  font-size: 20px;
  background-color: #ccc;
  border: none;
  top: 0;
`;
function Signup() {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const userData = {};
    userData.username = e.target[0].value;
    userData.firstname = e.target[1].value;
    userData.lastname = e.target[2].value;
    userData.email = e.target[3].value;
    userData.password = e.target[4].value;
    registerUser(userData);
  }
  return (
    <Styled_Container>
      <Styled_CloseBtn onClick={() => navigate("/")}>
        <FaWindowClose />
      </Styled_CloseBtn>
      <Styled_Title>Sign Up</Styled_Title>
      <Styled_Hr />
      <form action="" method="POST" onSubmit={handleSubmit}>
        <Input type="text" label="username" id="username" name="username" />
        <Input type="text" label="First Name" id="fname" name="firstname" />
        <Input type="text" label="Last Name" id="lname" name="lastname" />
        <Input type="text" label="Email" id="email" name="email" />
        <Input type="password" label="Password" id="password" name="password" />
        <Input
          type="password"
          label="Confirm Password"
          id="conf_password"
          name="conf_password"
        />
        <Styled_Span>
          Already a user? <Link to="/login">login</Link>
        </Styled_Span>
        <Button variation="primary" size="small" type="submit">
          Sign up
        </Button>
        <GoogleSignup />
      </form>
    </Styled_Container>
  );
}

export default Signup;
