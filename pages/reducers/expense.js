import * as types from "../actions/types";

const initialState = {
  expenses: [],
  currentPost: null,
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };
    // case types.FETCH_SINGLE_EXPENSES:
    //   return {
    //     ...state,
    //     currentExpense: action.payload,
    //   };
    case types.CREATE_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    // case types.UPDATE_EXPENSE:
    //   return {
    //     ...state,
    //     expenses: state.expenses.map((post) => {
    //       if (post._id === action.payload._id) {
    //         return action.payload;
    //       } else {
    //         return post;
    //       }
    //     }),
    //     currentExpense: action.payload,
    //   };
    // case types.DELETE_EXPENSE:
    //   return {
    //     ...state,
    //     expenses: state.expenses.filter((post) => post._id !== action.payload),
    //     currentExpense: null,
    //   };
    default:
      return {
        ...state,
      };
  }
};

export default expenseReducer;
