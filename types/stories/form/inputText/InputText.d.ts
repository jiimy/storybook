import { HTMLProps } from "react";
type InputTextProps = {
    state?: 'error' | 'warning' | 'success';
    value?: string;
    onChange?: (value: string) => void;
    validText?: string;
} & HTMLProps<HTMLInputElement>;
declare const InputText: ({ state, value, onChange, validText, ...attr }: InputTextProps) => import("react/jsx-runtime").JSX.Element;
export default InputText;
