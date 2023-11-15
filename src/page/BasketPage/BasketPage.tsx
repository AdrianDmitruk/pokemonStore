import { FC } from "react";

import styles from "./BasketPage.module.scss";

import cn from "classnames";

import balloon from "../../assets/balloon.png";
import { Button } from "antd";
import { BasketCard, Summary } from "../../components";

export const BasketPage: FC = () => {
  const bool = true;

  return (
    <div
      className={cn(styles.basketNot, {
        [styles.basket]: bool,
      })}
    >
      {!bool && (
        <div className={styles.basketNotBlock}>
          <img src={balloon} alt="balloon" />
          <h2 className={styles.basketNotTitle}>
            Oops, there's nothing here yet!
          </h2>
          <p className={styles.basketNotSubtitle}>
            You haven't made any purchases yet. Go to the marketplace and make
            purchases.
          </p>
          <Button className={styles.basketNotBtn} type="primary">
            Go to Marketplace
          </Button>
        </div>
      )}

      {bool && (
        <div className={styles.basketWrap}>
          <div className={styles.basketLeft}>
            <h2 className={styles.basketTitle}>My cart</h2>
            <div className={styles.basketLeftItem}>
              <BasketCard />
              <BasketCard />
              <BasketCard />
            </div>
          </div>
          <div className={styles.basketRight}>
            <Summary />
          </div>
        </div>
      )}
    </div>
  );
};
