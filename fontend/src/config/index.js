import dotenv from "dotenv";

dotenv.config();


const config = {
    BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://localhost:8080/",
    // BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://192.168.208.168:8080/",
    // BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://192.168.43.168:8080/",
    // BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://192.168.43.99:8080/",
    // BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://192.168.0.184:8080/",
    // BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://192.168.57.168:8080/",
    // BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://192.168.15.168:8080/",
    APPLICATION_NAME: process.env.APPLICATION_NAME || "BVM",
    POSITION_TYPE_I: process.env.POSITION_TYPE_I || "Admin",
    POSITION_TYPE_II: process.env.POSITION_TYPE_II || "User",

    DEFAULT_DATE_FORMAT: process.env.DEFAULT_DATE_FORMAT || `YYYY-MM-DDTHH:mm`,
    REGULAR_DATE_TIME_FORMAT: process.env.REGULAR_DATE_TIME_FORMAT || `DD-MM-YYYY HH:mm:ss`,
    REGULAR_DATE_FORMAT: process.env.REGULAR_DATE_FORMAT || `DD-MM-YYYY`,
};

// console.log("config", config);
// console.log("process", process.env);

export default config;