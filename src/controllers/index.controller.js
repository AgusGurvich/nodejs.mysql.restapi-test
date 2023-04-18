import { pool } from "../db.js";


export const pong = async (req, res)=>{
    try {
     
    const [result] = await pool.query('SELECT "pong" AS result');
    res.json(result);   
    } catch (error) {
        res.status(500).json({
            message: "lo siento bebeeee"
        })
    }
   }