import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useGoogle } from "../hooks/useGoogle";


const Styled_Container = styled.div`
margin: 8px 0;
`;
function GoogleAuth() {
  const { logged } = useAuth();
  useGoogle();

  return <Styled_Container>{!logged && <div id="signInDiv"></div>} </Styled_Container>;
}

export default GoogleAuth;
