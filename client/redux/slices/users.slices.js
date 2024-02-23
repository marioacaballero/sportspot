import { createSlice } from '@reduxjs/toolkit'
import { changePassword, getUser, login } from '../actions/users'

export const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
    userToken: '',
    loading: false,
    error: false,
    isOkay: false
  },
  reducers: {
    clearUser: (state) => {
      state.user = null
      state.userToken = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.userToken = action.payload.accesToken
        state.user = action.payload.user
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.error = null
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false
        state.isOkay = action.payload
        state.error = null
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { clearUser } = usersSlices.actions

export default usersSlices.reducer
