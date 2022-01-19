import { combineReducers } from "redux";
import expenseReducer from "./expense";
import incomeReducer from "./income";

const rootReducer = combineReducers({
  incomes: incomeReducer,
  expenses: expenseReducer,
});

export default rootReducer;
