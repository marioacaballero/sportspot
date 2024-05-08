import { createSlice } from '@reduxjs/toolkit'
import { getAlNotificationsByUser } from '../actions/notifications'
import { getAllNotifications } from '../actions/notifications'

export const notificationsSlices = createSlice({
  name: 'notifications',
  initialState: {
    userNotifications: [],
    allNotifications: [],
    loading: false
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAlNotificationsByUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAlNotificationsByUser.fulfilled, (state, action) => {
        state.loading = false
        state.userNotifications = action.payload
        state.error = null
      })
      .addCase(getAlNotificationsByUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getAllNotifications.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        state.loading = false
        state.allNotifications = action.payload
        state.error = null
      })
      .addCase(getAllNotifications.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default notificationsSlices.reducer
