/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../api";
import { GET_PRODUCTS } from "../../api/endpoint";

import { notification } from "antd";

import { AxiosResponse } from "axios";
import { Products } from "../products/types";

export const getProductFeatch = createAsyncThunk(
  "product/getProductStatus",
  async (itemId: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Products> =
        await axiosInstance.get<Products>(`${GET_PRODUCTS}/${itemId}`);

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
