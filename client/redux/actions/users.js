import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const suscriptionEventUser = createAsyncThunk(
  'users/suscription',
  async (body) => {
    const { id, login } = body
    try {
      const { data } = await axiosInstance.patch(`/users/${id}`, login)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const register = createAsyncThunk('users/register', async (body) => {
  try {
    const { data } = await axiosInstance.post('/users', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const login = createAsyncThunk('users/login', async (body) => {
  try {
    const { data } = await axiosInstance.post('/jwt/login', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
