import express from "express";

import auth from "./controller.js";

const authRouter = express.Router();

authRouter.route(`/register`).post(auth.register);
authRouter.route(`/logIn`).post(auth.logIn);

export default authRouter;