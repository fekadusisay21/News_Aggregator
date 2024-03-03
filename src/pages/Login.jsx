import Input from "../ui/Input";
import Button from "../ui/Button";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { useForm } from "react-hook-form";

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
  padding-bottom: 40px;
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

function Login() {
  const { logUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    console.log(register);
    console.log(logUser);
  };
  //   function handleSubmit(e) {
  //     const userData = {};
  //     userData.username = e.target[0].value;
  //     userData.password = e.target[1].value;
  //     e.preventDefault();
  //     logUser(userData);
  //   }

  return (
    <Styled_Container>
      <Styled_CloseBtn onClick={() => navigate("/")}>
        <FaWindowClose />
      </Styled_CloseBtn>
      <Styled_Title>Login</Styled_Title>
      <Styled_Hr />
      <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" label="Username" id="username" name="username" />
        <Input type="password" label="Password" id="password" name="password" />
        <Styled_Span>
          Are you a new user? <Link to="/signup">signup</Link>
        </Styled_Span>
        <Button variation="primary" size="small" type="submit">
          Login
        </Button>
      </form>
    </Styled_Container>
  );
}

export default Login;
