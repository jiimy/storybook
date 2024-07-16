import type { StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
declare const meta: {
    title: string;
    component: (({ children, setOnModal, onClose, isDim, zindex, dimClick, onClick, className }: import("./ModalFrame").modalFrameType) => import("react/jsx-runtime").JSX.Element) & {
        Title: ({ children }: {
            children: import("react").ReactNode;
        }) => import("react/jsx-runtime").JSX.Element;
        Content: ({ children }: {
            children: import("react").ReactNode;
        }) => import("react/jsx-runtime").JSX.Element;
        Buttons: ({ children }: {
            children: import("react").ReactNode;
        }) => import("react/jsx-runtime").JSX.Element;
    };
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {};
};
export default meta;
type Story = StoryObj<typeof Modal>;
export declare const Toggle: Story;
