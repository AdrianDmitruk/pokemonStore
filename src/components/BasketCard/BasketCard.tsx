import { FC } from "react";

import minus from "../../assets/icon/Minus.svg";
import plus from "../../assets/icon/Plus.svg";
import cross from "../../assets/icon/Cross.svg";

import styles from "./BasketCard.module.scss";
import { AddItemToCart, Status } from "../../redux/cart/types";
import { useCart } from "../../hooks/useCart";

import cn from "classnames";
import ContentLoader from "react-content-loader";

interface BasketCardProps {
  elem: AddItemToCart;
}

export const BasketCard: FC<BasketCardProps> = ({ elem }) => {
  const { id, image, name, price, quantity } = elem;

  const { udateItemInCart, removeItemFromCart, cartInfo, status } = useCart();

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
    <div
      className={cn(styles.item, {
        [styles.itemLoad]: status === Status.LOADING,
      })}
    >
      {status === Status.SUCCESS ? (
        <ContentLoader
          speed={2}
          width={809}
          height={80}
          viewBox="0 0 809 80"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="21" y="80" rx="3" ry="3" width="809" height="80" />
        </ContentLoader>
      ) : (
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
      )}
    </div>
  );
};
