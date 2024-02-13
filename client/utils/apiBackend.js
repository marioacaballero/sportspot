import axios from 'axios'
import { apiBackend } from './config'

const axiosInstance = axios.create({
  baseURL: apiBackend,
  maxContentLength: Infinity,
  maxBodyLength: Infinity
})

export default axiosInstance
