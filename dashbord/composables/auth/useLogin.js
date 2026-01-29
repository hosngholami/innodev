
import { ref, reactive } from 'vue';
import { setCookie } from 'h3'
import { useAuthStore } from '~/composables/auth/useAuth'


export default function () {

    const status = ref({})

    const router = useRouter()
    const form = reactive({
        email: "",
        password: ""
    })
    const authStore = useAuthStore()

    const authentication = async () => {
        await authStore.setToken("ABCD", "Hossein")

        const link = document.createElement('a')
        link.href = "/"
        link.click()
        link.remove()

    }

    return {
        form,
        status,
        authentication
    }
}