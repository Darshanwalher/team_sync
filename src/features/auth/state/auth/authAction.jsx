import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data || { message: error.message }
      );
    }
  }
);

export const registerEmployee = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const res = await axiosInstance.post("/auth/register", userData);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data || { message: error.message }
      );
    }
  }
);

export const currentLoggedInEmployee = createAsyncThunk(
    "auth/me",
    async (_ , thunkApi) => {
        try {
            const res = await axiosInstance.get("/auth/me");
            console.log("Current Logged In Employee:", res);
            return res.data.user;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error?.response?.data || { message: error.message }
            );
        }
    }
)