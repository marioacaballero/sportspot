import axios from 'axios'
import { API_IP } from '@env'

const axiosInstance = axios.create({
  baseURL:
    'http://192.168.1.179:3000/api' ||
    'http://c5e7a731-cc55-4137-a1e8-04915e54dee9.pub.instances.scw.cloud:3000/api'
})

export default axiosInstance
