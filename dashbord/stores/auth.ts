import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as any | null,
    isAuthenticated: false
  }),

  actions: {
    // موقع لاگین موفق
    setToken(newToken: string, userData: any) {
      this.token = newToken
      this.user = userData
      this.isAuthenticated = true

      // ذخیره در localStorage
      if (process.client) {
        localStorage.setItem('token', newToken)
        
      }
    },

    // موقع لود اپ یا رفرش
    loadFromStorage() {
      if (process.client) {
        const storedToken = localStorage.getItem('token')

        if (storedToken) {
          this.token = storedToken
          this.isAuthenticated = true
        }

      }
    },

    logout() {
      this.token = null
      this.user = null
      this.isAuthenticated = false

      if (process.client) {
        localStorage.removeItem('token')
      }

      navigateTo('/auth/singin')
    }
  }
})