import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'nohayplanetaB10!';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'miBaseDeDatos';
export const DB__PORT = process.env.DB__PORT || 3306;