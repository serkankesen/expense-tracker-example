import express from "express";
import {
  getIncome,
  createIncome,
  updateIncome,
  deleteIncome,
  getSingleIncome,
} from "../controllers/Incomes.js";
const router = express.Router();

router.get("/", getIncome);
router.get("/:id", getSingleIncome);
router.post("/", createIncome);
router.patch("/:id", updateIncome);
router.delete("/:id", deleteIncome);

export default router;
