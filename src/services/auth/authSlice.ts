import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface authState {
  userType: "vendor" | "customer"
}

const initialState: authState = {
  userType: "customer",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<authState>) => {
      state.userType = action.payload.userType
    },
  },
})

export const { setUserType } = authSlice.actions
export default authSlice.reducer
