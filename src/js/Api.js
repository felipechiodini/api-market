import Axios from 'axios'
import Router from '@/router'
import { useUserStore } from '@/stores/user'

const Api = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

Api.interceptors.request.use(function (config) {
  const { token } = useUserStore()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

Api.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 503) {
    Router.push({ name: 'maintenance' })
  }

  return Promise.reject(error)
})

export default Api
