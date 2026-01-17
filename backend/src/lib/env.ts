import { config } from "dotenv";

config({ quiet: true });

const REQUIRED_ENV_VARIABLES = ["MONGO_URL", "JWT_SECRET", "PORT", "CLIENT_URL", "NODE_ENV"];
for (const key of REQUIRED_ENV_VARIABLES) {
    if (!process.env[key]) {
        console.error(`Missing environment variable: ${key}`);
        process.exit(1);
    }
}
interface IEnv {
    PORT: string,
    MONGO_URL: string,
    JWT_SECRET: string,
    CLIENT_URL: string,
    NODE_ENV: string
}
export const ENV = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    CLIENT_URL: process.env.CLIENT_URL,
    NODE_ENV: process.env.NODE_ENV
}