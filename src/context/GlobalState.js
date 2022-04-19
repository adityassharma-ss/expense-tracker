import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State of the items
let expenses;
if (localStorage.getItem("expenses") === null) {
  expenses = [];
} else {
  expenses = JSON.parse(localStorage.getItem("expenses"));
}

const initialState = {
  transactions: [...expenses],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
    const expenseIndex = expenses.indexOf(id);
    expenses.splice(expenseIndex, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    console.log(expenseIndex);
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
    expenses.push(transaction);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    console.log(expenses);
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
