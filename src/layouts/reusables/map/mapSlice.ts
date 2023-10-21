import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface MapStateInterface {
  LatLng: {
    lat: number
    lng: number
  }
}

const initialState: MapStateInterface = {
  LatLng: {
    lat: 0.347596,
    lng: 32.58252,
  },
}

const mapSlice = createSlice({
  name: "mapSlice",
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<any>) => {
      state.LatLng = action.payload
    },
  },
})

export const { setPosition } = mapSlice.actions
export default mapSlice.reducer
