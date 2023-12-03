/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../api";
import { GET_ORDER } from "../../api/endpoint";

import { notification } from "antd";
import { AddOrder, CustomerOrder, Order } from "./types";
import { AxiosResponse } from "axios";
import { setData } from "../cart/slice";

export const getOrderFeatch = createAsyncThunk(
  "order/getOrderStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Order[]> = await axiosInstance.get<Order[]>(
        `${GET_ORDER}`
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

export const addOrderFeatch = createAsyncThunk(
  "order/addOrderStatus",
  async (params: AddOrder, { rejectWithValue, dispatch }) => {
    try {
      const response: AxiosResponse<CustomerOrder> =
        await axiosInstance.post<CustomerOrder>(`${GET_ORDER}`, params);
      dispatch(setData({ quantity: 0, totalPrice: 0, itemsList: [] }));
      notification.success({
        message: "Успех",
        description: "Заявка успешно отправлена",
        duration: 3,
        placement: "topRight",
      });
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
