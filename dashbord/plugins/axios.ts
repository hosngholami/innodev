import axios from 'axios'
import { useAuthStore } from '~/composables/auth/useAuth.js'
export default defineNuxtPlugin(async (nuxtApp) => {

  const authStore = useAuthStore()
  await authStore.getToken()
  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
  
  })
  axiosInstance.interceptors.request.use(
    (config) => {
      const isLoginRequest = config.url?.match(/\/(login|signin|auth\/token)/i)
      if (!isLoginRequest) {
        config.headers.Authorization = `Token ${authStore.token}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        useAuthStore().logout()
      }
      return Promise.reject(error)
    },
  )
  return {
    provide: { axios: axiosInstance },
  }
})
