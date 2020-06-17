import React from "react";
import ListStatistic from "../ListStatistic/ListStatistic";
import styles from "./statistic.module.css";
const Statistics = ({ data }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.h2}>Upload stats</h2>
      <ul className={styles.statList}>
        {data.map((dt) => (
          <ListStatistic
            key={dt.id}
            label={dt.label}
            percentage={dt.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
