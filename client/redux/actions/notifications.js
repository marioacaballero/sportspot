import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAlNotificationsByUser = createAsyncThunk(
  'notifications/getAll',
  async (recipientId) => {
    try {
      const { data } = await axiosInstance.get('notifications', {
        params: { recipientId }
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getAllNotifications = createAsyncThunk(
  'notifications/getAllNotifications',
  async (recipientId) => {
    try {
      const { data } = await axiosInstance.get('notifications')
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
