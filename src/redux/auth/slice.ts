import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOKEN_JWT } from "../../constans";
import { fetchLogin } from "./async-actions";
import { AuthResponse, AuthSliceState, Status } from "./types";

const initialState: AuthSliceState = {
  data: {
    _id: "",
    accessToken: localStorage.getItem(TOKEN_JWT) || null,
    password: "",
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDataAuth(state, action: PayloadAction<AuthResponse>) {
      state.data = action.payload;
    },

    logout(state) {
      state.data.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = Status.LOADING;
      state.data.accessToken = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state) => {
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.status = Status.ERROR;
      state.data.accessToken = null;
    });
  },
});

export const { setDataAuth, logout } = authSlice.actions;

export default authSlice.reducer;
