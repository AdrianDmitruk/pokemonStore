import {
  addItemToCartFeatch,
  removeItemFromCartFeatch,
  udateItemInCartFeatch,
} from "./../redux/cart/async-actions";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { selectCartData } from "../redux/cart/selectors";
import { useCallback } from "react";
import { getCartFeatch } from "../redux/cart/async-actions";
import { AddItemToCart, UpdateItemInCart } from "../redux/cart/types";

export const useCart = () => {
  const dispatch = useAppDispatch();

  const { data: cartInfo, status } = useSelector(selectCartData);

  const getCartInfo = useCallback(() => {
    dispatch(getCartFeatch());
  }, [dispatch]);

  const addItemToCart = useCallback(
    (item: AddItemToCart) => {
      dispatch(addItemToCartFeatch(item));
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

  return {
    getCartInfo,
    cartInfo,
    addItemToCart,
    status,
    udateItemInCart,
    removeItemFromCart,
  };
};
