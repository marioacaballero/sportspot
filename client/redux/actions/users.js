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

export const getUser = createAsyncThunk('users/getUser', async (id) => {
  try {
    const { data } = await axiosInstance.get(`/users/${id}`)
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
    const { id, newPassword, oldPassword } = body
    try {
      const { data } = await axiosInstance.patch(`/users/password/${id}`, {
        newPassword,
        oldPassword
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
