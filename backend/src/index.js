require("./mongoDB");
const app = require("./server");
const config = require("./config/index");

app.listen(config.port,()=>{
    console.log(`Server Started on Port ${config.port}`);
});