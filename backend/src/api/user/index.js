import express from "express";

import user from "./controller.js";

const userRouter = express.Router();

userRouter.route(`/getUserInfo`).get(user.getUserInfo);
userRouter.route(`/updateUserInfo`).patch(user.updateUserInfo);
userRouter.route(`/logOut`).get(user.logOut);
userRouter.route(`/getUsersList`).post(user.getUsersList);
userRouter.route(`/getAllEmployeeListForChat`).get(user.getAllEmployeeListForChat);
userRouter.route(`/getEmployeeInfo`).post(user.getEmployeeInfo);

export default userRouter;