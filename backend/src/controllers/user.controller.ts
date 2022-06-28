import { Request, Response } from "express";
import * as UserService from "../services/user.service";
import { getHttpCodeByStatus } from "../utils/http.utils";

export async function createUser(req: Request, res: Response) {
	const data = req.body;

	// TODO: Validate data

	const response = await UserService.createUser(data);
	res.status(getHttpCodeByStatus(response.status)).json({ message: response.message, data: response.data }).end();
}

export async function getUserById(req: Request, res: Response) {
	const response = await UserService.getUserById(req.params.id);
	res.status(getHttpCodeByStatus(response.status)).json({ message: response.message, data: response.data }).end();
}
