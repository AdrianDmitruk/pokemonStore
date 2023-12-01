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
}

export const BasketCard: FC<BasketCardProps> = ({ elem }) => {
  const { id, image, name, price, quantity } = elem;

  const { udateItemInCart, removeItemFromCart, cartInfo } = useCart();

  const productInCart = cartInfo.itemsList.find(
    (cartItem) => cartItem.id === +id
  );

  const handleUpdateItemIncrement = () => {
    if (productInCart) {
      const itemForCart = {
        id: +id,
        quantity: productInCart.quantity + 1,
      };

      udateItemInCart(itemForCart);
    }
  };

  const handleUpdateItemDecrement = () => {
    if (productInCart) {
      const itemForCart = {
        id: productInCart.id,
        quantity: productInCart.quantity - 1,
      };

      udateItemInCart(itemForCart);
    }
  };

  const handleRemoveItem = () => {
    removeItemFromCart(id.toString());
  };

  return (
    <Link to={`/product/${id}`} className={styles.item}>
      <>
        <img className={styles.itemImg} src={image} alt="content" />
        <h3 className={styles.itemTitle}>{name}</h3>
        <span className={styles.itemPrise}>${price}</span>
        <div className={styles.itemQuantity}>
          <button
            onClick={
              productInCart?.quantity === 1
                ? handleRemoveItem
                : handleUpdateItemDecrement
            }
          >
            <img src={minus} alt="minus" />
          </button>
          <span>{quantity}</span>
          <button onClick={handleUpdateItemIncrement}>
            <img src={plus} alt="plus" />
          </button>
        </div>

        <button onClick={handleRemoveItem} className={styles.itemRemove}>
          <img src={cross} alt="cross" />
          <span>Remove</span>
        </button>
      </>
    </Link>
  );
};
