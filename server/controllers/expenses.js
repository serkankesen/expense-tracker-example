import Expense from "../models/expense.js";

export const getExpense = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getSingleExpense = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const expense = await Expense.findById(_id);
    res.status(200).json(expense);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createExpense = async (req, res) => {
  const expense = req.body;
  const newExpense = new Expense(expense);
  try {
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updateExpense = async (req, res) => {
  const { id: _id } = req.params;
  const expense = req.body;
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(_id, expense, {
      new: true,
    });
    res.json(updatedExpense);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const deleteExpense = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedExpense = await Expense.findByIdAndRemove(_id);
    res.json(deletedExpense);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
