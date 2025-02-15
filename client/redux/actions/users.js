import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const suscriptionEventUser = createAsyncThunk(
  'users/suscription',
  async (body) => {
    // console.log('body from suscriptionEventUser: ', body)
    const { id, eventId } = body
    try {
      const { data } = await axiosInstance.patch(`/users/${id}`, { eventId })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const submitInscription = createAsyncThunk(
  'users/submitInscription',
  async (body) => {
    console.log('body from submitInscription: ', body)
    try {
      const { data } = await axiosInstance.post('/inscriptions', body)
      //   console.log('returning data from inscriptions', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const updateUser = createAsyncThunk('users/update', async (body) => {
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

export const getUserByEmail = createAsyncThunk(
  'users/getUserByEmail',
  async (email) => {
    try {
      const { data } = await axiosInstance.get(`/users/email?email${email}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

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
    console.log('posting user with body: ', body)
    const { data } = await axiosInstance.post('/users', body)
    //  console.log('response from register: ', data)
    return data
  } catch (error) {
    console.log('error from register action: ', error)
    throw new Error(error)
  }
})

export const login = createAsyncThunk('users/login', async (body) => {
  try {
    console.log('body from login: ', body)
    const { data } = await axiosInstance.post('/jwt/login', body)
    //  console.log('data from login', data)
    return data
  } catch (error) {
    console.log('error from login: ', error)
    throw new Error(error)
  }
})

export const googleLogin = createAsyncThunk(
  'users/googleLogin',
  async (body) => {
    try {
      //  console.log('body from login: ', body)
      const { data } = await axiosInstance.post('/jwt/google-login', body)
      //   console.log('data from login', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

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
    try {
      const { data } = await axiosInstance.post(
        'reset-code/validate-reset-code',
        body
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

export const updateUserRol = createAsyncThunk(
  'users/updateRol',
  async (body) => {
    const { id } = body
    try {
      const { data } = await axiosInstance.post(`/users/rol/${id}`)
      // console.log('data from updateRol:', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

// preferencias de usuario, se ejecuta la primera vez y cada vez que configure el usuario
export const postUserPreferences = createAsyncThunk(
  'users/postUserPreferences',
  async ({ userPreferences, id }) => {
    try {
      const { data } = await axiosInstance.patch(
        `/users/userPreferences/${id}`,
        { userPreferences }
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const favorite = createAsyncThunk('users/favorite', async (body) => {
  const { id, eventId } = body

  try {
    const { data } = await axiosInstance.patch(`/users/favorite/${id}`, {
      eventId
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
})
