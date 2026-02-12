import { useAuthStore } from '~/composables/auth/useAuth'
export default function () {
    const { $axios } = useNuxtApp()
    const signout = async () => {
        const response = await $axios.post('accounting/api/v1/logout')
        console.log(`status logout: ${response.data}`)
        const authStore = useAuthStore()
        await authStore.logout()
    }

    return {
        signout
    }
}