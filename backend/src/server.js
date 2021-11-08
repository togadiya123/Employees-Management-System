import express from "express";
import cors from "cors";
import router from "./api/index.js";
import config from "./config/index.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", config.db.url);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Authorization, Accept, Access-Control-Al" +
        "low-Methods"
    );
    res.header("X-Frame-Options", "deny");
    res.header("X-Content-Type-Options", "nosniff");
    next();
}, router);


export default app;