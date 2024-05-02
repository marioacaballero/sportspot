import { createSlice } from '@reduxjs/toolkit'
import {
  createCustomer,
  createSubscription,
  deleteSubscription,
  getOneCustomer,
  getSubscription,
  paymentSubscription
} from '../actions/stripe'

export const stripeSlices = createSlice({
  name: 'stripe',
  initialState: {
    customer: {},
    subscriptionId: '',
    clientSecretPayment: '',
    clientSecretSubsription: '',
    subscription: {},
    loadingGet: false,
    error: null
  },
  reducers: {},

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

      .addCase(paymentSubscription.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(paymentSubscription.fulfilled, (state, action) => {
        state.loadingGet = false
        state.clientSecretPayment = action.payload.clientSecret
        state.customer = action.payload.customer
        state.error = null
      })
      .addCase(paymentSubscription.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })

      .addCase(createSubscription.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.loadingGet = false
        state.clientSecretSubsription = action.payload.clientSecret
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
      .addCase(getOneCustomer.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getOneCustomer.fulfilled, (state, action) => {
        state.loadingGet = false
        state.customer = action.payload
        state.error = null
      })
      .addCase(getOneCustomer.rejected, (state, action) => {
        state.loadingGet = false
        state.error = action.payload
      })
      .addCase(getSubscription.pending, (state) => {
        state.loadingGet = true
        state.error = null
      })
      .addCase(getSubscription.fulfilled, (state, action) => {
        state.loadingGet = false
        state.subscription = action.payload
        state.error = null
      })
      .addCase(getSubscription.rejected, (state, action) => {
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

export default stripeSlices.reducer
