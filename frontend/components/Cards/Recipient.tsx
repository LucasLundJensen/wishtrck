import { useEffect, useState } from "react";
import { RecipientUser, User } from "../../types/user.types";
import Person from "../Profile/Person";

interface Props {
	user: RecipientUser;
}

function Recipient(props: Props) {
	return (
		<div className="relative">
			<Person hideBadge={true} hideSelection={true} onUserClick={() => console.log("ignore")} user={props.user} />
		</div>
	);
}

export default Recipient;
