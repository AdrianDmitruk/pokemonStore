import { FC } from "react";

import styles from "./Summary.module.scss";
import { Button } from "antd";

export const Summary: FC = () => {
  return (
    <div className={styles.summary}>
      <h2 className={styles.summaryTitle}>Summary</h2>
      <span className={styles.summaryBorder}></span>
      <div className={styles.summaryMain}>
        <span className={styles.summaryTotal}>Total price</span>
        <span className={styles.summaryPrice}>$1927</span>
      </div>
      <Button className={styles.summaryBtn} type="primary">
        Proceed to Ckeckout
      </Button>
    </div>
  );
};
