const express = require("express");
const router = express.Router();
const employeeController = require("../Controller/EmployeeController")

router.get("/", employeeController.FindAll);
router.get("/:id", employeeController.FindById);
router.post("/", employeeController.Create);
router.put("/:id", employeeController.Update);
router.delete("/:id", employeeController.Delete);

module.exports = router;