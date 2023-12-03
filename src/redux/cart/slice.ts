import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  addItemToCartFeatch,
  getCartFeatch,
  udateItemInCartFeatch,
  removeItemFromCartFeatch,
} from "./async-actions";
import {
  AddItemRespons,
  Cart,
  CartSliceState,
  RemoveItemRespons,
  Status,
} from "./types";

const initialState: CartSliceState = {
  data: {
    quantity: 0,
    totalPrice: 0,
    itemsList: [],
  },
  status: Status.SUCCESS,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Cart>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCartFeatch.fulfilled,
      (state, { payload }: PayloadAction<Cart>) => {
        state.data.quantity = payload.quantity;
        state.data.totalPrice = payload.totalPrice;
        state.data.itemsList = payload.itemsList;

        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(
      addItemToCartFeatch.fulfilled,
      (state, { payload }: PayloadAction<Cart>) => {
        state.data.quantity = payload.quantity;
        state.data.totalPrice = payload.totalPrice;
        state.data.itemsList = payload.itemsList;

        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(
      udateItemInCartFeatch.fulfilled,
      (state, { payload }: PayloadAction<AddItemRespons>) => {
        state.data.quantity = payload.cartState.quantity;
        state.data.totalPrice = payload.cartState.totalPrice;

        state.data.itemsList = state.data.itemsList.map((item) =>
          item.id === payload.updatedItem.id ? payload.updatedItem : item
        );

        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(
      removeItemFromCartFeatch.fulfilled,
      (state, { payload }: PayloadAction<RemoveItemRespons>) => {
        state.data.quantity = payload.cartState.quantity;
        state.data.totalPrice = payload.cartState.totalPrice;

        state.data.itemsList = state.data.itemsList.filter(
          (item) => item.id !== payload.removedItemId
        );

        state.status = Status.SUCCESS;
      }
    );

    builder.addMatcher(
      isAnyOf(
        getCartFeatch.pending,
        addItemToCartFeatch.pending,
        udateItemInCartFeatch.pending,
        removeItemFromCartFeatch.pending
      ),
      (state) => {
        state.status = Status.LOADING;
      }
    );
    builder.addMatcher(
      isAnyOf(
        getCartFeatch.rejected,
        addItemToCartFeatch.rejected,
        udateItemInCartFeatch.rejected,
        removeItemFromCartFeatch.rejected
      ),
      (state) => {
        state.status = Status.ERROR;
      }
    );
  },
});

export const { setData } = cartSlice.actions;

export default cartSlice.reducer;
