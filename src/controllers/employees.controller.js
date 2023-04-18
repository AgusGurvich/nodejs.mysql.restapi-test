import { query } from "express";
import { pool } from "../db.js";

export const getEmployees = async (req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.send(rows);        
    } catch (error) {
        res.status(500).json({
            message: 'something goes wrong'
        })
    }

}

export const getEmployee = async (req,res)=>{
    try {
        const id = req.params.id;
        const [rows] = await pool.query('SELECT * FROM users WHERE id = (?)', [id]);
        
        if(rows.length <= 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        })
        res.json(rows[0]);        
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
        })
    }

}


export const postEmployees = async (req,res)=>{
    try {
        const {name, stack} = req.body;
        const [rows] = await pool.query('INSERT INTO users (name, stack) VALUES (?,?)', [name, stack]);
        res.send({
            id: rows.insertId,
            name,
            stack,
        });
            
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
    })
}}

export const putEmployees = async (req,res)=>{
    try {
        const {id} = req.params;
        const {name, stack} = req.body;
    
        const [result] = await pool.query('UPDATE users SET name = ?, stack = ? WHERE id = ?', [name, stack,id]);
        console.log(result);
        if(result.affectedRows == 0) return res.status(404).json({
            message: "User not found"
        })
     const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        res.send(rows[0]);
            
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
    }   )
    }
}

export const patchEmployees = async (req, res)=>{
    try {
     
    const {id} = req.params;
    const {name, stack} = req.body;

    const [result] = await pool.query('UPDATE users SET name = IFNULL(?, name), stack = ifnull(?, stack) WHERE id = ?', [name, stack,id]);
    console.log(result);
    if(result.affectedRows == 0) return res.status(404).json({
        message: "User not found"
    })
 const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    res.send(rows[0]);   
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
        })   
    }
}

export const deleteEmployee = async (req, res)=>{
    try {
     
    const id = req.params.id;
    const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    
    if(rows.affectedRows <= 0) return res.status(404).json({
        message: "Usuario no encontrado"
    })
   
    res.sendStatus(204);   
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong"
         } )
    }   
    }


export const eliminateEmployees = (req,res)=>{
    res.send("Eliminando empleados");
}