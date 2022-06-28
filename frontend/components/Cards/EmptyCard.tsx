import clsx from "clsx";

interface Props {
	className?: string;
	children?: any;
}

function EmptyCard(props: Props) {
	return (
		<div className={clsx(`flex flex-col bg-dark-500 rounded-lg shadow-md`, props.className)}>{props.children}</div>
	);
}

export default EmptyCard;
