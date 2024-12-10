import { BASE_API } from '@/utils/Constant'
import axios from 'axios'

const api = axios.create({
  baseURL: BASE_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
