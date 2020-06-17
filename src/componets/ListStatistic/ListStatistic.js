import React from "react";
import styles from "./ListStatisctic.module.css";
const Liststatistic = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
};

export default Liststatistic;
