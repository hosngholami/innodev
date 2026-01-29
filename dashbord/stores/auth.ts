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
        localStorage.setItem('auth_token', newToken)
        localStorage.setItem('auth_user', JSON.stringify(userData))
      }
    },

    // موقع لود اپ یا رفرش
    loadFromStorage() {
      if (process.client) {
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('token')

        if (storedToken) {
          this.token = storedToken
          this.isAuthenticated = true
        }

        if (storedUser) {
          try {
            this.user = JSON.parse(storedUser)
          } catch {}
        }
      }
    },

    logout() {
      this.token = null
      this.user = null
      this.isAuthenticated = false

      if (process.client) {
        localStorage.removeItem('token')
        localStorage.removeItem('token')
      }

      navigateTo('/auth/singin')
    }
  }
})