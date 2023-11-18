import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import mainLayoutReducer from "../layouts/main/mainLayoutSlice"
import sideBarsSlice from "../layouts/sidebars/sideBarsSlice"
import mapSlice from "../layouts/reusables/map/mapSlice"
import vendorSlice from "../features/vendor/vendorSlice"
import authSlice from "../services/auth/authSlice"
import { authApi } from "../services/auth/authApi"
import { vendorApi } from "../services/vendor/vendorApi"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    counter: counterReducer,
    mainLayout: mainLayoutReducer,
    sideBar: sideBarsSlice,
    map: mapSlice,
    vendor: vendorSlice,
    [vendorApi.reducerPath]: vendorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, vendorApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
