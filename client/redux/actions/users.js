import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const suscriptionEventUser = createAsyncThunk(
  'users/suscription',
  async (body) => {
    const { id, suscription } = body
    try {
      const { data } = await axiosInstance.patch(`/users/${id}`, suscription)
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

export const changePassword = createAsyncThunk(
  'users/newPassword',
  async (body) => {
    console.log('passsbody', body)
    const { id, newPassword } = body
    try {
      const { data } = await axiosInstance.patch(
        `/users/password/${id}`,
        newPassword
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
