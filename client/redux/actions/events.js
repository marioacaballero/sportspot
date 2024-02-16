import { createAsyncThunk } from '@reduxjs/toolkit'
// import { apiBackend } from '../../utils/config'
// import { events } from '../utils/events'
import axiosInstance from '../../utils/apiBackend'
import axios from 'axios'

export const getAllEvents = createAsyncThunk('events/getAll', async () => {
  try {
    console.log(axiosInstance)
    const { data } = await axios.get('http://localhost:3000/events')
    return data
  } catch (error) {
    throw new Error(error)
  }
})
