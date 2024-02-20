import axios from 'axios'
// import { apiBackend } from './config'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BACKEND
  // maxContentLength: Infinity,
  // maxBodyLength: Infinity
})

export default axiosInstance
