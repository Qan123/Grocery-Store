import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import authReducer from "./reducers/authSlice";

const ConfigureStore = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default ConfigureStore;
