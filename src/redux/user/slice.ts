import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";

import { getUserFeatch } from "./async-actions";
import { Status, User, UserSliceState } from "./types";

const initialState: UserSliceState = {
  data: {
    _id: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      country: "",
      city: "",
    },
  },
  status: Status.SUCCESS,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUserFeatch.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.data = payload;

        state.status = Status.SUCCESS;
      }
    );

    builder.addMatcher(isAnyOf(getUserFeatch.pending), (state) => {
      state.status = Status.LOADING;
    });
    builder.addMatcher(isAnyOf(getUserFeatch.rejected), (state) => {
      state.status = Status.ERROR;
    });
  },
});

export default userSlice.reducer;
