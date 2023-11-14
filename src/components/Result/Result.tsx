import { FC } from "react";

import swap from "../../assets/icon/Swap.svg";
import arrow from "../../assets/icon/Arrow.svg";
import close from "../../assets/icon/Close.svg";

import styles from "./Result.module.scss";

export const Result: FC = () => {
  return (
    <div className={styles.result}>
      <div className={styles.resultHeader}>
        <h2 className={styles.resultHeaderNumber}>12 results</h2>
        <button className={styles.resultHeaderSort}>
          <img className={styles.resultSortSwap} src={swap} alt="swap" />
          <span className={styles.resultSortTitle}>Sort by newest</span>
          <img className={styles.resultSortArrow} src={arrow} alt="arrow" />
        </button>
      </div>
      <div className={styles.resultMain}>
        <div className={styles.resultMainPrice}>$400-$1500</div>
        <button className={styles.resultMainBtn}>
          <img src={close} alt="close" />
        </button>
      </div>
    </div>
  );
};
