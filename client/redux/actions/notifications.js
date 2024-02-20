import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAlNotificationsByUser = createAsyncThunk(
  'notifications/getAll',
  async (recipientId) => {
    try {
      const { data } = await axiosInstance.get('notifications', {
        params: { recipientId }
      })
      console.log(data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
