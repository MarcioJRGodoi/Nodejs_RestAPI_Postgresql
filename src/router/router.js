const express = require("express");
const router = express.Router();
const employeeRouter = require("./EmployeeRouter");
const clientRouter = require("./ClientRouter");

router.use("/client", clientRouter);
router.use("/employee", employeeRouter);


module.exports = router;