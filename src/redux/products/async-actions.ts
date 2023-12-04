/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../api";
import { GET_PRODUCTS } from "../../api/endpoint";

import { notification } from "antd";
import { IProductsParams, Products } from "./types";
import { AxiosResponse } from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (params: IProductsParams, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Products> =
        await axiosInstance.get<Products>(
          `${GET_PRODUCTS}?page=${params.page}&limit=${params.limit}&name=${params.name}`
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
