const mongoose = require("mongoose");

const config = require("./config/index");

mongoose.connect(config.db.url, { useNewUrlParser: true,  })
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
});
