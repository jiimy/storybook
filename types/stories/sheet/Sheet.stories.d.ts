/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import Sheet from "./Sheet";
declare const meta: {
    title: string;
    component: ({ children, isDim, isShow, height, onClose }: {
        isShow: boolean;
        onClose: () => void;
        children?: import("react").ReactNode;
        isDim?: boolean | undefined;
        height?: string | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {};
};
export default meta;
type Story = StoryObj<typeof Sheet>;
export declare const Toggle: Story;
