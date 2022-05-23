import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  password: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserName(state, action) {
      return { ...state, name: action.payload };
    },
    setUserPassword(state, action) {
      return { ...state, password: action.payload };
    },
    clear(state) {
      return [];
    },
  },
});

export const { setUserPassword, setUserName, clear} = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
