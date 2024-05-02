import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createCustomer = createAsyncThunk(
  'stripe/createCustomer',
  async (userData) => {
    try {
      const { data } = await axiosInstance.post('/stripe/customer', {
        name: userData.name,
        email: userData.email
      })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getOneCustomer = createAsyncThunk(
  'stripe/getOneCustomer',
  async (email) => {
    try {
      const { data } = await axiosInstance.get(`/stripe/customer/${email}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const getSubscription = createAsyncThunk(
  'stripe/getSubscription',
  async (customerId) => {
    try {
      const { data } = await axiosInstance.get(
        `/stripe/subscription/${customerId}`
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const paymentSubscription = createAsyncThunk(
  'stripe/paymentSubscription',
  async ({ priceId, customerId }) => {
    try {
      const { data } = await axiosInstance.post(`stripe/payment/${priceId}`, {
        customerId
      })
      console.log(data, 'la data en action')
      return { customer: data.customer, clientSecret: data.clientSecret }
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const createSubscription = createAsyncThunk(
  'stripe/createSubscription',
  async ({ priceId, customerId, paymentMethodId }) => {
    try {
      const { data } = await axiosInstance.post(
        `stripe/subscription/${priceId}`,
        { customerId, paymentMethodId }
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)

export const deleteSubscription = createAsyncThunk(
  'stripe/deleteSubscription',
  async (subscriptionId) => {
    try {
      const { data } = await axiosInstance.post(
        `stripe/cancel-subscription/${subscriptionId}`
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
