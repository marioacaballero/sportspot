import { createSlice } from '@reduxjs/toolkit'
import { onSuscription } from '../actions/suscriptions'

export const suscriptionsSlices = createSlice({
  name: 'suscriptions',
  initialState: {
    mySuscription: [],
    loading: false,
    error: {}
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(onSuscription.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(onSuscription.fulfilled, (state, action) => {
        state.loading = false
        state.mySuscription = action.payload
        state.error = null
      })
      .addCase(onSuscription.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

// export const {} = suscriptionsSlices.actions

export default suscriptionsSlices.reducer
