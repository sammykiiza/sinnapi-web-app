import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface sideBarState {
  isOpen: boolean
  dashboard?: boolean
}

const initialState: sideBarState = {
  isOpen: false,
  dashboard: false,
}

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    setDashboard: (state, action: PayloadAction<boolean>) => {
      state.dashboard = action.payload
    },
  },
})

export const { setIsOpen, setDashboard } = sideBarSlice.actions
export default sideBarSlice.reducer
