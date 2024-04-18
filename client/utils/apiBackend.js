import axios from 'axios'
// import { apiBackend } from './config'

const axiosInstance = axios.create({
  // baseURL: 'http://212.47.234.94:3000/'
  // baseURL: 'https://api-sportspot.ay-cloud.com/api/'
  // baseURL: 'http://181.209.120.141:3000/'
  baseURL: 'http://c5e7a731-cc55-4137-a1e8-04915e54dee9.pub.instances.scw.cloud:3000/api'
  // baseURL: 'http://192.168.0.144:3000/api'
  // baseURL: 'http://192.168.18.82:3000'
  // maxContentLength: Infinity,
  // maxBodyLength: Infinity
})

export default axiosInstance
