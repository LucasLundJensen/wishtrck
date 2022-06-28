import Link from "next/link";
import { useState } from "react";
import Divider from "../Divider";
import { CogIcon, GroupIcon, OpenLockIcon } from "../Icons";

function UserButton() {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<div className="relative">
			<button
				onClick={() => setVisible(!visible)}
				className="flex justify-center items-center hover:bg-dark-400 p-2 rounded-lg"
			>
				<div className="flex justify-center items-center w-7 h-7 rounded-full bg-purple-600">
					<p className="font-semibold">L</p>
				</div>
			</button>
			{visible && (
				<div className="absolute w-max px-3 py-2 top-[3.2rem] shadow-md right-0 bg-dark-500 border border-dark-400 rounded-lg">
					<Link href="/profile">
						<a className="flex flex-row items-center">
							<div className="flex justify-center items-center w-11 h-11 rounded-full bg-purple-600">
								<p className="font-semibold text-xl">L</p>
							</div>
							<div className="flex flex-col ml-2">
								<p className="text-lg">Lucas Lund Jensen</p>
								<p className="text-dark-200 text-sm">View profile</p>
							</div>
						</a>
					</Link>
					<Divider className="mt-4 mb-2" />
					<ul>
						<li>
							<Link href="/settings">
								<a className="flex flex-row items-center py-2 px-3 hover:bg-dark-400 rounded-lg">
									<CogIcon className="w-6 h-6 mr-2" />
									Account Settings
								</a>
							</Link>
						</li>
						<li>
							<Link href="/settings">
								<a className="flex flex-row items-center py-2 px-3 hover:bg-dark-400 rounded-lg">
									<GroupIcon className="w-6 h-6 mr-2" />
									Groups
								</a>
							</Link>
						</li>
						<li>
							<Divider className="my-2" />
						</li>
						<li>
							<Link href="/logout">
								<a className="flex flex-row items-center py-2 px-3 hover:bg-dark-400 rounded-lg">
									<OpenLockIcon className="w-6 h-6 mr-2" />
									Sign Out
								</a>
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default UserButton;
