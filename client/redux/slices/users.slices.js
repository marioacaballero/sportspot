import { createSlice } from '@reduxjs/toolkit'
import { register } from '../actions/users'

export const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default usersSlices.reducer
