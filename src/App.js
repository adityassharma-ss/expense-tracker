import React from "react";
import {
  Header,
  Balance,
  IncomeExpense,
  TransactionList,
  AddTransaction,
} from "./components";
import { GlobalProvider } from "./context/GlobalState";
import { Paper } from "@material-ui/core";
import styles from "./App.module.css";

const App = () => {
  return (
    <GlobalProvider>
      <Paper className={styles.container}>
        <Header />
        <div className={styles.balance}>
          <Balance />
        </div>
        <div className={styles.incomeExpense}>
          <IncomeExpense />
        </div>
        <div className={styles.transactions}>
          <TransactionList />
        </div>
        <div className={styles.addTransaction}>
          <AddTransaction />
        </div>
      </Paper>
    </GlobalProvider>
  );
};

export default App;
