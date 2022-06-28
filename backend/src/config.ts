import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../", ".env") });

const config = {
	NODE_ENV: process.env.NODE_ENV || "dev",
	PORT: process.env.PORT || "3001",
	SECRET: process.env.SECRET || "wishtrackersecret",
	SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "",
	JWT_SECRET: process.env.JWT_SECRET || "wishtrackerjwtsecret",
	REFRESH_SECRET: process.env.REFRESH_SECRET || "wishtrackerrefreshsecret",
	ISS: process.env.ISS || "wishtracker",
};

export default config;
