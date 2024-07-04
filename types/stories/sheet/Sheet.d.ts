import { ReactNode } from 'react';
type SheetProps = {
    isShow: boolean;
    onClose: () => void;
    children?: ReactNode;
    isDim?: boolean;
    height?: string;
};
declare const Sheet: ({ children, isDim, isShow, height, onClose }: SheetProps) => import("react/jsx-runtime").JSX.Element;
export default Sheet;
