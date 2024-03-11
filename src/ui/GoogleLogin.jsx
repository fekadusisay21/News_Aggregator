import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useGoogleLogin } from "../hooks/useGoogleLogin";

const Styled_Container = styled.div`
  margin: 8px 0;
`;

function GoogleLogin() {
  const { logged } = useAuth();
  useGoogleLogin();

  return (
    <Styled_Container>{!logged && <div id="LogInDiv"></div>}</Styled_Container>
  );
}

export default GoogleLogin;
