/// <reference types="react" />
interface ModalProps {
    children: React.ReactNode;
    onClose?: () => void;
}
declare const ModalPortal: ({ children, onClose }: ModalProps) => import("react").ReactPortal | null;
export default ModalPortal;
