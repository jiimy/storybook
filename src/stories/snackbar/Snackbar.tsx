import { forwardRef } from 'react';
import s from './snackbar.module.scss';

type ActionProps = {
	children?: React.ReactNode;
};

/**
 * Snackbar Action
 */
export const SnackbarAction = forwardRef<HTMLSpanElement, ActionProps>(
	(props, ref) => {
		return <span ref={ref}>{props.children}</span>;
	},
);

SnackbarAction.displayName = 'SnackbarAction';

// ------------------
// ------------------

type ImageProps = {
	children?: React.ReactNode;
};

/**
 * Snackbar Image
 */
export const SnackbarImage = ({ children }: ImageProps) => {
	return <div>{children}</div>;
};

SnackbarImage.displayName = 'SnackbarImage';

// ----------------------
// ----------------------

type DescriptionProps = {
	children?: React.ReactNode | string;
};

/**
 * Snackbar Description
 */
export const SnackbarDescription = ({ children }: DescriptionProps) => {
	return <p>{children}</p>;
};

SnackbarDescription.displayName = 'SnackbarDescription';

// ----------------------
// ----------------------

type SnackbarProps = {
	open?: boolean;
	children?: React.ReactNode | string;
};

export const SnackbarRoot = (props: SnackbarProps) => {
	const { open, children } = props;

	if (open) {
		return <div className={s.snackbar}>{children}</div>;
	}

	return null;
};

const Snackbar = Object.assign(SnackbarRoot, {
	Image: SnackbarImage,
	Description: SnackbarDescription,
	Action: SnackbarAction,
});

export default Snackbar;
