require("dotenv").config();

const config = {
    db: {
        url: process.env.PLATFORM_DB_URL
    },
    port: process.env.PLATFORM_PORT,
};

module.exports = config;