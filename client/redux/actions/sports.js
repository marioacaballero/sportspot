import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'
// import { apiBackend } from '../../utils/config'
// import { sports } from '../utils/sports'

export const getAllSports = createAsyncThunk('sports/getAll', async () => {
  try {
    const { data } = await axiosInstance.get('/sports')
    return data
  } catch (error) {
    throw new Error(error)
  }
})
