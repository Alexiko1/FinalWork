import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authusers/authSlice";
import histogramSlice from "../authusers/histogramSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    histogram: histogramSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;