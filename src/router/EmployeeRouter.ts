import express from "express";
const router = express.Router();
import employeeController from "../Controller/EmployeeController";

router.get("/", employeeController.FindAll);
router.get("/:id", employeeController.FindById);
router.post("/", employeeController.Create);
router.put("/:id", employeeController.Update);
router.delete("/:id", employeeController.Delete);

export default router;