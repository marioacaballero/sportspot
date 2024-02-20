import { createSlice } from '@reduxjs/toolkit'
import { getAlNotificationsByUser } from '../actions/notifications'

export const notificationsSlices = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
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
        state.notifications = action.payload
        state.error = null
      })
      .addCase(getAlNotificationsByUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default notificationsSlices.reducer
