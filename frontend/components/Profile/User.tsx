import clsx from "clsx";
import { useState } from "react";
import { User } from "../../types/user.types";

interface Props {
	className?: string;
	user: User;
}

function User(props: Props) {
	const splitName = props.user.name.split(" ");
	const [isHovering, setIsHovering] = useState<boolean>(false);

	return (
		<div
			className={clsx("flex flex-col items-center relative", props.className)}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			{props.user.imageUrl ? (
				<img src={props.user.imageUrl} alt="Missing image" className="w-9 h-9 rounded-lg shadow-xl" />
			) : (
				<p className="w-9 h-9 rounded-lg shadow-xl bg-dark-800 flex items-center justify-center">
					{splitName[0].charAt(0)}
					{splitName.length > 1 && splitName[1].charAt(0)}
				</p>
			)}
			{isHovering && (
				<div className="absolute mx-auto top-12 left-1/2 -translate-x-1/2 min-w-max bg-dark-800 p-2 z-50 rounded-lg tooltip-arrow">
					<p>{props.user.name}</p>
				</div>
			)}
		</div>
	);
}

export default User;
