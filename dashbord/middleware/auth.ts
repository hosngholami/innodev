import { useAuthStore } from '~/composables/auth/useAuth.js'
export default defineNuxtRouteMiddleware(async (to) => {
    const publicPages = ['/auth/singin', '/auth/login']

    if (publicPages.includes(to.path)) {
        return
    }


    const authStore = useAuthStore()
    await authStore.getToken()


    if (authStore.token == null) {
        return navigateTo({
            path: '/auth/signin',
            query: { redirect: to.fullPath }
        })
    }
})


