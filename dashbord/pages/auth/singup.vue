<template>


    <div class="authentication-background" v-if="step == 0">


        <div class="container-lg">
            <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                    <div class="card custom-card my-4">
                        <div class="card-body p-5">
                            <div class="mb-4 d-flex justify-content-center">
                                <a href="/">
                                    <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                                    <img src="/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white">
                                </a>
                            </div>
                            <p class="h5 mb-2 text-center">ثبت نام</p>
                            <p class="mb-4 text-muted op-7 fw-normal text-center">خوش آمدید! با ایجاد حساب کاربری خود
                                شروع
                                کنید.</p>
                            <div class="d-flex mb-3 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                <button
                                    class="btn btn-lg border d-flex align-items-center justify-content-center flex-fill btn-light">
                                    <span class="avatar avatar-xs">
                                        <img src="/images/media/apps/google.png" alt="">
                                    </span>
                                    <span class="lh-1 ms-2 fs-13 text-default">ثبت نام با گوگل</span>
                                </button>
                            </div>
                            <div class="text-center my-3 authentication-barrier">
                                <span>یا</span>
                            </div>
                            <div class="row gy-3">
                                <div class="col-xl-12">
                                    <label for="signup-firstname" class="form-label text-default">نام<sup
                                            class="fs-12 text-danger">*</sup></label>
                                    <input :class="errors.name ? 'invalid-input' : ''" v-model="form.name" type="text"
                                        class="form-control invalid" placeholder="نام و نام خانوادگی">
                                    <div v-if="errors.name" class="error-feedback">
                                        {{ errors.name[0] }}
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <label for="signup-firstname" class="form-label text-default">ایمیل<sup
                                            class="fs-12 text-danger">*</sup></label>
                                    <input v-model="form.email" type="text" :class="errors.email ? 'invalid-input' : ''"
                                        class="form-control" placeholder="ایمیل">
                                    <div v-if="errors.email" class="error-feedback">
                                        {{ errors.email[0] }}
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <label for="signup-password" class="form-label text-default">رمز عبور<sup
                                            class="fs-12 text-danger">*</sup></label>
                                    <div class="position-relative">
                                        <input v-model="form.password" type="password"
                                            :class="errors.password ? 'invalid-input' : ''"
                                            class="form-control create-password-input" id="signup-password"
                                            placeholder="رمز عبور">
                                        <div v-if="errors.password" class="error-feedback">
                                            {{ errors.password[0] }}
                                        </div>
                                        <a href="javascript:void(0);" class="show-password-button text-muted"
                                            onclick="createpassword('signup-password',this)" id="button-addon2">
                                            <i class="ri-eye-off-line align-middle"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <label for="signup-confirmpassword" class="form-label text-default">تأیید رمز
                                        عبور<sup class="fs-12 text-danger">*</sup></label>
                                    <div class="position-relative">
                                        <input v-model="form.repeat_password" 
                                            :class="errors.password ? 'invalid-input' : ''"
                                            type="password"
                                            class="form-control create-password-input" id="signup-confirmpassword"
                                            placeholder="تأیید رمز عبور">
                                        <div v-if="errors.repeat_password" class="error-feedback">
                                            {{ errors.repeat_password[0] }}
                                        </div>
                                        <a href="javascript:void(0);" class="show-password-button text-muted"
                                            onclick="createpassword('signup-confirmpassword',this)" id="button-addon21">
                                            <i class="ri-eye-off-line align-middle"></i>
                                        </a>
                                    </div>
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label text-muted fw-normal fs-14" for="defaultCheck1">
                                            با ایجاد حساب کاربری، شما با
                                            <a href="terms-conditions.html" class="text-success"><u>شرایط و
                                                    قوانین</u></a> و
                                            <a class="text-success"><u>سیاست حفظ حریم خصوصی</u></a> ما موافقت می‌کنید.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid mt-4">
                                <button type="button" @click="onLogin" class="btn btn-primary">ایجاد حساب
                                    کاربری</button>
                            </div>
                            <div class="text-center">
                                <p class="text-muted mt-3 mb-0">قبلاً حساب کاربری دارید؟ <nuxt-link to="/auth/singin"
                                        class="text-primary">ورود</nuxt-link></p>
                            </div>
                            <div class="btn-list text-center mt-3">
                                <button class="btn btn-icon btn-wave btn-primary-light">
                                    <i class="ri-facebook-line lh-1 align-center fs-17"></i>
                                </button>
                                <button class="btn btn-icon btn-wave btn-primary1-light">
                                    <i class="ri-twitter-x-line lh-1 align-center fs-17"></i>
                                </button>
                                <button class="btn btn-icon btn-wave btn-primary2-light">
                                    <i class="ri-instagram-line lh-1 align-center fs-17"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="bg-white" v-if="step == 1">
        <div class="row authentication two-step-verification authentication-cover-main mx-0">
            <div class="col-xxl-6 col-xl-7">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-xxl-6 col-xl-9 col-lg-6 col-md-6 col-sm-8 col-12">
                        <div class="card custom-card my-auto border">
                            <div class="card-body p-4 p-sm-5">
                                <p class="h5 mb-2 text-center">کد تأیید</p>
                                <p class="mb-4 text-muted op-7 fw-normal text-center fs-12">کد ۴ رقمی ارسال‌شده به شماره
                                    موبایل ******850 را وارد کنید.</p>
                                <div class="row gy-3">
                                    <div class="col-xl-12 mb-2">
                                        <div class="row">
                                            <div class="col-3">
                                                <input v-model="verificationCode[3]" type="text"
                                                    class="form-control text-center" id="one" maxlength="1"
                                                    onkeyup="clickEvent(this,'two')">
                                            </div>
                                            <div class="col-3">
                                                <input v-model="verificationCode[2]" type="text"
                                                    class="form-control text-center" id="two" maxlength="1"
                                                    onkeyup="clickEvent(this,'three')">
                                            </div>
                                            <div class="col-3">
                                                <input v-model="verificationCode[1]" type="text"
                                                    class="form-control text-center" id="three" maxlength="1"
                                                    onkeyup="clickEvent(this,'four')">
                                            </div>
                                            <div class="col-3">
                                                <input v-model="verificationCode[0]" type="text"
                                                    class="form-control text-center" id="four" maxlength="1">
                                            </div>
                                        </div>
                                        <div class="form-check mt-2">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label fs-14" for="defaultCheck1">
                                                کدی دریافت نکردید؟<a href="mail.html"
                                                    class="text-primary ms-2 d-inline-block">ارسال مجدد</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 d-grid mt-2">
                                        <button @click="onVerification" type="button"
                                            class="btn btn-primary">تأیید</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-xl-5 col-lg-12 d-xl-block d-none px-0">
                <div class="authentication-cover overflow-hidden">
                    <div class="authentication-cover-logo">
                        <a href="index.html">
                            <img src="./assets/images/brand-logos/desktop-white.png" alt=""
                                class="authentication-brand desktop-white">
                        </a>
                    </div>
                    <div class="aunthentication-cover-content d-flex align-items-center justify-content-center">
                        <div>
                            <h3 class="text-fixed-white mb-1 fw-medium">خوش آمدی {{ form.name }}!</h3>
                            <h6 class="text-fixed-white mb-3 fw-medium">ورود به حساب کاربری</h6>
                            <p class="text-fixed-white mb-1 op-6">به پنل مدیریت خوش آمدید. لطفاً برای مدیریت ابزارهای
                                مدیریتی خود و نظارت بر فعالیت‌های پلتفرم وارد شوید. اطلاعات ورود شما ضامن امنیت و عملکرد
                                سیستم است.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import Validator from 'validatorjs/dist/validator'




