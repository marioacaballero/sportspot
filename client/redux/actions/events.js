import { createAsyncThunk } from '@reduxjs/toolkit'
// import { apiBackend } from '../../utils/config'
// import { events } from '../utils/events'
import axiosInstance from '../../utils/apiBackend'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  try {
    console.log(axiosInstance)
    const { data } = await axiosInstance.get('/events')
    return data
  } catch (error) {
    throw new Error(error)
  }
  // return events
})
