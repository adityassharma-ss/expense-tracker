import React, { useContext } from "react";
import styles from "./IncomeExpense.module.css";
import { Card } from "@material-ui/core";
import { GlobalContext } from "../../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = Math.abs(
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0)
  ).toFixed(2);

  return (
    <Card className={styles.container}>
      <div className={styles.col1}>
        <h4 className={styles.title}>Income</h4>
        <h4 className={styles.moneyAdded}>+₹{income}</h4>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.col2}>
        <h4 className={styles.title}>Expense</h4>
        <h4 className={styles.moneyDeducted}>-₹{expense}</h4>
      </div>
    </Card>
  );
};

export default IncomeExpense;
