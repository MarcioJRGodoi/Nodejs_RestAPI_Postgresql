import express from "express";
const router = express.Router();
import clientController from "../Controller/ClientController";

router.get("/", clientController.FindAll);
router.get("/:id", clientController.FindById);
router.post("/", clientController.Create);
router.put("/:id", clientController.Update);
router.delete("/:id", clientController.Delete);

export default router;