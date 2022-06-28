export interface User {
	name: string;
	administrator: boolean;
	imageUrl?: string;
}

export interface RecipientUser extends User {
	wishes: Wish[];
}

export interface Wish {
	name: string;
	link: string;
}
