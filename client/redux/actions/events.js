import { createAsyncThunk } from '@reduxjs/toolkit'
// import { apiBackend } from '../../utils/config'
import { events } from '../utils/events'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  //   try {
  //     const { data } = await apiBackend.get('/events/')
  //     return data.data
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  return events
})
