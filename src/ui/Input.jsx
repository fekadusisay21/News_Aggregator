/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
  color: ${(props) => (props.active ? "#3c009d" : "#777")};
`;

const StyledInput = styled.input`
  display: block;
  background-color: #ccc;
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 2px solid black;
  &:focus {
    outline: none;
    border-bottom-color: #3c009d;
  }
`;

function Input({ name, id, label, type = "text" }) {
  const { register } = useForm();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <InputWrapper>
        <Styled_Label active={isFocused} htmlFor="username">
          {label}
        </Styled_Label>
        <StyledInput
          type={type}
          name={name}
          id={id}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(true)}
          {...register(`${name}`)}
        />
      </InputWrapper>
    </>
  );
}

export default Input;
