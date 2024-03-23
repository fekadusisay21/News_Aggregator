import { styled } from '@mui/system';
import { FormControl, Input, InputLabel } from '@mui/material';
const InputWrapper = styled(FormControl)`
  position: relative;
  padding: 0;
`;

const Styled_Label = styled(InputLabel)`
  position: absolute;
  top: ${(props) => (props.active ? "-12px" : "8px")};
  left: 8px;
  font-size: ${(props) => (props.active ? "14px" : "16px")};
  transition: top 0.3s, font-size 0.3s;
  pointer-events: none;
  color: ${(props) => (props.isDark ? "#ffffff" : "#000")};
`;

const Styled_Input = styled(Input)`
  display: block;
  background-color: ${(props) => (props.isDark ? "#00172b" : "#ccc")};
  width: 100%;
  padding: 8px;
  border: none;
  margin: 8px;
  color: ${(props) => (props.isDark ? "#ccc" : "#000")};
  &:focus {
    outline: none;
    border-bottom-color: #ccc;
  }
`;

export { Styled_Input, InputWrapper, Styled_Label };