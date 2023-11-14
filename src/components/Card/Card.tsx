import { FC } from "react";

import content from "../../assets/Content.jpg";

import styles from "./Card.module.scss";
import { Button } from "antd";

export const Card: FC = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={content} alt="content" />
      <div className={styles.cardContent}>
        <div className={styles.cardContentMain}>
          <h2 className={styles.cardContentMainTitle}>DJI Air 3</h2>
          <div className={styles.cardContentMainPrice}>
            <span className={styles.cardContentMainPriceLeft}>Price:</span>
            <span className={styles.cardContentMainPriceRight}>$1,549</span>
          </div>
        </div>
        <Button className={styles.cardContentBtn} type="primary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
