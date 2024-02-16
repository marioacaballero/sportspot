import { createSlice } from '@reduxjs/toolkit'
import { getAllSports } from '../actions/sports'

export const notificationsSlices = createSlice({
  name: 'notifications',
  initialState: {
    sports: [],
    loading: false
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllSports.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllSports.fulfilled, (state, action) => {
        state.loading = false
        state.sports = action.payload
        state.error = null
      })
      .addCase(getAllSports.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default notificationsSlices.reducer
