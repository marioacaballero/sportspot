import { createSlice } from '@reduxjs/toolkit'
import {
  getAllEvents,
  getEventById,
  favorite,
  getAllEventsFilters,
  getFavorites
} from '../actions/events'

export const eventsSlices = createSlice({
  name: 'events',
  initialState: {
    events: [],
    eventsFilter: [],
    nameEventsFilters: {},
    event: {},
    loading: false,
    error: {},
    favorites: [],
    allFavorites: [],
    dateStart: '',
    dateSuscription: ''
  },
  reducers: {
    setEvent: (state, action) => {
      state.event = action.payload
    },
    setNameEvent: (state, action) => {
      state.nameEventsFilters = action.payload
    },
    setDateStart: (state, action) => {
      state.dateStart = action.payload
    },
    setDateSuscription: (state, action) => {
      state.dateSuscription = action.payload
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
        state.favorites = action.payload
        state.error = null
      })
      .addCase(favorite.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getFavorites.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.loading = false
        state.allFavorites = action.payload
        state.error = null
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // FILTRO DE EVENTOS
      .addCase(getAllEventsFilters.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllEventsFilters.fulfilled, (state, action) => {
        state.loading = false
        state.eventsFilter = action.payload
        state.error = null
      })
      .addCase(getAllEventsFilters.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { setEvent, setNameEvent, setDateStart, setDateSuscription } =
  eventsSlices.actions

export default eventsSlices.reducer
