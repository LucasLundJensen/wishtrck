import clsx from "clsx";
import { useEffect, useState } from "react";
import { BadgeIcon, CheckIcon } from "../Icons";
import { User } from "../Navbar/AuthenticatedNavbar";

interface Props {
	className?: string;
	user: User;
	selected?: boolean;
	hideBadge?: boolean;
	hideSelection?: boolean;
	onUserClick?: (user: User) => void;
}

const colors = ["bg-blue-600", "bg-red-600", "bg-green-600", "bg-yellow-600", "bg-purple-600", "bg-orange-600"];

function pickRandomColor() {
	const rdn = Math.floor(Math.random() * colors.length);
	return colors[rdn];
}

function Person(props: Props) {
	const [color, setColor] = useState<string>("");
	useEffect(() => {
		setColor(pickRandomColor());
	}, []);
	return (
		<button
			onClick={() => props.onUserClick(props.user)}
			className={clsx(
				"flex flex-row text-white items-center justify-between p-2 rounded-lg hover:bg-dark-400 transition-all duration-200",
				props.className
			)}
		>
			<div className="flex flex-row items-center overflow-x-hidden">
				<div
					className={`flex justify-center items-center min-w-[1.75rem] min-h-[1.75rem] rounded-lg mr-2 ${color}`}
				>
					<p className="font-semibold">{props.user.name.charAt(0)}</p>
				</div>
				<p className="truncate">{props.user.name.split(" ")[0]}</p>
				{props.user.administrator && !props.hideBadge ? (
					<BadgeIcon className="h-5 w-5 text-blue-light ml-2" />
				) : null}
			</div>
			{props.selected && !props.hideSelection ? <CheckIcon className="w-5 h-5 text-white" /> : null}
		</button>
	);
}

export default Person;
