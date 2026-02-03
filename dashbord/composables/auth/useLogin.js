
import { ref, reactive } from 'vue';
import { useAuthStore } from '~/composables/auth/useAuth'


export default function () {

    const errors = ref({})
    const { $axios } = useNuxtApp()

    const form = reactive({
        email: "",
        password: ""
    })
    const authStore = useAuthStore()

    const authentication = async () => {

        errors.value = {}

        try {
            const response = await $axios.post('accounting/api/v1/login', form)
            console.log(response.data.token)
            await authStore.setToken("token", response.data.token)

            const link = document.createElement('a')
            link.href = "/"
            link.click()
            link.remove()
        } catch (error) {
            if(error.response){
                errors.value = {
                    auth: ["نام کاربری / کلمه عبور اشتباه است."]
                }
            }
        }


    }

    return {
        form,
        errors,
        authentication
    }
}