import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import mainLayoutReducer from "../layouts/main/mainLayoutSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mainLayout: mainLayoutReducer,
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
