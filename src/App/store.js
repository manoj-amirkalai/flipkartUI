import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/cartSlice";
import userReducer from "../Slices/userSlices";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    cartData: cartReducer,
  },
});
