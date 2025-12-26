import axios from 'axios'
import { ref } from 'vue'
import Validator from 'validatorjs/dist/validator'


export default function () {
    const errors = ref({})

    const user = ref({
        name: "",
        email: "",
        password: "",
        repeat_password: ""
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

        const checkEmail = await axios.post('http://127.0.0.1:8000/accounting/api/v1/email',
            {
                email: user.value.email.trim()
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )

        if(checkEmail.data.detail == true){
            errors.value = {
                email: ['ایمیل قبلا در سیستم ثبت شده است.']
            }
            return false
        }
        return true
    }

    return {
        user,
        errors,
        validate
    }
}