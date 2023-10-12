import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface MainLayoutState {
  showFooter: boolean
}

const initialState: MainLayoutState = {
  showFooter: true,
}

export const mainLayoutSlice = createSlice({
  name: "mainLayout",
  initialState,
  reducers: {
    showFooter: (state, action: PayloadAction<boolean>) => {
      state.showFooter = action.payload
    },
  },
})

export const { showFooter } = mainLayoutSlice.actions
export default mainLayoutSlice.reducer
