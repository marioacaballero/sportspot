import { createSlice } from '@reduxjs/toolkit'

export const usersSlices = createSlice({
  name: 'users',
  initialState: {
    user: { id: 456, name: 'cristian' }
  },
  reducers: {}
})

export default usersSlices.reducer
