import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import http from "http";
import cors from "cors";
import config from "./config";
import UserRoutes from "./routes/user.routes";
import { deleteUserById } from "./services/user.service";
// import "./middlewares/passport";

const app = express();

const whiteListedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(cors({ credentials: true, origin: whiteListedOrigins }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

(async () => {
	// const response = await deleteUserById(2);
	// console.log(response);
})();

app.use("/api/user", UserRoutes);

const server = http.createServer(app);

export const api = server.listen(config.PORT, () => {
	console.log(`🚀 Server running on port ${config.PORT}`);
});
