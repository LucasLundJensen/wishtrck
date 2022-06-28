import { useState } from "react";
import { BellIcon } from "../Icons";

interface Props {
	hasNotifications: boolean;
	className?: string;
}

function NotificationBell(props: Props) {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<div className="relative">
			<button onClick={() => setVisible(!visible)} className="relative hover:bg-dark-400 p-2 rounded-lg">
				<BellIcon className="h-6 w-6 text-dark-100" />
				{props.hasNotifications && (
					<div className="absolute bottom-1 right-1 flex items-center justify-center bg-blue-primary text-white rounded-full p-1.5"></div>
				)}
			</button>
			{visible && (
				<div className="absolute w-max top-12 rounded-lg shadow-md right-0 px-6 py-3 bg-dark-500 border border-dark-400">
					<div className="flex flex-row items-center justify-between mb-4">
						<h2 className="text-xl font-medium mr-40">Notifications</h2>
					</div>
				</div>
			)}
		</div>
	);
}

export default NotificationBell;
