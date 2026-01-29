import { reactive } from "vue"

export default function () {

    const user = useState('userState')
    const code = reactive([0, 0, 0, 0])
    user.value.verificationCode = 1234
    const verify = () => {
        console.log(user.value)
        console.log(code)
    }

    return {
        code,
        user,
        verify
    }


} 