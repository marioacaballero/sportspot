import { createSlice } from '@reduxjs/toolkit'
import { getAllEvents } from '../actions/events'

export const eventsSlices = createSlice({
  name: 'events',
  initialState: {
    events: [],
    event: {},
    loading: false
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.loading = false
        state.events = action.payload
        state.error = null
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default eventsSlices.reducer
