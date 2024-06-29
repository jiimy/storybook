import styled, { css } from 'styled-components';
import React, { HTMLProps, forwardRef, Ref } from "react";
import s from './inputText.module.scss';

type InputTextProps = {
  state?: 'error' | 'warning' | 'success',
  value?: string;
  onChange?: (value: string) => void;
  validText?: string;
} & HTMLProps<HTMLInputElement>

const InputDivStyle = styled.div<InputTextProps>`
  ${props => props.state === 'error' && css`
    span {
      color: var(--error);
    }
  `}
  ${props => props.state === 'warning' && css`
    span {
      color: var(--warning);
    }
  `}
  ${props => props.state === 'success' && css`
    span {
      color: var(--success);
    }
  `}
`

const InputStyle = styled.input`

`

const InputText = ({ state, value, onChange, validText, ...attr }: InputTextProps) => {

  const handleChange = (event: any) => {
    // onChange(event.target.value);
  };

  return (
    <InputDivStyle state={state} className={s.input_wrap}>
      <InputStyle type="text" value={value} onChange={handleChange} {...attr} />
      {validText && <span>{validText}</span>}
    </InputDivStyle>
  );
};

export default InputText;