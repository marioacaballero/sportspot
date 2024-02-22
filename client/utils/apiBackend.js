import axios from 'axios'
// import { apiBackend } from './config'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.47:3000/'
  // maxContentLength: Infinity,
  // maxBodyLength: Infinity
})

export default axiosInstance
