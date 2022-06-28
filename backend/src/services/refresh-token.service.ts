import { PrismaClient, Prisma, RefreshTokens } from "@prisma/client";
import { APIResponse, Status } from "../types/api.types";
import db from "../prisma";

export async function insertRefreshToken(data: Prisma.RefreshTokensCreateInput): Promise<APIResponse> {
	try {
		const refreshToken: RefreshTokens = await db.refreshTokens.create({ data });

		if (!refreshToken) {
			return {
				data: null,
				status: Status.CreationFailed,
			};
		}

		return {
			data: refreshToken,
			status: Status.Created,
		};
	} catch (error) {
		console.log(error);
		return {
			data: null,
			status: Status.CreationFailed,
		};
	}
}

export async function getValidUserToken(userId: number): Promise<APIResponse> {
	try {
		const refreshToken = await db.refreshTokens.findFirst({
			where: {
				userId,
				createdAt: {
					// lt: moment().add(1, "year").toDate(),
				},
			},
		});

		if (!refreshToken) {
			return {
				data: null,
				status: Status.NotFound,
			};
		}

		return {
			data: refreshToken,
			status: Status.Found,
		};
	} catch (error) {
		console.log(error);
		return {
			data: null,
			status: Status.FetchingFailed,
		};
	}
}

/**
 * Service for getting refresh token from the database
 * @param refreshToken refresh token
 */
export async function getRefreshToken(refreshToken: string): Promise<APIResponse> {
	try {
		// Attempt to find the refresh token
		const existingRefreshToken = await db.refreshTokens.findUnique({ where: { token: refreshToken } });

		if (!existingRefreshToken) {
			return {
				data: null,
				status: Status.NotFound,
			};
		}

		return {
			data: existingRefreshToken,
			status: Status.Found,
		};
	} catch (error) {
		console.warn("[Service] getRefreshToken failed", error);
		return {
			data: null,
			status: Status.FetchingFailed,
		};
	}
}

/**
 * Service for deleting existing token
 * @param refreshToken The token we want to delete
 */
export async function deleteRefreshToken(refreshToken: string): Promise<Status> {
	try {
		const deleteToken = await db.refreshTokens.delete({ where: { token: refreshToken } });

		if (!deleteToken) {
			return Status.DeletionFailed;
		}

		return Status.Deleted;
	} catch (error) {
		console.warn("[Service] deleteRefreshToken failed", error);
		return Status.DeletionFailed;
	}
}
