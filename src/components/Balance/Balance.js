import React, { useContext } from "react";
import styles from "./Balance.module.css";
import { Typography } from "@material-ui/core";
import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <Typography variant="subtitle1" className={styles.heading}>
        Your Balance
      </Typography>
      <Typography variant="h5" className={styles.money}>
        ₹{total}
      </Typography>
    </div>
  );
};

export default Balance;
