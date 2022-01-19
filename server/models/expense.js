import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  price: Number,
  title: String,
  type: String,
  payee: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
