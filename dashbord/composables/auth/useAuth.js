import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    isAuthenticated: false
  }),

  actions: {
    setToken(newToken, userData) {

      this.token = newToken
      this.user = userData
      this.isAuthenticated = true

      if (process.client) {
        // localStorage.setItem('auth_token', newToken)
        // localStorage.setItem('auth_user', JSON.stringify(userData))
        const tokenCookie = useCookie('auth_token', {
          maxAge: 60 * 60 * 24 * 7,       // ۷ روز
          secure: process.env.NODE_ENV === 'production',
          httpOnly: false,                // اگر true کنی → store.token روی کلاینت null می‌شه (امن‌تر)
          sameSite: 'lax'
        })
        tokenCookie.value = newToken
      }
    },
    getToken() {
      const tokenCookie = useCookie('auth_token')
      if (tokenCookie.value) {
        this.token = tokenCookie.value
        this.isAuthenticated = true
      }

    },

    // این متد حتماً باید وجود داشته باشد
    loadFromStorage() {
      if (process.client) {
        const storedToken = localStorage.getItem('auth_token')
        const storedUser = localStorage.getItem('auth_user')

        if (storedToken) {
          this.token = storedToken
          this.isAuthenticated = true
        }

        if (storedUser) {
          try {
            this.user = JSON.parse(storedUser)
          } catch {
            console.warn('خطا در parse کردن کاربر از localStorage')
          }
        }
      }
    },

    logout() {
      this.token = null
      this.user = null
      this.isAuthenticated = false

      if (process.client) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
      }

      navigateTo('/auth/signin')
    }
  }
})