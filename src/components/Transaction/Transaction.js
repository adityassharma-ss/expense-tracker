import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Paper, IconButton } from "@material-ui/core";
import styles from "../TransactionList/TransactionList.module.css";
import { GlobalContext } from "../../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={transaction.amount > 0 ? styles.plus : styles.minus}>
      <Paper className={styles.list} square>
        <div className={styles.textTransaction}>
          <h4 className={styles.cashHeading}>{transaction.text}</h4>
          <h4>
            {sign}₹{Math.abs(transaction.amount)}
          </h4>
        </div>
        <div className={styles.delete}>
          <IconButton
            edge="end"
            onClick={() => deleteTransaction(transaction.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </Paper>
    </li>
  );
};
