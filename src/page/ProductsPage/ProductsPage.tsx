import { FC } from "react";

import styles from "./ProductsPage.module.scss";
import { ProductsItem } from "../../components";

export const ProductsPage: FC = () => {
  return (
    <div className={styles.products}>
      <h2 className={styles.productsTitle}>Your Products</h2>
      <div className={styles.productsItem}>
        <ProductsItem add />
        <ProductsItem />
      </div>
    </div>
  );
};
