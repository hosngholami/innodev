<template>
    <div class="authentication-background">
        <div class="container-lg">
            <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                    <div class="card custom-card my-4">
                        <div class="card-body p-5">
                            <div class="mb-4 d-flex justify-content-center">
                                {{ errors.name }}
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
                                    <input :class="errors.name ? 'invalid-input' : ''" v-model="user.name" type="text"
                                        class="form-control invalid" placeholder="نام و نام خانوادگی">
                                    <div v-if="errors.name" class="error-feedback">
                                        {{ errors.name[0] }}
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <label for="signup-firstname" class="form-label text-default">ایمیل<sup
                                            class="fs-12 text-danger">*</sup></label>
                                    <input v-model="user.email" type="text" :class="errors.email ? 'invalid-input' : ''"
                                        class="form-control" placeholder="ایمیل">
                                    <div v-if="errors.email" class="error-feedback">
                                        {{ errors.email[0] }}
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <label for="signup-password" class="form-label text-default">رمز عبور<sup
                                            class="fs-12 text-danger">*</sup></label>
                                    <div class="position-relative">
                                        <input v-model="user.password" type="password"
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
                                        <input v-model="user.repeat_password" class="form-control create-password-input"
                                            :class="errors.repeat_password ? 'invalid-input' : ''"
                                            id="signup-confirmpassword" type="password" placeholder="تأیید رمز عبور">
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
                                <button type="button" @click="validate" class="btn btn-primary">ایجاد حساب
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
</template>
<script setup>

import useRegister from '~/composables/login/useRegister';
const { user, errors, validate } = useRegister();

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