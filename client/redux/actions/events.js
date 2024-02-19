import { createAsyncThunk } from '@reduxjs/toolkit'
// import { apiBackend } from '../../utils/config'
// import { events } from '../utils/events'
import axiosInstance from '../../utils/apiBackend'
// import axios from 'axios'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  try {
    console.log(axiosInstance)
    const { data } = await axiosInstance.get('/events')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const createEvent = createAsyncThunk('events/create', async (body) => {
  try {
    console.log('bodyyyyyyyyy', body)
    const { data } = await axiosInstance.post('/events', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
