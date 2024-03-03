import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
const Styled_Button = styled.button`
  display: flex;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  padding: 16px 8px;
  align-items: center;
  gap: 8px;
  background-color: #4f46e5;
  border-radius: 5px;
  margin-top: 12px;
  &:hover {
    background-color: #3629ca;
  }
`;

const Styled_Icon = styled.div`
  padding-right: 4px;
  border-right: solid 3px white;
`;

function GoogleSignup() {
  return (
    <Styled_Button>
      <Styled_Icon>
        <FcGoogle />
      </Styled_Icon>
      Signup With Google
    </Styled_Button>
  );
}

export default GoogleSignup;
