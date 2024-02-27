import axios from 'axios'
// import { apiBackend } from './config'

const axiosInstance = axios.create({
  baseURL: 'http://212.47.234.94:3000'
  // baseURL: 'http://192.168.18.82:3000'
  // maxContentLength: Infinity,
  // maxBodyLength: Infinity
})

export default axiosInstance
