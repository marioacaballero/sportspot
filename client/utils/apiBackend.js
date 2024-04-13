import axios from 'axios'
// import { apiBackend } from './config'

const axiosInstance = axios.create({
  // baseURL: 'http://212.47.234.94:3000/'
  // baseURL: 'https://api-sportspot.ay-cloud.com/api/'
  // baseURL: 'http://181.209.120.141:3000/'
  baseURL: 'http://192.168.1.179:3000/api'
  // baseURL: 'http://192.168.18.82:3000'
  // maxContentLength: Infinity,
  // maxBodyLength: Infinity
})

export default axiosInstance
