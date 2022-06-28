import { RecipientUser, User } from "./user.types";

export interface Event {
	id: number;
	type: EventType;
	name: string;
	description?: string;
	members: User[]; // Members that are able to see the event.
	recievers: RecipientUser[]; // Members that will recieve the gift(s).
}

export enum EventType {
	Birthday,
	Holiday,
}
