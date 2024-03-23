import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  padding: 0;
  height: 40px;
  margin: 10px;
`;

const Styled_Label = styled.label`
  position: absolute;
  top: ${(props) => (props.active ? "-12px" : "8px")};
  left: 8px;
  font-size: ${(props) => (props.active ? "16px" : "18px")};
  transition: top 0.3s, font-size 0.3s;
  pointer-events: none;
  color: ${(props) =>
    props.active ? "#0064c8" : props.isDark ? "#ccc" : "#000"};
`;

const Styled_Input = styled.input`
  display: block;
  background-color: ${(props) => (props.isDark ? "#00172b" : "#ccc")};
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: solid 1px #ccc;
  margin: 8px;
  color: ${(props) => (props.isDark ? "#ccc" : "#000")};
  &:focus {
    outline: none;
    border-bottom: solid 2px #4f46e5;
  }
`;

export { Styled_Input, InputWrapper, Styled_Label };
