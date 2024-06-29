import { createSlice } from '@reduxjs/toolkit'
import { getAllCollaborators } from '../actions/collaborators'

export const collaboratorsSlices = createSlice({
  name: 'collaborators',
  initialState: {
    allCollaborators: [],
    loading: false,
    error: {}
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllCollaborators.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllCollaborators.fulfilled, (state, action) => {
        state.loading = false
        state.allCollaborators = action.payload
        state.error = null
      })
      .addCase(getAllCollaborators.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

// export const {} = collaboratorsSlices.actions

export default collaboratorsSlices.reducer
