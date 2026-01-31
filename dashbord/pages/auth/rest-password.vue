<template>
    <div class="authentication-background">
        <div class="container-lg" style="direction: rtl;">
            <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                    <div class="card custom-card my-4">
                        <div class="card-body p-5">
                            <div class="mb-3 d-flex justify-content-center">
                                <a href="index.html">
                                    <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                                    <img src="/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white">
                                </a>
                            </div>
                            <p class="h5 mb-2 text-center">بازنشانی رمز عبور</p>
                            <p class="mb-4 text-muted op-7 fw-normal text-center fs-14">سلام محسن!</p>
                            <div class="row gy-3">
                                <div class="col-xl-12">
                                    <label for="reset-password" class="form-label text-default">رمز عبور فعلی <sup
                                            class="fs-12 text-danger">*</sup></label>
                                    <div class="position-relative">
                                        <input type="password" class="form-control create-password-input"
                                            id="reset-password" placeholder="رمز عبور فعلی">
                                        <a href="javascript:void(0);" class="show-password-button text-muted"
                                            onclick="createpassword('reset-password',this)" id="button-addon2">
                                            <i class="ri-eye-off-line align-middle"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <label for="reset-newpassword" class="form-label text-default">رمز عبور جدید <sup
                                            class="fs-12 text-danger">*</sup></label>
                                    <div class="position-relative">
                                        <input type="password" class="form-control create-password-input"
                                            id="reset-newpassword" placeholder="رمز عبور جدید">
                                        <a href="javascript:void(0);" class="show-password-button text-muted"
                                            onclick="createpassword('reset-newpassword',this)" id="button-addon21">
                                            <i class="ri-eye-off-line align-middle"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-12 mb-2">
                                    <label for="reset-confirmpassword" class="form-label text-default">تأیید رمز عبور
                                        <sup class="fs-12 text-danger">*</sup></label>
                                    <div class="position-relative">
                                        <input type="password" class="form-control create-password-input"
                                            id="reset-confirmpassword" placeholder="تأیید رمز عبور">
                                        <a href="javascript:void(0);" class="show-password-button text-muted"
                                            onclick="createpassword('reset-confirmpassword',this)" id="button-addon22">
                                            <i class="ri-eye-off-line align-middle"></i>
                                        </a>
                                    </div>
                                    <div class="mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label text-muted fw-normal" for="defaultCheck1">
                                                مرا به خاطر بسپار؟
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid mt-4">
                                <a href="sign-in-basic.html" class="btn btn-primary">ایجاد</a>
                            </div>
                            <div class="text-center">
                                <p class="text-muted mt-3">رمز عبور خود را به خاطر آورده‌اید؟ <nuxt-link
                                        to="/auth/singin" class="text-primary">ورود</nuxt-link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Start::custom-scripts -->

        <!-- Bootstrap JS -->
    </div>

</template>


<script setup>


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