/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../api";
import { CART_ITEM, GET_CART } from "../../api/endpoint";

import { notification } from "antd";
import {
  AddItemRespons,
  AddItemToCart,
  Cart,
  RemoveItemRespons,
  UpdateItemInCart,
} from "./types";
import { AxiosResponse } from "axios";

export const getCartFeatch = createAsyncThunk(
  "cart/getCartStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Cart> = await axiosInstance.get<Cart>(
        `${GET_CART}`
      );
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      notification.error({
        message: "Ошибка",
        description: errorMessage,
        duration: 3,
        placement: "topRight",
      });
      return rejectWithValue(errorMessage);
    }
  }
);

export const addItemToCartFeatch = createAsyncThunk(
  "cart/addItemToCartStatus",
  async (params: AddItemToCart, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Cart> = await axiosInstance.post<Cart>(
        `${CART_ITEM}`,
        params
      );
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      notification.error({
        message: "Ошибка",
        description: errorMessage,
        duration: 3,
        placement: "topRight",
      });
      return rejectWithValue(errorMessage);
    }
  }
);

export const udateItemInCartFeatch = createAsyncThunk(
  "cart/udateItemInCartStatus",
  async (params: UpdateItemInCart, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<AddItemRespons> =
        await axiosInstance.patch<AddItemRespons>(`${CART_ITEM}`, params);
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      notification.error({
        message: "Ошибка",
        description: errorMessage,
        duration: 3,
        placement: "topRight",
      });
      return rejectWithValue(errorMessage);
    }
  }
);

export const removeItemFromCartFeatch = createAsyncThunk(
  "cart/removeItemFromCartStatus",
  async (itemId: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<RemoveItemRespons> =
        await axiosInstance.delete<RemoveItemRespons>(`${CART_ITEM}/${itemId}`);
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      notification.error({
        message: "Ошибка",
        description: errorMessage,
        duration: 3,
        placement: "topRight",
      });
      return rejectWithValue(errorMessage);
    }
  }
);
