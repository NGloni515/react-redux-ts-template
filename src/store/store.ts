import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import authReducer from "./auth/authSlice"


export const store: any = configureStore({
    reducer:{
        ui: uiReducer,
        auth: authReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
