import express from "express";

import leave from "./controller.js";

const leaveRouter = express.Router();

leaveRouter.route(`/getLeavesList`).post(leave.getLeavesList);
leaveRouter.route(`/getLeavesList/:taskId`).post(leave.getLeavesList);
leaveRouter.route(`/applyToLeave`).post(leave.applyToLeave);

export default leaveRouter;