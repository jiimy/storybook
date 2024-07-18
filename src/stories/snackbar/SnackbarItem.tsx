import { forwardRef } from 'react';

// -------------------------
// ---- Snackbar Action ----
// -------------------------

type ActionProps = {
	children?: React.ReactNode;
};

export const SnackbarAction = forwardRef<HTMLSpanElement, ActionProps>(
	(props, ref) => {
		return <span ref={ref}>{props.children}</span>;
	},
);

SnackbarAction.displayName = 'SnackbarAction';

// ------------------------
// ---- Snackbar Image ----
// ------------------------

type ImageProps = {
	children?: React.ReactNode;
};

export const SnackbarImage = ({ children }: ImageProps) => {
	return <div>{children}</div>;
};

SnackbarImage.displayName = 'SnackbarImage';

// ------------------------------
// ---- Snackbar Description ----
// ------------------------------

type DescriptionProps = {
	children?: React.ReactNode | string;
};

export const SnackbarDescription = ({ children }: DescriptionProps) => {
	return <p>{children}</p>;
};

SnackbarDescription.displayName = 'SnackbarDescription';
