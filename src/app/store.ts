import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import mainLayoutReducer from "../layouts/main/mainLayoutSlice"
import sideBarsSlice from "../layouts/sidebars/sideBarsSlice"
import authSlice from "../services/auth/authSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mainLayout: mainLayoutReducer,
    sideBar: sideBarsSlice,
    auth: authSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
