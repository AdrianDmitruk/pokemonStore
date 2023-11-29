import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth/slice";
import products from "./products/slice";
import cart from "./cart/slice";
import product from "./product/slice";

export const store = configureStore({
  reducer: {
    auth,
    products,
    cart,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
