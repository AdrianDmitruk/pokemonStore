import {
  addItemToCartFeatch,
  removeItemFromCartFeatch,
  udateItemInCartFeatch,
} from "./../redux/cart/async-actions";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { selectCartData } from "../redux/cart/selectors";
import { useCallback, useState } from "react";
import { getCartFeatch } from "../redux/cart/async-actions";
import { AddItemToCart, UpdateItemInCart } from "../redux/cart/types";
import { addOrderFeatch } from "../redux/order/async-actions";
import { AddOrder } from "../redux/order/types";

export const useCart = () => {
  const dispatch = useAppDispatch();

  const { data: cartInfo, status } = useSelector(selectCartData);

  const [isOrderLoading, setIsOrderLoading] = useState<boolean>(false);
  const [isAddItemLoading, setAddItemLoading] = useState<boolean>(false);

  const getCartInfo = useCallback(() => {
    dispatch(getCartFeatch());
  }, [dispatch]);

  const addItemToCart = useCallback(
    (item: AddItemToCart) => {
      setAddItemLoading(true);
      dispatch(addItemToCartFeatch(item)).then(
        (res) => res && setAddItemLoading(false)
      );
    },
    [dispatch]
  );

  const udateItemInCart = useCallback(
    (item: UpdateItemInCart) => {
      dispatch(udateItemInCartFeatch(item));
    },
    [dispatch]
  );

  const removeItemFromCart = useCallback(
    (itemId: string) => {
      dispatch(removeItemFromCartFeatch(itemId));
    },
    [dispatch]
  );

  const udateOrderFromCart = useCallback(
    (item: AddOrder) => {
      setIsOrderLoading(true);
      dispatch(addOrderFeatch(item)).then(
        (res) => res && setIsOrderLoading(false)
      );
    },
    [dispatch]
  );

  return {
    getCartInfo,
    cartInfo,
    addItemToCart,
    status,
    udateItemInCart,
    removeItemFromCart,
    udateOrderFromCart,
    isOrderLoading,
    isAddItemLoading,
  };
};
