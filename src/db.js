import { createPool } from "mysql2/promise";
import {
    DB__PORT,
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} from './config.js';

export const pool = createPool({
    host: DB_HOST, 
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB__PORT,
    database: DB_DATABASE
})