type timerProgressBarProps = {
    theme?: 'tick' | 'fill';
    percent?: boolean;
    timer: number;
    delay?: number;
    itemNumber?: number | 'auto';
    start: boolean;
};
declare const TimerProgressBar: ({ theme, ...attr }: timerProgressBarProps) => import("react/jsx-runtime").JSX.Element;
export default TimerProgressBar;
