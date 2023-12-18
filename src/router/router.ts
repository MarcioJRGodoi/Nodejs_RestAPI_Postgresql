import express from "express";
const router = express.Router();
import employeeRouter from "./EmployeeRouter";
import clientRouter from "./ClientRouter";

router.use("/client", clientRouter);
router.use("/employee", employeeRouter);


export default router;