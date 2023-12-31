import { FC } from "react";

import minus from "../../assets/icon/Minus.svg";
import plus from "../../assets/icon/Plus.svg";
import cross from "../../assets/icon/Cross.svg";

import styles from "./BasketCard.module.scss";
import { AddItemToCart } from "../../redux/cart/types";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

interface BasketCardProps {
  elem: AddItemToCart;
  order?: boolean;
}

export const BasketCard: FC<BasketCardProps> = ({ elem, order }) => {
  const { id, image, name, price, quantity } = elem;

  const { udateItemInCart, removeItemFromCart, cartInfo } = useCart();

  const productInCart = cartInfo.itemsList.find(
    (cartItem) => cartItem.id === +id
  );

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
    removeItemFromCart(id.toString());
  };

  return (
    <Link to={`/product/${id}`} className={styles.item}>
      <>
        <img className={styles.itemImg} src={image} alt="content" />
        <h3 className={styles.itemTitle}>{name}</h3>
        <span className={styles.itemPrise}>
          {!order ? price : `Price: ${price}`}$
        </span>
        <div className={styles.itemQuantity}>
          {!order && (
            <button
              onClick={
                productInCart?.quantity === 1
                  ? handleRemoveItem
                  : handleUpdateItemDecrement
              }
            >
              <img src={minus} alt="minus" />
            </button>
          )}
          <span> {!order ? quantity : `Quantity: ${quantity}`} </span>
          {!order && (
            <button onClick={handleUpdateItemIncrement}>
              <img src={plus} alt="plus" />
            </button>
          )}
        </div>

        {!order && (
          <button onClick={handleRemoveItem} className={styles.itemRemove}>
            <img src={cross} alt="cross" />
            <span>Remove</span>
          </button>
        )}
      </>
    </Link>
  );
};
