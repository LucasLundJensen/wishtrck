import { Response, Request, NextFunction } from "express";
import passport from "passport";

export async function login(req: Request, res: Response, next: NextFunction) {
	passport.authenticate("local", (err, user, info) => {
		// Check if the user is found and the username & password was correct
		if (!user) {
			return res.status(400).json({
				message: info ? info.message : "Email address or password was incorrect.",
			});
		}

		// Check for errors
		if (err) {
			console.warn(err);
			return res.status(400).json({
				message: info ? info.message : "Critical error in logging you in, please contact us!.",
			});
		}

		// Check if the user is active
		if (user.active === false) {
			return res.status(403).json({ message: "User is not active" });
		}

		req.login(user, { session: false }, async (error) => {
			if (error) {
				return res.status(400).json({ message: error });
			}

			const userTokensResponse = await createUserTokens(user.id);

			if (userTokensResponse.status === Status.Created) {
				// Set cookie header
				res.cookie("refreshToken", userTokensResponse.refreshToken, {
					httpOnly: true,
					maxAge: 172800000, // This is technically two days in MS, but it correlates to one?
					secure: config.NODE_ENV === "production" ? true : false,
				});

				return res
					.status(200)
					.json({
						userId: user.id,
						accessToken: "Bearer " + userTokensResponse.accessToken,
						refreshToken: userTokensResponse.refreshToken,
					})
					.end();
			} else {
				return res
					.status(500)
					.json({ status: Status.NotFound, message: "Failed creating tokens for user" })
					.end();
			}
		});
	})(req, res, next);
}
