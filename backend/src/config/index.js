import dotenv from "dotenv";

dotenv.config();

const config = {
    db: {
        url: process.env.PLATFORM_DB_URL
    },
    port: process.env.PLATFORM_PORT,
    JWTSecret: process.env.JWT_SECRET,
    user: {
        profileUrl : process.env.PROFILE_DEFAULT_URL
    }
};

export default config;