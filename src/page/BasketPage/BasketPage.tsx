import { FC } from "react";

import styles from "./BasketPage.module.scss";

import cn from "classnames";

import balloon from "../../assets/balloon.png";
import { Button, Spin } from "antd";
import { BasketCard, Summary } from "../../components";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { Status } from "../../redux/cart/types";

export const BasketPage: FC = () => {
  const { cartInfo, status } = useCart();

  const navigate = useNavigate();

  if (status === Status.LOADING) {
    return (
      <div className="load">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div
      className={cn(styles.basketNot, {
        [styles.basket]: cartInfo.quantity,
      })}
    >
      {cartInfo.quantity === 0 && (
        <div className={styles.basketNotBlock}>
          <img src={balloon} alt="balloon" />
          <h2 className={styles.basketNotTitle}>
            Oops, there's nothing here yet!
          </h2>
          <p className={styles.basketNotSubtitle}>
            You haven't made any purchases yet. Go to the marketplace and make
            purchases.
          </p>
          <Button
            onClick={() => navigate("/")}
            className={styles.basketNotBtn}
            type="primary"
          >
            Go to Marketplace
          </Button>
        </div>
      )}

      {!!cartInfo.quantity && (
        <div className={styles.basketWrap}>
          <div className={styles.basketLeft}>
            <h2 className={styles.basketTitle}>My cart</h2>
            <div className={styles.basketLeftItem}>
              {cartInfo.itemsList.map((item) => (
                <BasketCard key={item.id} elem={item} />
              ))}
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
