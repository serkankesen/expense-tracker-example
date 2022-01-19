import Income from "../models/income.js";

export const getIncome = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getSingleIncome = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const income = await Income.findById(_id);
    res.status(200).json(income);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createIncome = async (req, res) => {
  const income = req.body;
  const newIncome = new Income(income);
  try {
    await newIncome.save();
    res.status(201).json(newIncome);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updateIncome = async (req, res) => {
  const { id: _id } = req.params;
  const income = req.body;
  try {
    const updatedIncome = await Income.findByIdAndUpdate(_id, income, {
      new: true,
    });
    res.json(updatedIncome);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const deleteIncome = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedIncome = await Income.findByIdAndRemove(_id);
    res.json(deletedIncome);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
