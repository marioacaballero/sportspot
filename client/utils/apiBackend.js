import axios from 'axios'
// import { API_IP } from '@env'

// console.log(API_IP,"asdasdasd")
const axiosInstance = axios.create({
  // baseURL: 'http://192.168.100.2:3000/api'
  baseURL:'http://c5e7a731-cc55-4137-a1e8-04915e54dee9.pub.instances.scw.cloud:3000/api'
  // API_IP ||
})

export default axiosInstance
