import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as any | null,
    isAuthenticated: false
  }),

  actions: {
    setToken(newToken: string, userData: any) {
      this.token = newToken
      this.user = userData
      this.isAuthenticated = true
    },

    logout() {
      this.token = null
      this.user = null
      this.isAuthenticated = false

      if (process.client) {
        const tokenCookie = useCookie('auth_token')
        tokenCookie.value = null
        navigateTo('/auth/signin')
      }
    }
  }
})