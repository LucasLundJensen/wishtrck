interface Props {
	className?: string;
}

function HeartIcon(props: Props) {
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
			<path d="M19.5 13.572 12 21l-7.5-7.428m0 0A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.572" />
		</svg>
	);
}

export default HeartIcon;
