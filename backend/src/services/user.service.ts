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
