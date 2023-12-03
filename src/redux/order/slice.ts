import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";

import { addOrderFeatch, getOrderFeatch } from "./async-actions";
import { Order, OrderSliceState, Status } from "./types";

const initialState: OrderSliceState = {
  data: [],
  status: Status.SUCCESS,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getOrderFeatch.fulfilled,
      (state, { payload }: PayloadAction<Order[]>) => {
        state.data = payload;

        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(addOrderFeatch.fulfilled, (state) => {
      state.status = Status.SUCCESS;
    });

    builder.addMatcher(
      isAnyOf(getOrderFeatch.pending, addOrderFeatch.pending),
      (state) => {
        state.status = Status.LOADING;
      }
    );
    builder.addMatcher(
      isAnyOf(getOrderFeatch.rejected, addOrderFeatch.pending),
      (state) => {
        state.status = Status.ERROR;
      }
    );
  },
});

export default orderSlice.reducer;
