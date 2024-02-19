import { createSlice } from '@reduxjs/toolkit'
import { getAllSports } from '../actions/sports'

export const sportsSlices = createSlice({
  name: 'sports',
  initialState: {
    sports: [],
    sport: {},
    loading: false
  },
  reducers: {
    setSport: (state, action) => {
      state.sport = action.payload
      // const filterSports = state.sports.filter((el) => el.name === state.sport)
      // state.sport = filterSports
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllSports.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllSports.fulfilled, (state, action) => {
        state.loading = false
        state.sports = action.payload
        state.error = null
      })
      .addCase(getAllSports.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})
export const { setSport } = sportsSlices.actions

export default sportsSlices.reducer
