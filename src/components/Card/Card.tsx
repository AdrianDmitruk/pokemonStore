import { FC } from "react";

import styles from "./Card.module.scss";
import { Button } from "antd";
import { Products } from "../../redux/products/types";

interface CardProps {
  elem: Products;
}

export const Card: FC<CardProps> = (elem) => {
  const { name, price, image } = elem.elem;
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={image} alt="content" />
      <div className={styles.cardContent}>
        <div className={styles.cardContentMain}>
          <h2 className={styles.cardContentMainTitle}>{name}</h2>
          <div className={styles.cardContentMainPrice}>
            <span className={styles.cardContentMainPriceLeft}>Price:</span>
            <span className={styles.cardContentMainPriceRight}>${price}</span>
          </div>
        </div>
        <Button className={styles.cardContentBtn} type="primary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
