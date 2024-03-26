import { PiSpinnerBold } from "react-icons/pi";
import styled from "styled-components";

const Styled_Span = styled.span`
  margin-right: 8px;
  margin-top: 4px;
`;

function BtnSpinner() {
  return (
    <Styled_Span>
      <PiSpinnerBold
        className="fa-pulse rotating-icon"
        color="white"
        size={16}
      />
    </Styled_Span>
  );
}

export default BtnSpinner;
