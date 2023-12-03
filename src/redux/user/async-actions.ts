/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../api";
import { GET_USER } from "../../api/endpoint";

import { notification } from "antd";
import { User } from "./types";
import { AxiosResponse } from "axios";

export const getUserFeatch = createAsyncThunk(
  "user/getUserStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<User> = await axiosInstance.get<User>(
        `${GET_USER}`
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
