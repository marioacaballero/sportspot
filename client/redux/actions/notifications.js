import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAlNotificationsByUser = createAsyncThunk(
  'notifications/getAll',
  async (recipientId) => {
    console.log('getting notif from', recipientId)
    try {
      const { data } = await axiosInstance.get(
        `notifications/user/${recipientId}`
      )
      console.log('data from user notif: ', data)
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
