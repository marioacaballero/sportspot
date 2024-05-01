import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const createCustomer = createAsyncThunk(
    'stripe/createCustomer',
    async (userData) => {
  
      console.log(userData)
      try {
        const { data } = await axiosInstance.post('/stripe/customer', {name: userData.name, email:  userData.email})
        return data
      } catch (error) {
        throw new Error(error)
      }
    }
  )

export const createSubscription = createAsyncThunk(
    'stripe/createSubscription',
    async ({priceId, customerId}) => {
        try {
            const { data } = await axiosInstance.post(`stripe/subscription/${priceId}`, { customerId })
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
            const { data } = await axiosInstance.post(`stripe/cancel-subscription/${subscriptionId}`)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }
)
  