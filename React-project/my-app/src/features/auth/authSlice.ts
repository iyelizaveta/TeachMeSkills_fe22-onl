import { createSlice } from "@reduxjs/toolkit";
import { RegisterPaylod, RegisterResponce } from "./types";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    register(state, action: { payload: RegisterPaylod }) {},
    registerSuccess(state, action: { payload: RegisterResponce }) {},
    registerFailure(state, action: { payload: string }) {
      console.error("Register failure", action.payload);
    },
  },
});

export const { register, registerFailure, registerSuccess } = authSlice.actions;
export default authSlice.reducer;
