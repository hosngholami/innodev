<template>
    <!-- Page Header -->
    <div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
        <div>
            <nav>
                <ol class="breadcrumb mb-1">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">برنامه‌ها</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">پروژه‌ها</a></li>
                    <li class="breadcrumb-item active" aria-current="page">ایجاد پروژه</li>
                </ol>
            </nav>
            <h1 class="page-title fw-medium fs-18 mb-0">ایجاد پروژه</h1>
        </div>
        <div class="btn-list">
            <button class="btn btn-white btn-wave">
                <i class="ri-filter-3-line align-middle me-1 lh-1"></i> فیلتر
            </button>
            <button class="btn btn-primary btn-wave me-0">
                <i class="ri-share-forward-line me-1"></i> اشتراک‌گذاری
            </button>
        </div>
    </div>

    <!-- Page Header Close -->

    <!-- Start::row-1 -->

    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        ایجاد پروژه
                    </div>
                </div>
                <div class="card-body">
                    <div class="row gy-3">
                        <div class="col-xl-6" v-for="form in formList">

                            <label class="form-label">{{ form.label }}:</label>
                            <div class="form-group" v-if="form.type == 'text'">
                                <div class="input-group">
                                    <input v-if="form.type == 'text'" type="text" class="form-control" placeholder="">
                                </div>
                            </div>

                            <div class="form-group" v-if="form.type == 'password'">
                                <div class="input-group">
                                    <input v-if="form.type == 'password'" type="password" class="form-control"
                                        placeholder="">
                                </div>
                            </div>

                            <div class="form-group" v-if="form.type == 'date'">
                                <div class="input-group">
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                    <input type="text" class="form-control" id="startDate"
                                        placeholder="تاریخ و زمان را انتخاب کنید">
                                </div>
                            </div>

                            <div class="form-group" v-if="form.type == 'mutliSelected'">
                                <select class="form-control" name="assigned-team-members" id="assigned-team-members"
                                    multiple="">
                                    <option v-for="option in form.options" value="{{ option.value }}"> {{ option.label
                                        }}</option>

                                </select>
                            </div>

                            <div class="form-group" v-if="form.type == 'selected'">

                                <select class="form-control" data-trigger="" name="choices-single-default1"
                                    id="choices-single-default1">
                                    <option v-for="option in form.options" value="{{ option.value }}">{{ option.label }}
                                    </option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary-light btn-wave ms-auto float-end">ایجاد پروژه</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const formList = [

    { key: "username", type: 'text', label: "نام کاربری" },
    { key: "password", type: 'password', label: "کلمه عبور" },
    { key: "date_from", type: 'date', label: "تاریخ شروع" },
    { key: "date_to", type: 'date', label: "تاریخ پایان" },
    {
        key: "status", type: 'mutliSelected', label: "وضعیت",
        options: [
            { label: "تکمیل شده", value: "1" },
            { label: "درحال انجام", value: "2" },
            { label: "متوقف شده", value: "3" },
        ]
    },

    {
        key: "status-single", type: 'selected', label: "وضعیت",
        options: [
            { label: "تکمیل شده", value: "1" },
            { label: "درحال انجام", value: "2" },
            { label: "متوقف شده", value: "3" },
            { label: "تست", value: "4" },
        ]
    },
]



definePageMeta({
    middleware: ["auth"]
})



onMounted(() => {
    useHead({
        script: [
            {
                src: '/js/create-project.js',
                defer: true
            },
            {
                src: '/js/sticky.js',
                defer: true
            },
            {
                src: 'libs/quill/quill.js',
                defer: true
            },
            {
                src: 'libs/filepond/filepond.min.js',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.js',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-image-exif-orientation/filepond-plugin-image-exif-orientation.min.js',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-file-validate-size/filepond-plugin-file-validate-size.min.js',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-file-encode/filepond-plugin-file-encode.min.js',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-image-edit/filepond-plugin-image-edit.min.j',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-file-validate-type/filepond-plugin-file-validate-type.min.js',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-image-crop/filepond-plugin-image-crop.min.js',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-image-resize/filepond-plugin-image-resize.min.js',
                defer: true
            },
            {
                src: 'libs/filepond-plugin-image-transform/filepond-plugin-image-transform.min.js',
                defer: true
            },
        ]
    })
})

</script>
