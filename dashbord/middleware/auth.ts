import { useAuthStore } from '~/composables/auth/useAuth.js'
export default defineNuxtRouteMiddleware(async (to) => {
    const publicPages = ['/authentication/singin', '/authentication/login']

    if (publicPages.includes(to.path)) {
        return
    }


    const authStore = useAuthStore()
    await authStore.getToken()


    if (authStore.token == null) {
        return navigateTo({
            path: '/authentication/signin',
            query: { redirect: to.fullPath }
        })
    }
})


