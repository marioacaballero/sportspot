import { createSlice } from '@reduxjs/toolkit'
import {
  createCustomer,
  createSubscription,
  deleteSubscription
} from '../actions/stripe'

export const stripeSlices = createSlice({
  name: 'stripe',
  initialState: {
    clientSecret: '',
    subscriptionId: '',
    customer: {},
  },
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      // crear customer en stripe
      .addCase(createCustomer.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.loadingGet = false
        state.customer = action.payload
        state.error = null
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })

      .addCase(createSubscription.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.loadingGet = false
        state.clientSecret = action.payload.clientSecret
        state.subscriptionId = action.payload.subscriptionId
        state.error = null
      })
      .addCase(createSubscription.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })

      .addCase(deleteSubscription.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(deleteSubscription.fulfilled, (state, action) => {
        state.loadingGet = false
        state.clientSecret = ''
        state.subscriptionId = ''
        state.error = null
      })
      .addCase(deleteSubscription.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })
  }
})

// export const {
//   setEvent,
//   setNameEvent,
//   setDateStart,
//   setDateSuscription,
//   setEventFromPrice,
//   setOrderEvents,
//   setFiltersToFilters,
//   getEventByIdRedux
// } = eventsSlices.actions

export default eventsSlices.reducer
