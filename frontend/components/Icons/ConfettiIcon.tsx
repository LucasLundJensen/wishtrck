interface Props {
	className?: string;
}

function ConfettiIcon(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M0 0h24v24H0z" stroke="none" />
			<path d="M4 5h2M5 4v2M11.5 4 11 6M18 5h2M19 4v2M15 9l-1 1M18 13l2-.5M18 19h2M19 18v2M14 16.518 7.482 10l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329L14 16.519z" />
		</svg>
	);
}

export default ConfettiIcon;
