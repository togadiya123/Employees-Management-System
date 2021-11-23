import express from "express";

import leave from "./controller.js";

const leaveRouter = express.Router();

leaveRouter.route(`/applyToLeave`).post(leave.applyToLeave);

export default leaveRouter;