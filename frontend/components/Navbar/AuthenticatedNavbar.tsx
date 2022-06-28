import { useState } from "react";
import Button from "../Button/Button";
import Divider from "../Divider";
import Dropdown from "../Dropdown/Dropdown";
import Person from "../Profile/Person";
import Link from "next/link";
import NotificationBell from "../Notification/NotificationBell";
import UserButton from "./UserButton";

export interface User {
	name: string;
	administrator: boolean;
}

const users: User[] = [
	{
		name: "Lucas",
		administrator: true,
	},
	{
		name: "Miriam",
		administrator: true,
	},
	{
		name: "PenPen",
		administrator: false,
	},
	{
		name: "Badro",
		administrator: false,
	},
	{
		name: "Shally",
		administrator: false,
	},
	{
		name: "Vegan",
		administrator: false,
	},
];

function AuthenticatedNavbar() {
	const [selected, setSelected] = useState<User>(users[0]);

	function handleUserChange(user: User) {
		setSelected(user);
	}

	return (
		<div className="bg-dark-900 p-4 flex flex-row items-center justify-between text-white border-b border-dark-400">
			<div className="flex flex-row items-center">
				<Link href="/dashboard">
					<a className="text-lg font-semibold mr-4">Wishlist Tracker</a>
				</Link>
				<div className="flex flex-row items-center">
					{/* <Dropdown text={selected.name}>
						<div className="bg-dark-500 w-56 rounded-xl border border-dark-400 p-2">
							{users.map((user, index) => {
								return (
									<Person
										key={index}
										onUserClick={handleUserChange}
										user={user}
										selected={user === selected}
										className="w-full"
									/>
								);
							})}
							<Divider className="my-3" />
							<Button text="Add Person" />
							<Button className="mt-3" text="Switch Group" />
						</div>
					</Dropdown> */}
				</div>
			</div>
			<div className="flex flex-row items-center">
				<NotificationBell hasNotifications={true} />
				<UserButton />
			</div>
		</div>
	);
}

export default AuthenticatedNavbar;
