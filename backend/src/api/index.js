import express from "express";

import {verifyToken} from "../middlewares/index.js";
import authRouter from "./auth/index.js";
import userRouter from "./user/index.js";

const router = express.Router();

router.use("/auth",authRouter);
router.use("/user", verifyToken, userRouter);

export default router;