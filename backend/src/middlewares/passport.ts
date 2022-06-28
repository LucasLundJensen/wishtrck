import bcrypt from "bcrypt";
import config from "../config";
import passport from "passport";
import { Status } from "../types/api.types";
import passportLocal from "passport-local";
import passportJwt, { ExtractJwt } from "passport-jwt";
import * as UserService from "../services/user.service";
import { User } from ".prisma/client";
// import { userLoginSchema } from "./api/v1/schemas/auth.schema";

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJwt.Strategy;

passport.use(
	new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
		// const valid = userLoginSchema.validate({ email, password });
		// if (valid.error) {
		// 	return done(null, false, { message: "Email or password missing or not up to standards" });
		// }

		try {
			const response = await UserService.getUserByEmail(email, true);
			const user = response.data as User;

			if (response.status === Status.Found) {
				// Check if the password is correct for the user
				if (bcrypt.compareSync(password, user.password)) {
					return done(null, user);
				} else {
					return done(null, false, { message: "Password was incorrect." });
				}
			} else {
				return done(null, false, { message: `Could not find account with this email.` });
			}
		} catch (error) {
			console.log(error);
			done(error, false);
		}
	})
);

/**
 * For the access token
 */
passport.use(
	"accessToken",
	new JWTStrategy(
		{
			secretOrKey: config.SECRET,
			jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
		},
		async (jwtPayload, callback) => {
			const response = await UserService.getUserById(jwtPayload.sub);
			const user = response.data as User;
			if (response.status === Status.Found) {
				return callback(null, user);
			}
			return callback(null, false);
		}
	)
);

/**
 * For the refresh token
 */
passport.use(
	new JWTStrategy(
		{
			secretOrKey: config.REFRESH_SECRET,
			jwtFromRequest: (req) => req.cookies.refreshToken,
		},
		async (jwtPayload, callback) => {
			const response = await UserService.getUserById(jwtPayload.sub);
			const user = response.data as User;
			if (response.status === Status.Found) {
				return callback(null, user);
			}
			return callback(null, false);
		}
	)
);

passport.serializeUser((user, done) => {
	if (user) done(null, user);
});

passport.deserializeUser((user: User, done) => {
	done(null, user);
});
