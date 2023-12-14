const express = require("express");
const router = express.Router();
const clientController = require("../Controller/ClientController");

router.get("/", clientController.FindAll);
router.get("/:id", clientController.FindById);
router.post("/", clientController.Create);
router.put("/:id", clientController.Update);
router.delete("/:id", clientController.Delete);

module.exports = router;