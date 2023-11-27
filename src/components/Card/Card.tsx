import { FC } from "react";

import styles from "./Card.module.scss";
import { Products } from "../../redux/products/types";
import { Link } from "react-router-dom";
import { ButtonCart } from "..";

export interface CardProps {
  elem: Products;
}

export const Card: FC<CardProps> = (elem) => {
  const { name, price, image } = elem.elem;
  return (
    <Link to={"/sad"} className={styles.card}>
      <img className={styles.cardImg} src={image} alt="content" />
      <div className={styles.cardContent}>
        <div className={styles.cardContentMain}>
          <h2 className={styles.cardContentMainTitle}>{name}</h2>
          <div className={styles.cardContentMainPrice}>
            <span className={styles.cardContentMainPriceLeft}>Price:</span>
            <span className={styles.cardContentMainPriceRight}>${price}</span>
          </div>
        </div>
        <ButtonCart elem={elem.elem} />
      </div>
    </Link>
  );
};
