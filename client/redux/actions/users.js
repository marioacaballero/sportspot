import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAllEvents = createAsyncThunk('users/getAll', async () => {
  try {
    const { data } = await axiosInstance.get('/users')
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const register = createAsyncThunk('users/register', async (body) => {
  try {
    const { data } = await axiosInstance.post('/users', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
