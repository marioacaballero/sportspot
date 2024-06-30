import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utils/apiBackend'

export const getAllCollaborators = createAsyncThunk(
  'collaborators/getAllCollaborators',
  async () => {
    try {
      const { data } = await axiosInstance.get('/collaborators')
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const postCollaborator = createAsyncThunk(
  'collaborators/postCollaborator',
  async (body) => {
    try {
      const { data } = await axiosInstance.post('/collaborators', body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const updateCollaborator = createAsyncThunk(
  'collaborators/updateCollaborator',
  async ({ collaboratorId, body }) => {
    try {
      const { data } = await axiosInstance.patch(
        `/collaborators/${collaboratorId}`,
        body
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
export const deleteCollaborator = createAsyncThunk(
  'collaborators/deleteCollaborator',
  async (collaboratorId) => {
    console.log('deleting collaborator', collaboratorId)
    try {
      const { data } = await axiosInstance.delete(
        `/collaborators/${collaboratorId}`
      )
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
)
