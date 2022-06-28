import clsx from "clsx";
import Link from "next/link";
import { Event } from "../../types/event.types";
import Button from "../Button/Button";
import Divider from "../Divider";
import Person from "../Profile/Person";
import User from "../Profile/User";
import Recipient from "./Recipient";

interface Props {
	event: Event;
	className?: string;
}

function EventCard(props: Props) {
	return (
		<Link href={`/dashboard/event/${props.event.id}`}>
			<a
				className={clsx(
					`flex flex-col bg-dark-500 rounded-lg shadow-md border-2 border-transparent hover:border-dark-200`,
					props.className
				)}
			>
				<div className="flex flex-row justify-between px-4 py-2">
					<div className="overflow-hidden mr-2">
						<h2 className="text-white font-medium text-lg truncate">{props.event.name}</h2>
						{props.event.description && (
							<p className="text-sm text-dark-100 truncate">{props.event.description}</p>
						)}
					</div>
				</div>
				<Divider />
				<div className="flex flex-col">
					<div className="flex flex-col px-4 py-2">
						<h2 className="text-white font-medium mb-1">
							{props.event.recievers.length > 1 ? "Recipients" : "Recipient"}
						</h2>
						<div className="grid grid-cols-6 gap-2 text-gray-100">
							{props.event.recievers.map((user, index) => {
								return <User user={user} key={index} />;
							})}
						</div>
					</div>
					<div className="flex flex-col px-4 py-2">
						<h2 className="text-white font-medium mb-1">Members</h2>
						<div className="grid grid-cols-6 gap-2 text-gray-100">
							{props.event.members.map((user, index) => {
								if (index > 5) return;
								return <User user={user} key={index} />;
							})}
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
}

export default EventCard;
