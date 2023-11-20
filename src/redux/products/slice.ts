import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProducts } from "./async-actions";
import { Products, ProductsSliceState, Status } from "./types";

const initialState: ProductsSliceState = {
  data: [],
  searchQuery: "",
  priceFrom: null,
  priceTo: null,
  status: Status.SUCCESS,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setDataProducts(state, action: PayloadAction<Products[]>) {
      state.data = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setPriceFrom(state, action: PayloadAction<number | null>) {
      state.priceFrom = action.payload;
    },
    setPriceTo(state, action: PayloadAction<number | null>) {
      state.priceTo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchProducts.fulfilled, (state) => {
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setDataProducts, setSearchQuery, setPriceFrom, setPriceTo } =
  productsSlice.actions;

export default productsSlice.reducer;
