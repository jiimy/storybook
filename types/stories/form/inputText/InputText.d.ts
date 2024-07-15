import { HTMLProps } from "react";
type InputTextProps = {
    state?: 'error' | 'warning' | 'success';
    validText?: string;
} & HTMLProps<HTMLInputElement>;
declare const InputText: ({ state, validText, ...attr }: InputTextProps) => import("react/jsx-runtime").JSX.Element;
export default InputText;
