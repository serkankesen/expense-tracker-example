import express from "express";
import {
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
  getSingleExpense,
} from "../controllers/Expenses.js";
const router = express.Router();

router.get("/", getExpense);
router.get("/:id", getSingleExpense);
router.post("/", createExpense);
router.patch("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;
