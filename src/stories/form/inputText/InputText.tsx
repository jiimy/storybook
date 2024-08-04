import styled, { css } from 'styled-components';
import React, { HTMLProps, forwardRef, Ref, useState } from "react";
import s from './inputText.module.scss';

type InputTextProps = {
  state?: 'error' | 'warning' | 'success',
  // value?: string;
  // onChange?: (value: string) => void;
  validText?: string;
} & HTMLProps<HTMLInputElement>

const InputDivStyle = styled.div<InputTextProps>`
  ${props => props.state === 'error' && css`
    span {
      color: var(--sw-error-color);
    }
  `}
  ${props => props.state === 'warning' && css`
    span {
      color: var(--sw-warning-color);
    }
  `}
  ${props => props.state === 'success' && css`
    span {
      color: var(--sw-success-color);
    }
  `}
`

const InputStyle = styled.input`

`

const InputText = ({ state, validText, ...attr }: InputTextProps) => {
  // const [text, setText] = useState('');

  // const handleChange = (e: any) => {
  //   setText(e.target.value);
  // };

  return (
    <InputDivStyle state={state} className={s.input_wrap}>
      <InputStyle type="text" {...attr} />
      {validText && <span>{validText}</span>}
    </InputDivStyle>
  );
};

export default InputText;
export type { InputTextProps }