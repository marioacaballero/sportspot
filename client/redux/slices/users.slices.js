import { createSlice } from '@reduxjs/toolkit'
import {
  getAllUsers,
  getUser,
  login,
  updateUser,
  updateUserRol,
  postUserPreferences,
  favorite,
  getUserByEmail
} from '../actions/users'

export const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: {},
    users: [],
    userToken: '',
    loading: false,
    error: null
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
        state.error = true
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getUserByEmail.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(getUserByEmail.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.error = null
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateUserRol.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUserRol.fulfilled, (state, action) => {
        state.loading = false
        // state.user = action.payload
        state.error = null
      })
      .addCase(updateUserRol.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(postUserPreferences.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(postUserPreferences.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(postUserPreferences.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(favorite.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(favorite.fulfilled, (state, action) => {
        state.loading = false
        if (state.user && state.user.eventFavorites) {
          state.user = {
            ...state.user,
            eventFavorites: [...state.user.eventFavorites, action.payload]
          }
        }
        state.error = null
      })
      .addCase(favorite.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { clearUser } = usersSlices.actions

export default usersSlices.reducer
