
import { ref } from 'vue'
import Validator from 'validatorjs/dist/validator'


export default function () {
    const userState = useState('userState', () => [] )
    const router = useRouter();

    const errors = ref({})
    const { $axios } = useNuxtApp()

    const user = ref({
        name: "",
        email: "",
        password: "",
        repeat_password: "",
        verificationCode: 0
    })

    const rules = {
        name: 'required',
        email: 'required|email',
        password: 'required|min:6',
        repeat_password: 'required'
    }

    const messages = {
        'required.name': 'نام و نام خانوادگی الزامی می‌باشد',
        'required.email': 'ایمیل الزامی می‌باشد',
        'email.email': 'فرمت ایمیل صحیح نیست',
        'required.password': 'کلمه عبور الزامی می‌باشد',
        'required.repeat_password': 'تکرار کلمه عبور الزامی می‌باشد',
        'min.password': 'کلمه عبور باید حداقل ۶ کاراکتر باشد'
    }

    const validate = async () => {


        errors.value = {}

        const validation = new Validator(user.value, rules, messages)


        if (validation.fails()) {
            errors.value = validation.errors.all()
            return false
        }


        if (user.value.password !== user.value.repeat_password) {
            errors.value = {
                repeat_password: ['کلمه عبور با تکرار آن یکسان نیست']
            }
            return false
        }

        const checkEmail = await $axios.post('accounting/api/v1/verification-email', {
            email: user.value.email.trim()
        })

        if (checkEmail.data.detail == true) {
            errors.value = {
                email: ['ایمیل قبلا در سیستم ثبت شده است.']
            }
            return false
        }

        try {
            const response = await $axios.post('accounting/api/v1/verification-password', {
                password: user.value.password.trim(),
                repeat_password: user.value.repeat_password.trim(),
            })
            console.log(response.data)
        } catch (err) {
            if (err.response?.data?.password) {
                errors.value = {
                    password: err.response.data.password
                }
            } else {
                console.error(err)
            }
        }


        
        router.push('/auth/verification')
        
    }


    return {
        user,
        errors,
        validate
    }

}