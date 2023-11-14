import { FC } from "react";

import { Input } from "antd";

import reset from "../../assets/icon/Reset.svg";

import styles from "./Filters.module.scss";

export const Filters: FC = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filtersHeader}>
        <h3 className={styles.filtersHeaderTitle}>Filters</h3>
        <button className={styles.filtersHeaderBtn}>
          Reset All <img src={reset} alt="reset" />
        </button>
      </div>

      <div className={styles.filtersMain}>
        <h3 className={styles.filtersMainTitle}>Price</h3>
        <div className={styles.filtersMainStep}>
          <Input
            size="large"
            className={styles.filtersMainStepInput}
            prefix={<span className={styles.filtersMainStepPrefix}>From:</span>}
          />
          <Input
            size="large"
            className={styles.filtersMainStepInput}
            prefix={<span className={styles.filtersMainStepPrefix}>To:</span>}
          />
        </div>
      </div>
    </div>
  );
};
