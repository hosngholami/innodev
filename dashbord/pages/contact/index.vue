<script setup>
import axios from "axios";
</script>


<template>
    <div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
        <div>
            <nav>
                <ol class="breadcrumb mb-1">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">صفحات</a></li>
                    <li class="breadcrumb-item active" aria-current="page">لیست پیام های دریافتی</li>
                </ol>
            </nav>
            <h1 class="page-title fw-medium fs-18 mb-0">لیست پیام های دریافتی</h1>
        </div>
        <div class="btn-list">
            <button class="btn btn-white btn-wave">
                <i class="ri-filter-3-line align-middle me-1 lh-1"></i> فیلتر کردن
            </button>
            <button class="btn btn-primary btn-wave me-0">
                <i class="ri-share-forward-line me-1"></i> اشتراک‌گذاری
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header gap-3 align-items-center pb-3 border-bottom border-block-end-dashed">
                    <span class="avatar avatar-md bg-primary avatar-rounded"><i
                            class="ri-file-list-3-line fs-16"></i></span>
                    <div class="card-title">
                        لیست پیام های دریافتی
                        <span class="text-muted d-block fs-12">ایجاد فهرست جدید</span>
                    </div>
                    <button class="btn btn-sm btn-primary1-light ms-auto rounded-pill">
                        <i class="ri-add-line me-1"></i>افزودن فهرست جدید
                    </button>
                </div>
                <div class="card-body p-0">
                    <div class="p-3 task-navigation border-bottom border-block-end-dashed">
                        <ul class="list-unstyled task-main-nav mb-0">
                            <li class="px-0 pt-0">
                                <span class="fs-11 text-muted op-7 fw-medium">عمومی</span>
                            </li>
                            <li class="active">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-checkbox-multiple-line align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            تماس با ما
                                        </span>
                                        <span class="badge bg-info-transparent rounded-pill">167</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-checkbox-circle-line align-middle fs-14 text-primary"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            مشاوره
                                        </span>
                                        <span class="badge bg-primary1-transparent rounded-pill">12</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-checkbox-circle-line align-middle fs-14 text-primary"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                             پشتیبانی
                                        </span>
                                        <span class="badge bg-primary1-transparent rounded-pill">12</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-calendar-line align-middle fs-14 text-primary"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            امروز
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-star-line text-primary align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            ستاره دار
                                        </span>
                                        <span class="badge bg-primary3-transparent rounded-pill">04</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-user-line text-primary align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            شخصی
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-briefcase-line text-primary align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            کار
                                        </span>
                                        <span class="badge bg-primary1-transparent rounded-pill">03</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-delete-bin-5-line text-primary align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            سطل بازیافت
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="list-unstyled task-main-nav mb-0">
                            <li class="px-0 pt-2 d-flex justify-content-between gap-2 align-items-center">
                                <span class="fs-11 text-muted op-7 fw-medium">فضای کاری</span>
                            </li>
                            <li>
                                <div class="d-flex align-items-center flex-wrap gap-2">
                                    <div><input class="form-check-input" type="checkbox" value="" aria-label="...">
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);">
                                            <span class="fw-medium">آزمایش پروژه ...</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center flex-wrap gap-2">
                                    <div><input class="form-check-input" type="checkbox" value="" aria-label="...">
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);">
                                            <span class="fw-medium">رفع اشکال و پیگیری مشکلات..</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center flex-wrap gap-2">
                                    <div><input class="form-check-input" type="checkbox" value="" aria-label="...">
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);">
                                            <span class="fw-medium">توسعه قابلیت جدید...</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center flex-wrap gap-2">
                                    <div><input class="form-check-input" type="checkbox" value="" aria-label="...">
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);">
                                            <span class="fw-medium">بازبینی قالب مدیریت...</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div
                        class="d-flex align-items-center justify-content-between m-3 p-3 bg-primary-transparent rounded border overflow-hidden todo-list-card">
                        <div>
                            <div class="fs-15 fw-medium">تکمیل شده امروز</div>
                            <div class="mb-4 fs-15 fw-medium">وظایف</div>
                            <h4 class="mb-0">۳/۲۸ وظیفه</h4>
                        </div>

                        <div class="">
                            <img src="/images/media/media-66.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-9">
            <div class="card custom-card">
                <div class="card-header justify-content-between pb-3 border-bottom border-block-end-dashed">
                    <div class="flex-grow-1">
                        <input class="form-control w-100" type="text" placeholder="جستجو کنید"
                            aria-label=".form-control-sm example">
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-light btn-wave" data-bs-toggle="dropdown"
                                aria-expanded="false"> مرتب سازی بر اساس<i
                                    class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">جدید</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">محبوب</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">مرتبط</a></li>
                            </ul>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-primary ms-auto" data-bs-toggle="modal" data-bs-target="#addtask">
                        <i class="ri-add-circle-line"></i> افزودن کار جدید
                    </button>
                </div>

                <div class="card-body p-0 position-relative" id="todo-content">
                    <div>
                        <div class="table-responsive">
                            <table class="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th>
                                            <input class="form-check-input check-all" type="checkbox" id="all-tasks"
                                                value="" aria-label="...">
                                        </th>
                                        <th class="todolist-handle-drag">

                                        </th>
                                        <th scope="col">عنوان کار</th>
                                        <th scope="col">وضعیت</th>
                                        <th scope="col">مهلت</th>
                                        <th scope="col">اولویت</th>
                                        <th scope="col">واگذار کننده</th>
                                        <th scope="col" class="todolist-progress">پیشرفت</th>
                                        <th scope="col" class="text-end">عملیات</th>
                                    </tr>
                                </thead>
                                <tbody id="todo-drag">
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">وظایف توسعه نرم‌افزار</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-primary"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>در
                                                حال تکمیل</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary2-transparent">متوسط</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/7.jpg" alt="">
                                            </span>
                                            مهتاب
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="32" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                        style="width: 32%"></div>
                                                </div>
                                                <div class="ms-2">32%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">رفع باگ‌ها و پیگیری مشکلات</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-primary2"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>شروع
                                                نشده</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary3-transparent">بالا</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/12.jpg" alt="">
                                            </span>
                                            محمد
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                                                        style="width: 80%"></div>
                                                </div>
                                                <div class="ms-2">80%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">ارتقاء زیرساخت فناوری اطلاعات</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-primary2"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>شروع
                                                نشده</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary1-transparent">کم</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/8.jpg" alt="">
                                            </span>
                                            ترانه
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-orange"
                                                        style="width: 90%"></div>
                                                </div>
                                                <div class="ms-2">90%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">پیکربندی شبکه</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-warning"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>درانتظار</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary2-transparent">متوسط</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/15.jpg" alt="">
                                            </span>
                                            درسا
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="69" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                                                        style="width: 69%"></div>
                                                </div>
                                                <div class="ms-2">69%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">گزارش پشتیبان‌گیری و بازیابی</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-primary2"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>شروع
                                                نشده</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary3-transparent">بالا</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/14.jpg" alt="">
                                            </span>
                                            دنیا
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="96" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                        style="width: 96%"></div>
                                                </div>
                                                <div class="ms-2">96%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">مدیریت حساب کاربری</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-primary"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>در
                                                حال تکمیل</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary1-transparent">کم</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/11.jpg" alt="">
                                            </span>
                                            تارا
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="88" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                        style="width: 88%"></div>
                                                </div>
                                                <div class="ms-2">88%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">برنامه زمان‌بندی استقرار</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-primary2"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>شروع
                                                نشده</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary3-transparent">بالا</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/4.jpg" alt="">
                                            </span>
                                            مینا
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="36" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-teal"
                                                        style="width: 36%"></div>
                                                </div>
                                                <div class="ms-2">36%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">مدیریت پایگاه داده</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-primary2"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>شروع
                                                نشده</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary2-transparent">متوسط</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/3.jpg" alt="">
                                            </span>
                                            زهرا
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="57" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-pink"
                                                        style="width: 57%"></div>
                                                </div>
                                                <div class="ms-2">57%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">نظارت و هشدار</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-primary2"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>شروع
                                                نشده</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary1-transparent">کم</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/13.jpg" alt="">
                                            </span>
                                            نیما
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="79" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark"
                                                        style="width: 79%"></div>
                                                </div>
                                                <div class="ms-2">79%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="todo-box">
                                        <td class="task-checkbox"><input class="form-check-input" type="checkbox"
                                                value="" aria-label="..."></td>
                                        <td>
                                            <button class="btn btn-icon btn-sm btn-wave btn-light todo-handle">:
                                                :</button>
                                        </td>
                                        <td>
                                            <span class="fw-medium">نگهداری سرور</span>
                                        </td>
                                        <td>
                                            <span class="fw-medium text-success fs-12"><i
                                                    class="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>تکمیل
                                                شده</span>
                                        </td>
                                        <td>
                                            16 مرداد 1404
                                        </td>
                                        <td>
                                            <span class="badge bg-primary1-transparent">کم</span>
                                        </td>
                                        <td class="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/faces/13.jpg" alt="">
                                            </span>
                                            پارسا
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="progress progress-animate progress-xs w-100"
                                                    role="progressbar" aria-valuenow="58" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                        style="width: 58%"></div>
                                                </div>
                                                <div class="ms-2">58%</div>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div class="d-flex gap-2">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                    <i class="ri-edit-line"></i>
                                                </a>
                                                <a href="javascript:void(0);"
                                                    class="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-delete-bin-line"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="card-footer border-top-0">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div> نمایش 10 مورد <i class="bi bi-arrow-left ms-2 fw-semibold"></i> </div>
                        <div>
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled"> <a class="page-link" href="javascript:void(0);">
                                            قبلی </a> </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item"> <a class="page-link text-primary" href="javascript:void(0);">
                                            بعدی </a> </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::add tasks -->
    <div class="modal fade" id="addtask" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="mail-ComposeLabel">ایجاد کار</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
                </div>
                <div class="modal-body">
                    <div class="row gy-2">
                        <div class="col-xl-12">
                            <label for="task-name" class="form-label">نام کار</label>
                            <input type="text" class="form-control" id="task-name" placeholder="نام کار">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">واگذار شده به</label>
                            <select class="form-control" name="choices-multiple-remove-button"
                                id="choices-multiple-remove-button" multiple="">
                                <option value="Choice 1" selected="">مهتاب</option>
                                <option value="Choice 2">سارا </option>
                                <option value="Choice 3">نیما </option>
                                <option value="Choice 4">کیمیا </option>
                            </select>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">تاریخ واگذاری</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                    <input type="text" class="form-control" id="addignedDate"
                                        placeholder="تاریخ و زمان را انتخاب کنید">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">تاریخ هدف</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                    <input type="text" class="form-control" id="targetDate"
                                        placeholder="تاریخ و زمان را انتخاب کنید">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">وضعیت</label>
                            <select class="form-control" data-trigger="" name="choices-single-default1"
                                id="choices-single-default1">
                                <option value="">انتخاب کنید</option>
                                <option value="one">در حال انجام</option>
                                <option value="two">شروع نشده</option>
                                <option value="three">تکمیل شده</option>
                                <option value="four">در انتظار</option>
                            </select>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">اولویت</label>
                            <select class="form-control" data-trigger="" name="choices-single-default"
                                id="choices-single-default">
                                <option value="">انتخاب کنید</option>
                                <option value="Critical">بحرانی</option>
                                <option value="بالا">زیاد</option>
                                <option value="متوسط">متوسط</option>
                                <option value="Low">کم</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn m-0 me-2 btn-light" data-bs-dismiss="modal">لغو</button>
                    <button type="button" class="btn m-0 btn-primary">ایجاد</button>
                </div>
            </div>
        </div>
    </div>

    <!-- End::add tasks -->

</template>