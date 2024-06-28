import styled, { css } from 'styled-components';
import React, { HTMLProps, forwardRef, Ref } from "react";

type InputProps = {
  state?: 'error' | 'warning' | 'success',
  value?: string;
  onChange?: (value: string) => void;
} & HTMLProps<HTMLInputElement>

const InputDivStyle = styled.div<InputProps>`
  ${props => props.state === 'error' && css`
    input {
      border-color: red;
    }
  `}
  ${props => props.state === 'warning' && css`
    font-size: 12px;
    padding: 10px 16px;
  `}
  ${props => props.state === 'success' && css`
    font-size: 12px;
    padding: 10px 16px;
  `}
`

const InputStyle = styled.input`

`

const Input = ({state, value, onChange, ...attr}: InputProps) => {

  const handleChange = (event: any) => {
    // onChange(event.target.value);
  };

  return (
    <InputDivStyle state={state}>
      <InputStyle type="text" value={value} onChange={handleChange} {...attr} />
    </InputDivStyle>
  );
};

export default Input;