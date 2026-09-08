import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedInEmployee, loginEmployee } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoading: false
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginEmployee.pending, (state)=>{
      state.isLoading = true;
    })
    
    builder.addCase(loginEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    });

    builder.addCase(loginEmployee.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(currentLoggedInEmployee.pending, (state)=>{
      state.isLoading = true;
    })
    
    builder.addCase(currentLoggedInEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    });

    builder.addCase(currentLoggedInEmployee.rejected, (state) => {
      state.isLoading = false;
    });

  }

});

export const { addEmployee, removeEmployee } = authSlice.actions;

export default authSlice.reducer;