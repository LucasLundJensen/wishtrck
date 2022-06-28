interface Props {
	text: string;
	className?: string;
}

function Button(props: Props) {
	return (
		<button
			className={`bg-blue-primary hover:bg-sky-600 px-7 py-2 text-white font-semibold rounded-md w-full ${
				props.className ?? ""
			}`}
		>
			{props.text}
		</button>
	);
}

export default Button;
