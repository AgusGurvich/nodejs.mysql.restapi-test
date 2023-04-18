import express from 'express'
// import { pool } from './db.js';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
import './config.js';


const app = express(); 


app.use(express.json());
app.use(indexRoutes);
app.use(employeesRoutes); 

// Midlleware
app.use((req,res, next)=>{
    res.status(404).json({
        message: 'endpoint not foun'
    })
})

export default app;