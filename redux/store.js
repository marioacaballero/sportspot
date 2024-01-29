import { configureStore } from '@reduxjs/toolkit'
import usersSlices from './slices/users.slices'
import eventsSlices from './slices/events.slices'

export const store = configureStore({
  reducer: {
    users: usersSlices,
    events: eventsSlices
  }
})
