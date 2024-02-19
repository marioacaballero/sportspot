import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const onSuscription = createAsyncThunk(
  'events/suscription',
  async (dataUser) => {
    try {
      const { data } = await axiosInstance.patch(`/users/${dataUser.id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
