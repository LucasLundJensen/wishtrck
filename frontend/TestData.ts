import { Event, EventType } from "./types/event.types";
import { RecipientUser, User } from "./types/user.types";

export const sixMembers: User[] = [
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

export const oneReciever: RecipientUser[] = [
	{
		name: "Lucas",
		administrator: true,
		wishes: [
			{
				name: "Logitech MX Keys Advanced",
				link: "https://www.komplett.dk/product/1205636/hardware/tilbehoer/mus-keyboards/keyboards/logitech-mx-keys-plus-advanced",
			},
		],
	},
];

export const TestChristmasEvent: Event = {
	id: 1,
	name: "Christmas 2022",
	type: EventType.Holiday,
	members: sixMembers,
	recievers: oneReciever,
	description: "Christmas is coming! It's time to celebrate, with gifts!",
};

export const TestBirthdayEvent: Event = {
	id: 2,
	name: "Miriam's Birthday 2022",
	type: EventType.Birthday,
	members: [
		{
			name: "Lucas",
			administrator: true,
		},
		{
			name: "Shally",
			administrator: false,
		},
		{
			name: "PenPen",
			administrator: false,
		},
	],
	recievers: [
		{
			name: "Miriam Fosmark Haugland",
			administrator: false,
			imageUrl:
				"https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/62221476_10211023186574993_5463030948327063552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bYzWAuH8cP4AX-2eLe1&_nc_ht=scontent-cph2-1.xx&oh=00_AT8Iq-rd6GLXbJbRBKb6_lD7N8Ze1BzX3W1RH85f7PWNNw&oe=62DAF31B",
			wishes: [
				{
					link: "https://google.com/",
					name: "RTX 3090",
				},
			],
		},
		{
			name: "Lucas Lund Jensen",
			administrator: false,
			imageUrl:
				"https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/62221476_10211023186574993_5463030948327063552_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bYzWAuH8cP4AX-2eLe1&_nc_ht=scontent-cph2-1.xx&oh=00_AT8Iq-rd6GLXbJbRBKb6_lD7N8Ze1BzX3W1RH85f7PWNNw&oe=62DAF31B",
			wishes: [
				{
					link: "https://google.com/",
					name: "RTX 3090",
				},
			],
		},
	],
	description: "In light of Mira's birthday, let's find some presents!",
};
