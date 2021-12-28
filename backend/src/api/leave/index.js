import express from "express";

import leave from "./controller.js";

const leaveRouter = express.Router();

leaveRouter.route(`/getLeavesList`).post(leave.getLeavesList);
leaveRouter.route(`/getLeavesList/:taskId`).post(leave.getLeavesList);
leaveRouter.route(`/applyToLeave`).post(leave.applyToLeave);
leaveRouter.route(`/cancelLeave`).post(leave.cancelLeave);
leaveRouter.route(`/editLeave`).post(leave.cancelLeave);
leaveRouter.route(`/approveLeave`).post(leave.cancelLeave);
leaveRouter.route(`/rejectLeave`).post(leave.cancelLeave);

export default leaveRouter;