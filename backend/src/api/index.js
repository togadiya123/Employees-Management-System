import express from "express";

import {verifyToken} from "../middlewares/index.js";
import authRouter from "./auth/index.js";
import userRouter from "./user/index.js";
import leaveRouter from "./leave/index.js";

const router = express.Router();

router.use("/auth",authRouter);
router.use("/user", verifyToken, userRouter);
router.use("/leave", verifyToken, leaveRouter);

export default router;