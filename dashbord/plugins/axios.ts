import axios, { type AxiosInstance } from 'axios'

export default defineNuxtPlugin(() => {
  const instance: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: instance,
    },
  }
})