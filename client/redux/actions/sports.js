import { createAsyncThunk } from '@reduxjs/toolkit'
// import { apiBackend } from '../../utils/config'
import { sports } from '../utils/sports'

export const getAllSports = createAsyncThunk('sports/getAll', async () => {
  //   try {
  //     const { data } = await apiBackend.get('/sports/')
  //     return data.data
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  return sports
})
