import dotenv from "dotenv";

dotenv.config();

const config = {
    db: {
        url: process.env.PLATFORM_DB_URL || "mongodb+srv://togadiya:togadiya@cluster0.uvacu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    },
    port: process.env.PLATFORM_PORT || 8080,
    JWTSecret: process.env.JWT_SECRET || "TY67MSC",
    user: {
        profileUrl : process.env.PROFILE_DEFAULT_URL
    }
};

export default config;