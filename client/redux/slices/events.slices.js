import { createSlice } from '@reduxjs/toolkit'
import { getAllEvents, getEventById, favorite } from '../actions/events'

export const eventsSlices = createSlice({
  name: 'events',
  initialState: {
    events: [],
    event: {},
    loading: false,
    error: {},
    favorites: []
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      // TODOS LOS EVENTOS
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

      // UN EVENTO
      .addCase(getEventById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.loading = false
        state.event = action.payload
        state.error = null
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // FAVORITOS
      .addCase(favorite.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(favorite.fulfilled, (state, action) => {
        state.loading = false
        state.event = action.payload
        state.error = null
      })
      .addCase(favorite.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { setEvent } = eventsSlices.actions

export default eventsSlices.reducer
