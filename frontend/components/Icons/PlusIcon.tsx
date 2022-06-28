interface Props {
	className?: string;
}

function PlusIcon(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
		</svg>
	);
}

export default PlusIcon;