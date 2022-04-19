import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Typography className={styles.heading} variant="h2">
      Xpenser- Expense Tracker
    </Typography>
  );
};

export default Header;
