import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'http://192.168.0.77:3000/api'
  baseURL:
    'http://c5e7a731-cc55-4137-a1e8-04915e54dee9.pub.instances.scw.cloud:3000/api'
  // API_IP ||
})

export default axiosInstance
