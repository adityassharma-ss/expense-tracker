import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styles from "./TransactionList.module.css";
import { Transaction } from "../Transaction/Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <h3>Transactions</h3>
      <div className={styles.underLine}></div>
      <ul id="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
