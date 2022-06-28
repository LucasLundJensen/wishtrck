import { useState } from "react";
import { CaretDownIcon, CaretRightIcon } from "../Icons";

interface Props {
	text: string;
	className?: string;
	children?: any;
}

function Dropdown(props: Props) {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<div className="relative">
			<button
				className="flex flex-row items-center bg-dark-800 py-2 px-3 w-fit rounded-lg text-white"
				onClick={() => setVisible(!visible)}
			>
				<p className="mr-1">{props.text}</p>
				{visible ? <CaretDownIcon className="h-4 w-4 mt-0.5" /> : <CaretRightIcon className="h-4 w-4 mt-0.5" />}
			</button>
			<div className="absolute top-12 left-0 transition-all duration-200">
				{visible ? props.children ?? null : null}
			</div>
		</div>
	);
}

export default Dropdown;
