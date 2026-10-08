<template>
    <div class="bg-white">
        <div class="row authentication two-step-verification authentication-cover-main mx-0">
            <div class="col-xxl-6 col-xl-7">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col-xxl-6 col-xl-9 col-lg-6 col-md-6 col-sm-8 col-12">
                        <div class="card custom-card my-auto border">
                            <div class="card-body p-4 p-sm-5">
                                <p class="h5 mb-2 text-center">کد تأیید</p>
                                <p class="mb-4 text-muted op-7 fw-normal text-center fs-12">کد 4 رقمی به ایمیل ارسال شد.</p>
                                   
                                <div class="row gy-3">
                                    <div class="col-xl-12 mb-2">
                                        <div class="row">
                                            <div class="col-3">
                                                <input type="text" class="form-control text-center" id="one"
                                                    maxlength="1" onkeyup="clickEvent(this,'two')">
                                            </div>
                                            <div class="col-3">
                                                <input type="text" class="form-control text-center" id="two"
                                                    maxlength="1" onkeyup="clickEvent(this,'three')">
                                            </div>
                                            <div class="col-3">
                                                <input type="text" class="form-control text-center" id="three"
                                                    maxlength="1" onkeyup="clickEvent(this,'four')">
                                            </div>
                                            <div class="col-3">
                                                <input type="text" class="form-control text-center" id="four"
                                                    maxlength="1">
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
                                        <button type="button" @click="verify" class="btn btn-primary">تأیید</button>
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
                            <h3 class="text-fixed-white mb-1 fw-medium">خوش آمدی {{user[0].name}}!</h3>
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
import useVerfication from '~/composables/auth/useVerfication';
const { code, user, verify } = useVerfication()



definePageMeta({
    layout: ["auth"]
})

onMounted(() => {
    useHead({
        script: [
            {
                src: 'libs/bootstrap/js/bootstrap.bundle.min.js',
                defer: true
            },
            {
                src: 'js/two-step-verification.js',
                defer: true
            }
        ]
    })
})

</script>