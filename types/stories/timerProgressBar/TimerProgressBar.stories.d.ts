import type { StoryObj } from "@storybook/react";
import TimerProgressBar from "./TimerProgressBar";
declare const meta: {
    title: string;
    component: ({ theme, ...attr }: {
        theme?: "fill" | "tick" | undefined;
        percent?: boolean | undefined;
        timer: number;
        delay?: number | undefined;
        itemNumber?: number | "auto" | undefined;
        start: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {};
};
export default meta;
type Story = StoryObj<typeof TimerProgressBar>;
export declare const Start: Story;
