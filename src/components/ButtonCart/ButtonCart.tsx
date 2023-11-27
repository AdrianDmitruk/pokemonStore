import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

import styles from "./ButtonCart.module.scss";
import { CardProps } from "..";
import { useCart } from "../../hooks/useCart";
import { Status } from "../../redux/cart/types";

export const ButtonCart: FC<CardProps> = (elem) => {
  const { id, image, name, price } = elem.elem;

  const {
    cartInfo,
    addItemToCart,
    status,
    udateItemInCart,
    removeItemFromCart,
  } = useCart();

  const productInCart = cartInfo.itemsList.find(
    (cartItem) => cartItem.id === +id
  );

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const itemForCart = {
      id: +id,
      image,
      name,
      price,
      quantity: 1,
    };

    addItemToCart(itemForCart);
  };

  const handleUpdateItemIncrement = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (productInCart) {
      const itemForCart = {
        id: +id,
        quantity: productInCart.quantity + 1,
      };

      udateItemInCart(itemForCart);
    }
  };

  const handleUpdateItemDecrement = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (productInCart) {
      const itemForCart = {
        id: productInCart.id,
        quantity: productInCart.quantity - 1,
      };

      udateItemInCart(itemForCart);
    }
  };

  const handleRemoveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    removeItemFromCart(id);
  };

  return (
    <>
      {productInCart ? (
        <div className={styles.btnWrap}>
          <Button
            onClick={
              productInCart.quantity === 1
                ? handleRemoveItem
                : handleUpdateItemDecrement
            }
            disabled={status === Status.LOADING}
            className={styles.btn}
          >
            <MinusOutlined />
          </Button>
          <span>{productInCart.quantity}</span>
          <Button
            onClick={handleUpdateItemIncrement}
            disabled={status === Status.LOADING}
            className={styles.btn}
          >
            <PlusOutlined />
          </Button>
        </div>
      ) : (
        <Button onClick={handleAddItem} className={styles.btn} type="primary">
          Add to Cart
        </Button>
      )}
    </>
  );
};
