/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Styled_Label = styled.label`
  position: absolute;
  top: ${(props) => (props.active ? "-12px" : "8px")};
  left: 8px;
  font-size: ${(props) => (props.active ? "14px" : "16px")};
  transition: top 0.3s, font-size 0.3s;
  pointer-events: none;
  color: ${(props) => (props.active ? "white" : "#777")};
`;

const Styled_Input = styled.input`
  display: block;
  background-color: #121621;
  width: 100%;
  padding: 8px;
  border: none;
  margin: 8px;
  border-bottom: 2px solid white;
  color: ${(props) => (props.active ? "white" : "white")};
  &:focus {
    outline: none;
    border-bottom-color: #3c009d;
  }
`;

export { Styled_Input, InputWrapper, Styled_Label };
