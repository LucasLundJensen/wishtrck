interface Props {
	children: any;
}

export default function LandingLayout(props: Props) {
	return (
		<>
			<div>
				<p>Landing page layout!</p>
			</div>
			{props.children}
		</>
	);
}
