import React, { HTMLProps } from 'react';
import s from './textarea.module.scss';
import { formProps } from '../form';

type TextAreaProps = {
  theme?: 'default' | 'auto', // default 는 높이가 정해져있음. auto 는 높이 유동적
  children?: any;
  // size?
}

type formTextareaProps = formProps & HTMLProps<HTMLTextAreaElement>;
type formDivProps = formProps & HTMLProps<HTMLDivElement>;

const TextArea = ({ theme = 'default', ...props }: TextAreaProps) => {
  if (theme === 'default') {
    const { value, onChange, validText, ...textareaProps } = props as formTextareaProps;
    return (
      <textarea {...textareaProps}>
      </textarea>
    );
  } else {
    const { value, onChange, validText, children, ...divProps } = props as formDivProps;
    return (
      <div contentEditable="true" className={s.textarea} {...divProps}>{children}</div>
    );

  }
};

export default TextArea;
export type { TextAreaProps }