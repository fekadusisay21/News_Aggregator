import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const override = {
  display: "block",
};

function Spinner() {
  return (
    <SpinnerContainer>
      <HashLoader size={50} cssOverride={override} color="#4f46e5" />
    </SpinnerContainer>
  );
}

export default Spinner;
