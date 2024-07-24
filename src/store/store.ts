import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./slice/transactionSlice";
import balanseReducer from "./slice/balanseSlice";

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    balance: balanseReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
