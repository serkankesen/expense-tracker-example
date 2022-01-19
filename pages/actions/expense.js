import * as api from "../api/index";
import * as types from "./types";

export const fetchExpenses = (url) => async (dispatch) => {
  try {
    const { data } = await api.fetch(url);
    dispatch({
      type: types.FETCH_EXPENSES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const fetchSingleExpenses = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchSingleExpenses(id);
//     dispatch({
//       type: types.FETCH_SINGLE_EXPENSES,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createExpense = (expense, url) => async (dispatch) => {
  try {
    const { data } = await api.createData(expense, url);
    dispatch({
      type: types.CREATE_EXPENSE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const updateExpense = (id, expense) => async (dispatch) => {
//   try {
//     const { data } = await api.updateExpense(id, expense);

//     dispatch({ type: types.UPDATE_EXPENSE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deleteExpense = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.deleteExpense(id);
//     dispatch({
//       type: types.DELETE_EXPENSE,
//       payload: data._id,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