const code = reactive(["1", "2", "3", "5"])

const step = ref(0)


const errors = ref({})


const form = reactive({
    name: "",
    email: "",
    password: "",
    repeat_password: ""
})
const rules = {
    name: 'required',
    email: 'required|email',
    password: 'required',
    repeat_password: 'required'
}


const verificationCode = reactive(["", "", "", ""])


async function onVerification() {
    const isValid = code.every((item, index) => item == verificationCode[index])
    if (isValid) {
        console.log("you'r welcome")
    }
    else {
        console.log('password is incrroect')
    }
}

const onLogin = async () => {

    const validation = new Validator(form, rules, {
        'required.name': 'نام و نام خانوادگی الزامی می باشد',
        'required.email': 'ایمیل الزامی می‌باشد',
        'required.password': 'کلمه عبور الزامی می‌باشد',
        'required.repeat_password': 'تکرار کلمه عبور الزامی می‌باشد',
        'email.email': 'فرمت ایمیل به درستی وارد نشده است'
    })


    if (validation.fails()) {
        errors.value = validation.errors.all()
        return

    }


    if (form.password !== form.repeat_password) {
        validation.errors.add(
            'repeat_password',
            'کلمه عبور با تکرار آن یکسان نیست'
        )
        errors.value = validation.errors.all()
        return

    }

    const isExisistEmail = await isEmailExists(form.email)
    if (isExisistEmail == true) {
        validation.errors.add(
            'email',
            'این ایمیل قبلاً در سیستم ثبت شده است'
        )
        errors.value = validation.errors.all()
        return

    }

    if (validation.passes()) {
        errors.value = {}
        step.value += 1
    }

}

const isEmailExists = async (email) => {

    const response = await axios.post('http://127.0.0.1:8000/accounting/api/v1/email',
        { email }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data.detail
}


definePageMeta({
    layout: false
})

onMounted(() => {
    useHead({
        script: [
            {
                src: 'js/authentication-main.js',
                defer: true
            },
            {
                src: 'libs/bootstrap/js/bootstrap.bundle.min.js',
                defer: true
            },

            {
                src: 'js/show-password.js',
                defer: true
            }




        ]
    })
})

</script>