import { configureStore } from '@reduxjs/toolkit'
import usersSlices from './slices/users.slices'
import eventsSlices from './slices/events.slices'
import sportsSlices from './slices/sports.slices'
import suscriptionsSlices from './slices/suscriptionsSlices'
import notificationsSlices from './slices/notifications.slices'

export const store = configureStore({
  reducer: {
    users: usersSlices,
    events: eventsSlices,
    sports: sportsSlices,
    suscriptions: suscriptionsSlices,
    notifications: notificationsSlices
  }
})
