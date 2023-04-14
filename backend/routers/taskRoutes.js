import express from "express";
import {
  createTask,
  updateTask,
  getTasks,
  deleteTask,
  toggleDone,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggle", toggleDone);

export default router;
