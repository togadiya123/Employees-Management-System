import express from "express";

import user from "./controller.js";

const userRouter = express.Router();

userRouter.route(`/getUserInfo`).get(user.getUserInfo);

export default userRouter;