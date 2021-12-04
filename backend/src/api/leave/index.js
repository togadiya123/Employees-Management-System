import express from "express";

import leave from "./controller.js";

const leaveRouter = express.Router();

leaveRouter.route(`/getLeave`).post(leave.applyToLeave);
leaveRouter.route(`/applyToLeave`).post(leave.applyToLeave);

export default leaveRouter;