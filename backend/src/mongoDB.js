import mongoose from "mongoose";

import config from "./config/index.js";

mongoose.connect(config.db.url, { useNewUrlParser: true, })
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
});
