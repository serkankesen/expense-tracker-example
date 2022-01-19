import * as api from "../api/index";
import * as types from "./types";

export const fetchIncomes = (url) => async (dispatch) => {
  try {
    const { data } = await api.fetch(url);
    dispatch({
      type: types.FETCH_INCOMES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createIncome = (income, url) => async (dispatch) => {
  try {
    const { data } = await api.createData(income, url);
    dispatch({
      type: types.CREATE_INCOME,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
