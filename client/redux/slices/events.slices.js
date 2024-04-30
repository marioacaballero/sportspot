import { createSlice } from '@reduxjs/toolkit'
import {
  getAllEvents,
  getEventById,
  favorite,
  getAllEventsFilters,
  getFavorites,
  createEvent,
  visitEvent,
  getAllVisitedEvents,
  addReview
} from '../actions/events'
import { offSuscription } from '../actions/suscriptions'

export const eventsSlices = createSlice({
  name: 'events',
  initialState: {
    events: [],
    eventsFilter: [],
    nameEventsFilters: {},
    event: {},
    loading: false,
    loadingId: false,
    loadingGet: false,
    error: {},
    favorites: [],
    allFavorites: [],
    dateStart: '',
    dateSuscription: '',
    visitedEvents: []
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
        state.eventsFilter.sort((a, b) => {
          return new Date(a.event_date_start) - new Date(b.event_date_start)
        })
      }

      if (price) {
        state.eventsFilter.sort((a, b) => {
          return parseFloat(a.event_price) - parseFloat(b.event_price)
        })
      }
    },
    setFiltersToFilters: (state, action) => {
      const itemsFilters = action.payload

      const filteredEvents = state.eventsFilter.filter((event) => {
        for (const sport of Object.keys(itemsFilters)) {
          const value = itemsFilters[sport]
          if (Array.isArray(value)) {
            if (value.length === 0 && event.sportname.includes(sport)) {
              return true
            }
            if (value.length > 0 && value.includes(event.event_modality)) {
              return true
            }
          } else {
            if (event.sportname.includes(sport)) {
              return true
            }
          }
        }
        return false
      })
      state.eventsFilter = filteredEvents
    },
    getEventByIdRedux: (state, action) => {
      const event = state.events.find((e) => e.id === action.payload)
      state.event = event
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
      .addCase(createEvent.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.events = [...state.events, action.payload]
        state.error = null
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // UN EVENTO
      .addCase(getEventById.pending, (state) => {
        state.loadingId = true
        state.error = null
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.loadingId = false
        state.event = action.payload
        state.error = null
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.loadingId = false
        state.error = action.payload
      })

      // FAVORITOS
      // .addCase(favorite.pending, (state) => {
      //   state.loadingGet = true
      //   state.error = null
      // })
      // .addCase(favorite.fulfilled, (state, action) => {
      //   state.loadingGet = false
      //   state.favorites = action.payload
      //   state.error = null
      // })
      // .addCase(favorite.rejected, (state, action) => {
      //   state.loadingGet = false
      //   state.error = action.payload
      // })
      .addCase(getFavorites.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.loadingGet = false
        state.allFavorites = action.payload
        state.error = null
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })

      // FILTRO DE EVENTOS
      .addCase(getAllEventsFilters.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getAllEventsFilters.fulfilled, (state, action) => {
        state.loadingGet = false
        state.eventsFilter = action.payload
        state.error = null
      })
      .addCase(getAllEventsFilters.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })
      // Evento visitado
      .addCase(visitEvent.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(visitEvent.fulfilled, (state, action) => {
        state.loadingGet = false
        state.visitedEvents = action.payload
        state.error = null
      })
      .addCase(visitEvent.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })
      // Todos los eventos visitados
      .addCase(getAllVisitedEvents.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getAllVisitedEvents.fulfilled, (state, action) => {
        state.loadingGet = false
        state.visitedEvents = action.payload
        state.error = null
      })
      .addCase(getAllVisitedEvents.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })

      // Actualizar los estados despues de desuscribir de un evento
      .addCase(offSuscription.pending, (state) => {
        state.loading = true
      })
      .addCase(offSuscription.fulfilled, (state, action) => {
        const idx = state.events.findIndex((e) => e.id === action.payload.id)
        state.events[idx] = action.payload
        state.event = action.payload
      })
      .addCase(offSuscription.rejected, (state, action) => {
        state.events = false
        state.error = action.payload
        state.loading = false
      })

      // Agregar una reseña
      .addCase(addReview.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.event = {
          ...state.event,
          reviews: [...state.event.reviews, action.payload]
        }
        state.loading = false
        state.error = null
      })
      .addCase(addReview.rejected, (state, action) => {
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
  setFiltersToFilters,
  getEventByIdRedux
} = eventsSlices.actions

export default eventsSlices.reducer
