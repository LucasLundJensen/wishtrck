import { APIResponse, Status } from "../types/api.types";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import db from "../prisma";

export async function createUser(data: Prisma.UserCreateInput): Promise<APIResponse> {
	try {
		const userExists = await db.user.findFirst({
			where: {
				email: data.email,
			},
		});

		if (userExists) {
			return {
				data: null,
				status: Status.AlreadyExists,
				message: "Account with that email already exists",
			};
		}

		// Hash password
		data.password = await bcrypt.hash(data.password, 10);

		const newUser = await db.user.create({
			data,
			select: {
				email: true,
				firstName: true,
				id: true,
				lastName: true,
				password: false, // don't include password in return query
			},
		});

		if (!newUser) {
			return {
				data: null,
				message: "Error creating account",
				status: Status.CreationFailed,
			};
		}

		return {
			data: newUser,
			status: Status.Created,
			message: "Account has been created",
		};
	} catch (error) {
		console.error("Account creation failed", error);
		return {
			data: null,
			status: Status.CreationFailed,
			message: "Account creation critically failed.",
		};
	}
}

export async function deleteUserById(userId: string | number): Promise<APIResponse> {
	try {
		const userExists = await db.user.findUnique({
			where: {
				id: +userId,
			},
		});

		if (!userExists) {
			return {
				data: null,
				message: "Account does not exist.",
				status: Status.FetchingFailed,
			};
		}

		const deletedUser = await db.user.delete({
			where: {
				id: +userId,
			},
			select: {
				email: true,
				firstName: true,
				id: true,
				lastName: true,
				password: false,
			},
		});

		if (!deletedUser) {
			return {
				data: null,
				message: "Account deletion failed.",
				status: Status.DeletionFailed,
			};
		}

		return {
			data: deletedUser,
			message: "Account has been deleted.",
			status: Status.Deleted,
		};
	} catch (error) {
		console.error("Account deletion failed", error);
		return {
			data: null,
			message: "Account deletion critically failed.",
			status: Status.DeletionFailed,
		};
	}
}

export async function getUserById(userId: number | string, unsafe?: boolean): Promise<APIResponse> {
	try {
		const user = await db.user.findUnique({
			where: {
				id: +userId,
			},
			select: {
				email: true,
				firstName: true,
				id: true,
				lastName: true,
				password: unsafe ?? false,
			},
		});

		if (!user) {
			return {
				data: null,
				message: "No account with that ID found.",
				status: Status.FetchingFailed,
			};
		}

		return {
			data: user,
			message: "Account found",
			status: Status.Fetched,
		};
	} catch (error) {
		console.error("Getting acount information failed.", error);
		return {
			data: null,
			message: "Getting account information failed.",
			status: Status.FetchingFailed,
		};
	}
}

export async function getUserByEmail(email: string, unsafe?: boolean): Promise<APIResponse> {
	try {
		const user = await db.user.findUnique({
			where: {
				email,
			},
			select: {
				email: true,
				firstName: true,
				id: true,
				lastName: true,
				password: unsafe ?? false,
			},
		});

		if (!user) {
			return {
				data: null,
				message: "Could not find account by that email.",
				status: Status.NotFound,
			};
		}

		return {
			data: user,
			message: "Account found",
			status: Status.Found,
		};
	} catch (error) {
		console.error("Getting account by email failed", error);
		return {
			data: null,
			message: "Getting account by email failed",
			status: Status.FetchingFailed,
		};
	}
}
