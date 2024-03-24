import { PiSpinnerBold } from "react-icons/pi";
import styled from "styled-components";
import { useDark } from "../context/DarkContext";

const Styled_Span = styled.span`
  margin-right: 8px;
  margin-top: 4px;
`;

function BtnSpinner() {
  const { isDark } = useDark();
  return (
    <Styled_Span>
      <PiSpinnerBold
        className="fa-pulse rotating-icon"
        color={isDark ? "white" : "black"}
        size={16}
      />
    </Styled_Span>
  );
}

export default BtnSpinner;
