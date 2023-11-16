import { FC } from "react";

import plus from "../../assets/icon/Add.svg";
import content from "../../assets/Content3.jpg";

import styles from "./ProductsItem.module.scss";

interface ProductsItmeProps {
  add?: boolean;
}

export const ProductsItem: FC<ProductsItmeProps> = ({ add }) => {
  const addProducts = (
    <div className={styles.add}>
      <div className={styles.addMain}>
        <div className={styles.addMainPlus}>
          <img src={plus} alt="plus" />
        </div>
        <div className={styles.addMainTitle}>New Product</div>
      </div>
    </div>
  );

  const products = (
    <div className={styles.products}>
      <img className={styles.productsImg} src={content} alt="content" />
      <div className={styles.productsWrap}>
        <h3 className={styles.productsTitle}>DJI Mini 3 Pro (DJI RC)</h3>
        <div className={styles.productsFooter}>
          <span className={styles.productsTotal}>Price:</span>
          <span className={styles.productsPrice}>$1158</span>
        </div>
      </div>
    </div>
  );

  return <>{add ? addProducts : products}</>;
};
