import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  try {
    const { data } = await axiosInstance.get('/events')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getAllEventsFilters = createAsyncThunk(
  'eventsFilters/getAll',
  async (query) => {
    try {
      const { data } = await axiosInstance.get('/events', { params: query })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const updateEvent = createAsyncThunk('update/event', async (body) => {
  const { id, updateEventDto } = body
  try {
    const { data } = await axiosInstance.patch(`/events/${id}`, updateEventDto)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getEventById = createAsyncThunk('events/getOne', async (id) => {
  try {
    const { data } = await axiosInstance.get(`/events/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const createEvent = createAsyncThunk('events/create', async (body) => {
  try {
    const { data } = await axiosInstance.post('/events', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const deleteEvent = createAsyncThunk('delete/event', async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/events/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getFavorites = createAsyncThunk(
  'users/getFavorites',
  async (id) => {
    try {
      const { data } = await axiosInstance.get(`/events/favorites/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const favorite = createAsyncThunk('users/favorite', async (body) => {
  const { id, eventId } = body
  try {
    const { data } = await axiosInstance.patch(`/users/favorite/${id}`, {
      eventId
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const visitEvent = createAsyncThunk('events/visit', async (body) => {
  try {
    const { data } = await axiosInstance.post('/events/visit', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const getAllVisitedEvents = createAsyncThunk(
  'events/getAllVisited',
  async (body) => {
    try {
      console.log('body todos los eventos visitados', body)
      const { userId, filter } = body
      const { data } = await axiosInstance.get(
        `/events/visit-event?userId=${userId}&filter=${filter}`
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
