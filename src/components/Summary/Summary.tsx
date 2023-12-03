import { FC } from "react";

import styles from "./Summary.module.scss";
import { Button } from "antd";
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";

export const Summary: FC = () => {
  const { cartInfo, udateOrderFromCart, isOrderLoading } = useCart();

  const { userInfo } = useUser();

  const handlePaymentClick = () => {
    const params = {
      customerId: userInfo._id,
      totalPrice: cartInfo.totalPrice,
      itemsList: cartInfo.itemsList,
    };

    udateOrderFromCart(params);
  };

  return (
    <div className={styles.summary}>
      <h2 className={styles.summaryTitle}>Summary</h2>
      <span className={styles.summaryBorder}></span>
      <div className={styles.summaryMain}>
        <span className={styles.summaryTotal}>Total price</span>
        <span className={styles.summaryPrice}>${cartInfo.totalPrice}</span>
      </div>
      <Button
        onClick={handlePaymentClick}
        className={styles.summaryBtn}
        type="primary"
        loading={isOrderLoading}
      >
        Proceed to Ckeckout
      </Button>
    </div>
  );
};
