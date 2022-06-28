import { Router } from "express";
import passport from "passport";
import * as UserController from "../controllers/user.controller";

const router = Router();

router.get("/:id", UserController.getUserById);

router.post("/create", UserController.createUser);

export default router;
