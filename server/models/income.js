import mongoose from "mongoose";

const incomeSchema = mongoose.Schema({
  price: Number,
  title: String,
  type: String,
  earner: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Income = mongoose.model("Income", incomeSchema);

export default Income;
