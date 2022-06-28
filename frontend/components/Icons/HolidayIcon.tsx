interface Props {
	className?: string;
}

function HolidayIcon(props: Props) {
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
			<path d="m12 3 4 4-2 1 4 4-3 1 4 4H5l4-4-3-1 4-4-2-1zM14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3" />
		</svg>
	);
}

export default HolidayIcon;
