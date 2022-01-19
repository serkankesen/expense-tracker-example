import * as types from "../actions/types";

const initialState = {
  incomes: [],
  currentPost: null,
};

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INCOMES:
      return {
        ...state,
        incomes: action.payload,
      };

    case types.CREATE_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default incomeReducer;
