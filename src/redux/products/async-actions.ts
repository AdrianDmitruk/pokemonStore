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
      const url = `${GET_PRODUCTS}?page=${params.page}&limit=${params.limit}&name=${params.name}`;

      if (
        (params.priceFrom !== null && params.priceFrom !== 0) ||
        params.name
      ) {
        `${url}&priceFrom=${params.priceFrom}`;
      }

      if ((params.priceTo !== null && params.priceTo !== 0) || params.name) {
        `${url}&priceTo=${params.priceTo}`;
      }

      const response: AxiosResponse<Products> =
        await axiosInstance.get<Products>(url);
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
