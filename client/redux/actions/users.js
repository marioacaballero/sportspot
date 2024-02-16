import { createAsyncThunk } from '@reduxjs/toolkit'

import axiosInstance from '../../utils/apiBackend'

export const getAllEvents = createAsyncThunk('users/getAll', async () => {
  try {
    console.log('user', axiosInstance)
    const { data } = await axiosInstance.get('/users')
    return data
  } catch (error) {
    throw new Error(error)
  }
})
