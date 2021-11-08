import "./mongoDB.js";
import app from "./server.js";
import config from "./config/index.js";

app.listen(config.port,()=>{
    console.log(`Server Started on Port ${config.port}`);
});