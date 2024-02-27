import { createSlice } from '@reduxjs/toolkit'
import {
  getAllEvents,
  getEventById,
  favorite,
  getAllEventsFilters,
  getFavorites,
  createEvent
} from '../actions/events'

export const eventsSlices = createSlice({
  name: 'events',
  initialState: {
    events: [],
    eventsFilter: [],
    nameEventsFilters: {},
    event: {},
    loading: false,
    loadingGet: false,
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
    },
    setEventFromPrice: (state, action) => {
      const { start, end } = action.payload

      state.eventsFilter = state.eventsFilter.filter((event) => {
        const precio = parseInt(event.event_price)
        return precio >= start && precio <= end
      })

      if (state.eventsFilter.length === 0) {
        state.eventsFilter = []
      }
    },
    setOrderEvents: (state, action) => {
      const { dateStart, price } = action.payload

      if (dateStart) {
        console.log('fecha')
        state.eventsFilter.sort((a, b) => {
          return new Date(a.event_date_start) - new Date(b.event_date_start)
        })
      }

      if (price) {
        console.log('precio')
        state.eventsFilter.sort((a, b) => {
          return parseFloat(a.event_price) - parseFloat(b.event_price)
        })
      }
    },
    setFiltersToFilters: (state, action) => {
      const eventModalityIds = action.payload

      const filteredEvents = state.eventsFilter.filter((event) => {
        return eventModalityIds.some((id) => event.event_modality === id)
      })

      state.eventsFilter = filteredEvents
    }
  },

  extraReducers: (builder) => {
    builder
      // TODOS LOS EVENTOS
      .addCase(getAllEvents.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.loadingGet = false
        state.events = action.payload
        state.error = null
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })

      // crear
      .addCase(createEvent.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createEvent.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(createEvent.rejected, (state, action) => {
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

export const {
  setEvent,
  setNameEvent,
  setDateStart,
  setDateSuscription,
  setEventFromPrice,
  setOrderEvents,
  setFiltersToFilters
} = eventsSlices.actions

export default eventsSlices.reducer
