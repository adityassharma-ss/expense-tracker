import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import styles from "./AddTransaction.module.css";
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmount(0);
    setText("");
  };

  return (
    <div className={styles.container}>
      <h3>Add Transaction</h3>
      <div className={styles.underLine}></div>
      <form
        className={styles.formControl}
        id="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <div className={styles.part1}>
          <h4>Description</h4>
          <TextField
            required
            id="text-field-desc"
            className={styles.input}
            label="Enter Description"
            type="text"
            variant="outlined"
            size="small"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className={styles.part2}>
          <h4>Amount</h4>
          <h4>(use '-' for debit and '+' for credit, ex. +200 )</h4>
          <TextField
            required
            id="text-field-amt"
            className={styles.input}
            label="Enter Amount"
            variant="outlined"
            size="small"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <Button
          className={styles.submitBtn}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Add Transaction
        </Button>
      </form>
    </div>
  );
};

export default AddTransaction;
