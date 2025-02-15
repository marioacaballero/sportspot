import { createSlice } from '@reduxjs/toolkit'
import {
  getAllEvents,
  getEventById,
  getAllEventsFilters,
  getFavorites,
  createEvent,
  visitEvent,
  getAllVisitedEvents,
  addReview,
  getSuscribedEvents,
  getSuscribedEventsNotifications,
  getAllEventsInscriptions
} from '../actions/events'
import { offSuscription } from '../actions/suscriptions'

export const eventsSlices = createSlice({
  name: 'events',
  initialState: {
    events: [],
    suscribedEvents: [],
    suscribedEventsNotifications: [],
    eventsFilter: [],
    nameEventsFilters: {},
    event: {},
    loading: false,
    loadingId: false,
    loadingGet: false,
    eventInscriptions: [],
    nearbyLocations: [],
    nearbyLoading: false,
    selectedSports: [],
    error: {},
    showGuestModal: false,
    searchEventsFilters: {
      sportName: [],
      location: '',
      dateStart: [],
      nearCitys: []
    },
    favorites: [],
    allFavorites: [],
    dateStart: '',
    dateSuscription: '',
    visitedEvents: []
  },
  reducers: {
    setSelectedSports: (state, action) => {
      state.selectedSports = action.payload
    },
    setSearchEventsFilters: (state, action) => {
      state.searchEventsFilters = action.payload
    },
    setNearbyLoading: (state, action) => {
      state.nearbyLoading = action.payload
    },
    setEvent: (state, action) => {
      state.event = action.payload
    },
    setNearbyLocations: (state, action) => {
      state.nearbyLocations = action.payload
    },
    setNameEvent: (state, action) => {
      state.nameEventsFilters = action.payload
    },
    setDateStart: (state, action) => {
      state.dateStart = action.payload
    },
    setShowGuestModal: (state, action) => {
      state.showGuestModal = action.payload
    },
    setDateSuscription: (state, action) => {
      state.dateSuscription = action.payload
    },
    setFilteredEvents: (state, action) => {
      state.eventsFilter = action.payload
    },
    setVisitedEvents: (state, action) => {
      // console.log('filtering out event', action.payload, 'from visited')
      const actualVisited = [...state.visitedEvents]
      console.log('ACTUAL LENGTH', actualVisited.length)
      const filteredVisited = actualVisited.filter(
        (ev) => ev.event.id !== action.payload
      )
      console.log('FINAL LENGTH', filteredVisited.length)
      state.visitedEvents = filteredVisited
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
            if (value.length === 0 && event.sportname?.includes(sport)) {
              return true
            }
            if (value.length > 0 && value?.includes(event.event_modality)) {
              return true
            }
          } else {
            if (event.sportname?.includes(sport)) {
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
        state.eventsFilter = action.payload
        state.error = null
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })

      // TODAS LAS INSCRIPCIONES DE UN EVENTO
      .addCase(getAllEventsInscriptions.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getAllEventsInscriptions.fulfilled, (state, action) => {
        state.loadingGet = false
        state.eventInscriptions = action.payload
        state.error = null
      })
      .addCase(getAllEventsInscriptions.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })

      // EVENTOS SUSCRIPTOS

      .addCase(getSuscribedEvents.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getSuscribedEvents.fulfilled, (state, action) => {
        state.loadingGet = false
        state.suscribedEvents = action.payload
        state.error = null
      })
      .addCase(getSuscribedEvents.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })
      .addCase(getSuscribedEventsNotifications.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getSuscribedEventsNotifications.fulfilled, (state, action) => {
        state.loadingGet = false
        state.suscribedEventsNotifications = action.payload
        state.error = null
      })
      .addCase(getSuscribedEventsNotifications.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })
      // crear
      .addCase(createEvent.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createEvent.fulfilled, (state, action) => {
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
        const actualVisited = [...action.payload]
        const filteredVisited = actualVisited.filter((visited) =>
          state.events.some((ev) => ev.id === visited.event.id)
        )
        state.loadingGet = false
        state.visitedEvents = filteredVisited
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
        state.loading = false
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
  setVisitedEvents,
  setNameEvent,
  setDateStart,
  setSelectedSports,
  setNearbyLocations,
  setSearchEventsFilters,
  setNearbyLoading,
  setDateSuscription,
  setEventFromPrice,
  setFilteredEvents,
  setOrderEvents,
  setShowGuestModal,
  setFiltersToFilters,
  getEventByIdRedux
} = eventsSlices.actions

export default eventsSlices.reducer
