import { Status } from "../types/api.types";
import { sign } from "jsonwebtoken";
import config from "../config";

interface UserTokensResponse {
	accessToken: string;
	refreshToken: string;
	status: Status;
}

export async function createUserTokens(userId: number, options?: object): Promise<UserTokensResponse> {
	let refreshToken;
	// Sign tokens
	const accessToken = signToken(userId, config.SECRET, Math.floor(Date.now() / 1000) + 60 * 15);

	// Attempt to find existing refreshtoken from the database
	const existingRefreshToken = await RefreshTokenServices.getValidUserToken(userId);

	if (existingRefreshToken.status === Status.Found) {
		console.log(existingRefreshToken);
		refreshToken = existingRefreshToken.refreshToken.token;
	} else {
		refreshToken = signToken(userId, config.REFRESH_SECRET, Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365);

		const refreshTokenObject: any = { token: refreshToken, userId };

		// Insert token into the table
		const response = await RefreshTokenServices.insertRefreshToken(refreshTokenObject);
		if (response.status !== Status.Created) {
			return { accessToken: null, refreshToken: null, status: Status.CreationFailed };
		}
	}

	const userTokens: UserTokensResponse = { accessToken, refreshToken, status: Status.Created };
	return userTokens;
}

export function signToken(userId: number, secret: string, exp: number): string {
	return sign(
		{
			iss: config.ISS,
			sub: userId,
			exp,
		},
		secret
	);
}
