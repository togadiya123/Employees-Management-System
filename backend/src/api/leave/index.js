import express from "express";

import leave from "./controller.js";

const leaveRouter = express.Router();

leaveRouter.route(`/getLeavesList`).post(leave.getLeavesList);
leaveRouter.route(`/getLeavesList/:taskId`).post(leave.getLeavesList);
leaveRouter.route(`/applyToLeave`).post(leave.applyToLeave);
leaveRouter.route(`/cancelLeave`).post(leave.cancelLeave);
leaveRouter.route(`/editLeave`).post(leave.editLeave);
leaveRouter.route(`/approveLeave`).post(leave.approveLeave);
leaveRouter.route(`/rejectLeave`).post(leave.rejectLeave);

export default leaveRouter;