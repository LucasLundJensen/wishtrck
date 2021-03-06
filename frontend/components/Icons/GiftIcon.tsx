interface Props {
	className?: string;
}

function GiftIcon(props: Props) {
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
			<rect x={3} y={8} width={18} height={4} rx={1} />
			<path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
		</svg>
	);
}

export default GiftIcon;
