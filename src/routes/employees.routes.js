import { Route } from "express";
import { Router } from "express";
// import { pool } from "../db";
import { getEmployees,postEmployees, eliminateEmployees, putEmployees, patchEmployees,getEmployee, deleteEmployee} from "../controllers/employees.controller.js";

const router = Router();


router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", postEmployees);

router.put("/employees/:id", putEmployees);

router.patch("/employees/:id", patchEmployees);

router.delete("/employees/:id", deleteEmployee);

router.delete("/employees", eliminateEmployees);


export default router;