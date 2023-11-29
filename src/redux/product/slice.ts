import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";

import { getProductFeatch } from "./async-actions";
import { ProductSliceState, Status } from "./types";
import { Products } from "../products/types";

const initialState: ProductSliceState = {
  data: {
    _id: "",
    id: "",
    image: "",
    name: "",
    price: 0,
    abilities: [],
    stats: [],
  },
  status: Status.SUCCESS,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProductFeatch.fulfilled,
      (state, { payload }: PayloadAction<Products>) => {
        state.data = payload;
        state.status = Status.SUCCESS;
      }
    );

    builder.addMatcher(isAnyOf(getProductFeatch.pending), (state) => {
      state.status = Status.LOADING;
    });
    builder.addMatcher(isAnyOf(getProductFeatch.rejected), (state) => {
      state.status = Status.ERROR;
    });
  },
});

export default productSlice.reducer;
