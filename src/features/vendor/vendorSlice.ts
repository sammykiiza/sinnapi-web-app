import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface VendorState {
  SocailMedia: {
    title: string
    link: string
  }[]
}

const initialState: VendorState = {
  SocailMedia: [
    {
      title: "Facebook",
      link: "Social Media Link",
    },
  ],
}

const vendorSlice = createSlice({
  name: "vendorSlice",
  initialState,
  reducers: {
    setSocialMedia: (
      state,
      action: PayloadAction<{ title: string; link: string }>,
    ) => {
      state.SocailMedia.push(action.payload)
    },
  },
})

export const { setSocialMedia } = vendorSlice.actions
export default vendorSlice.reducer
