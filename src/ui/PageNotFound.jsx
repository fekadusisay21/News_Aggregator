import styled from "styled-components"
import fourofour from "./3828537.jpg"
import { NavLink } from "react-router-dom";
function PageNotFound() {
const Styled_FouroFour =styled.img`
width:300px;
`;
const Styled_Link = styled(NavLink)`
text-decoration: none;
font-size: 20px;
color:#000;
`;
const Styled_container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
  return (
    <Styled_container>
      <Styled_FouroFour src={fourofour} alt="404"/>
      <h2>Page not found.</h2>
      <Styled_Link to="/">Go to home.</Styled_Link>
    </Styled_container>
  )
}
export default PageNotFound
