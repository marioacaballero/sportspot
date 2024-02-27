import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const suscriptionEventUser = createAsyncThunk(
  'users/suscription',
  async (body) => {
    console.log(body)
    const { id, eventId } = body
    try {
      const { data } = await axiosInstance.patch(`/users/${id}`, { eventId })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const updateUser = createAsyncThunk('users/update', async (body) => {
  console.log(body)
  const { id, valuesUser } = body
  try {
    const { data } = await axiosInstance.patch(`/users/${id}`, valuesUser)
    return data
  } catch (error) {
    throw new Error(error)
  }
})

export const updateUserAvatar = createAsyncThunk(
  'users/updateAvatar',
  async (body) => {
    console.log(body)
    const { id, avatar } = body
    try {
      const { data } = await axiosInstance.patch(`/users/${id}`, { avatar })
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

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
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

export const resetPasswordMail = createAsyncThunk(
  'users/resetPassword',
  async (body) => {
    try {
      const { data } = await axiosInstance.post(
        'reset-code/reset-password',
        body
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const validateResetPassword = createAsyncThunk(
  'users/validateResetPassword',
  async (body) => {
    const { email, code, password } = body
    try {
      const { data } = await axiosInstance.post(
        'reset-code/validate-reset-code',
        email,
        code,
        password
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/users/${id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
})
