import express from "express";

import user from "./controller.js";

const userRouter = express.Router();

userRouter.route(`/getUserInfo`).get(user.getUserInfo);
userRouter.route(`/logOut`).get(user.logOut);
userRouter.route(`/getAllUser`).get(user.getAllUser);

export default userRouter;