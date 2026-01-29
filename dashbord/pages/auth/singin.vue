<template>

    <body class="authentication-background">

        <div class="container">
            <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                    <div class="card custom-card my-4">
                        <div class="card-body p-5">
                           
                            <p class="h5 mb-2 text-center">ورود</p>
                            <p class="mb-4 text-muted op-7 fw-normal text-center">خوش برگشتی محسن!</p>
                            <div class="d-flex mb-3 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                <button
                                    class="btn btn-lg btn-light-ghost border d-flex align-items-center justify-content-center flex-fill bg-light">
                                    <span class="avatar avatar-xs flex-shrink-0">
                                        <img src="/images/media/apps/google.png" alt="">
                                    </span>
                                    <span class="lh-1 ms-2 fs-13 text-default">ورود با گوگل</span>
                                </button>
                            </div>
                            <div class="text-center my-3 authentication-barrier">
                                <span>یا</span>
                            </div>
                            <div class="row gy-3">
                                <div class="col-xl-12">
                                    <label for="signin-username" class="form-label text-default">نام کاربری<sup
                                            class="fs-12 text-danger">*</sup></label>
                                    <input v-model="form.email" type="text" class="form-control" id="signin-username"
                                        placeholder="نام کاربری">
                                </div>
                                <div class="col-xl-12 mb-2">
                                    <label for="signin-password" class="form-label text-default d-block">
                                        رمز عبور<sup class="fs-12 text-danger">*</sup>
                                        <nuxt-link to="/auth/rest-password"
                                            class="float-end fw-normal text-muted">فراموشی رمز عبور؟</nuxt-link>
                                    </label>
                                    <div class="position-relative">
                                        <input v-model="form.password" type="password"
                                            class="form-control create-password-input" id="signin-password"
                                            placeholder="رمز عبور">
                                        <a href="javascript:void(0);" class="show-password-button text-muted"
                                            onclick="createpassword('signin-password',this)" id="button-addon2"><i
                                                class="ri-eye-off-line align-middle"></i></a>
                                    </div>
                                    <div class="mt-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label text-muted fw-normal" for="defaultCheck1">
                                                مرا به خاطر بسپار؟
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <br />
                            <div v-if="status.error" class="alert alert-danger" role="alert">
                                {{ status.error }}
                                
                            </div>
                            <div v-if="status.success" class="alert alert-success" role="alert">
                               {{ status.success }}
                            </div>
                            <div class="d-grid mt-4">
                                <button type="button" @click="authentication" class="btn btn-primary">ورود</button>
                            </div>
                            <div class="text-center">
                                <p class="text-muted mt-3 mb-0">حساب کاربری ندارید؟ <nuxt-link to="/auth/singup"
                                        class="text-primary">ثبت نام</nuxt-link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>

import useLogin from '~/composables/auth/useLogin';

const { form, status, authentication } = useLogin();


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
                src: 'js/show-password.js',
                defer: true
            }
        ]
    })
})
</script>