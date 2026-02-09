import axios from 'axios'
import { useAuthStore } from '~/composables/auth/useAuth.js'
export default defineNuxtPlugin(async(nuxtApp) => {

  const authStore = useAuthStore()
  await authStore.getToken()
  console.log(`token: ${authStore.token}`)
  const runtimeConfig = useRuntimeConfig()
  const axiosInstance = axios.create({
     baseURL: 'http://127.0.0.1:8000/',
  })
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Token ${authStore.token}`
      return config
    },
    (error) => {
      // Handle request error
      return Promise.reject(error)
    },
  )
  axiosInstance.interceptors.response.use(
    (response) => {
      // Handle successful response
      return response
    },
    (error) => {
      // Handle response error
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


// import axios, { type AxiosInstance } from 'axios'
// import { useAuthStore } from '~/composables/auth/useAuth.js'
// export default defineNuxtPlugin(async (nuxtApp) => {

//   const authStore = useAuthStore()
//   await authStore.getToken()

//   const instance: AxiosInstance = axios.create({
//     baseURL: 'http://127.0.0.1:8000/',
//     timeout: 10000,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   instance.interceptors.request.use(config => {
//     console.log(`token 2: ${authStore.token}`)
//     const token = authStore.token
//     if (token) {
//       config.headers.Authorization = `Bearer ${authStore.token}`
//     }
//     return config

    


//   })

//   return {
//     provide: {
//       axios: instance,
//     },
//   }
// })