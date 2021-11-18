import dotenv from "dotenv";

dotenv.config();


const config = {
    BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://localhost:8080/",
    // BACKEND_BASE_API_URL: process.env.BACKEND_BASE_API_URL || "http://192.168.43.168:8080/",
    APPLICATION_NAME: process.env.APPLICATION_NAME || "Alix",
};

// console.log("config", config);
// console.log("process", process);

export default config;