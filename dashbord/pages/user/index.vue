<template>

    <div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
        <div>
            <nav>
                <ol class="breadcrumb mb-1">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">امکانات</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0);">مدیریت کاربران</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">کاربران</li>
                </ol>
            </nav>
            <h1 class="page-title fw-medium fs-18 mb-0">کاربران</h1>
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

    <!-- End::page-header -->

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="card-title">
                        کاربران<span class="badge bg-primary rounded ms-2 fs-12 align-middle">28</span>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact">
                            <i class="ri-add-line me-1 fw-medium align-middle"></i>ایجاد مخاطب
                        </button>
                        <button class="btn btn-success-light btn-sm">خروجی CSV</button>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-light btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                مرتب‌سازی بر اساس<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">جدیدترین</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">تاریخ افزودن</a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">الف - ی</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <input class="form-check-input check-all" type="checkbox" id="checkboxNoLabel"
                                            value="" aria-label="...">
                                    </th>
                                    <th scope="col">نام مخاطب</th>
                                    <th scope="col">ایمیل</th>
                                    <th scope="col">شرکت</th>
                                    <th scope="col">امتیاز لید</th>
                                    <th scope="col">اولویت</th>
                                    <th scope="col">تلفن</th>
                                    <th scope="col">برچسب‌ها</th>
                                    <th scope="col">منبع لید</th>
                                    <th scope="col">عملیات</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="crm-contact contacts-list">
                                    <td class="contacts-checkbox">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/4.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-medium">محمد</span></a>
                                                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                                    data-bs-custom-class="tooltip-primary" title="آخرین تماس">
                                                    <i class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                                                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>john.doe@example.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/2.png" alt="">
                                                </span>
                                            </div>
                                            <div>شرکت نمونه</div>
                                        </div>
                                    </td>
                                    <td>
                                        380
                                    </td>
                                    <td>
                                        <span class="badge bg-danger-transparent">اولویت بالا</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>09121234567</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">مشتری ویژه</span>
                                    </td>
                                    <td>
                                        معرفی
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-primary-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact contacts-list">
                                    <td class="contacts-checkbox">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel2" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/5.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-medium">طاها</span></a>
                                                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                                    data-bs-custom-class="tooltip-primary" title="آخرین تماس">
                                                    <i class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                                                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح
                                                </span>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>alice.smith@example.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/3.png" alt="">
                                                </span>
                                            </div>
                                            <div> شرکت برتر</div>
                                        </div>
                                    </td>
                                    <td>
                                        425
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-transparent">اولویت متوسط</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>09121234567</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">مشتری عادی</span>
                                    </td>
                                    <td>
                                        لینکدین
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-primary-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact contacts-list">
                                    <td class="contacts-checkbox">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel3" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/6.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-medium">میثاق</span></a>
                                                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                                    data-bs-custom-class="tooltip-primary" title="آخرین تماس"><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                                                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>michael.johnson@example.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/4.png" alt="">
                                                </span>
                                            </div>
                                            <div>شرکت جانسون</div>
                                        </div>
                                    </td>
                                    <td>
                                        300
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">اولویت پایین</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>09121234567</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">مشتری بالقوه</span>
                                    </td>
                                    <td>
                                        وب سایت
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-primary-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact contacts-list">
                                    <td class="contacts-checkbox">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel5" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/8.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-medium">سارا</span></a>
                                                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                                    data-bs-custom-class="tooltip-primary" title="آخرین تماس"><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                                                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>sophia.martinez@example.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/5.png" alt="">
                                                </span>
                                            </div>
                                            <div>شرکت مارتینز</div>
                                        </div>
                                    </td>
                                    <td>
                                        500
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-transparent">اولویت متوسط</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>09121234567</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">سرنخ بالقوه</span>
                                    </td>
                                    <td>
                                        تماس تلفنی
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-primary-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact contacts-list">
                                    <td class="contacts-checkbox">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel6" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/9.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-medium">یاسین</span></a>
                                                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                                    data-bs-custom-class="tooltip-primary" title="آخرین تماس"><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                                                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>david.wilson@example.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/6.png" alt="">
                                                </span>
                                            </div>
                                            <div>شرکت محمدی و پسران</div>
                                        </div>
                                    </td>
                                    <td>
                                        320
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">اولویت پایین</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>09121234567</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">مشتری عادی</span>
                                    </td>
                                    <td>
                                        کمپین ایمیلی
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-primary-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact contacts-list">
                                    <td class="contacts-checkbox">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel7" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/10.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-medium">عماد</span></a>
                                                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                                    data-bs-custom-class="tooltip-primary" title="آخرین تماس"><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                                                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>emma.brown@example.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/7.png" alt="">
                                                </span>
                                            </div>
                                            <div>راهکارهای براون</div>
                                        </div>
                                    </td>
                                    <td>
                                        280
                                    </td>
                                    <td>
                                        <span class="badge bg-danger-transparent">اولویت بالا</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>09121234567</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">مشتری ویژه</span>
                                    </td>
                                    <td>
                                        نمایشگاه بازرگانی
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-primary-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact contacts-list">
                                    <td class="contacts-checkbox">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel9" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/12.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-medium">حسین</span></a>
                                                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                                    data-bs-custom-class="tooltip-primary" title="آخرین تماس"><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                                                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>olivia.davis@example.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/8.png" alt="">
                                                </span>
                                            </div>
                                            <div>شرکت مشاوره</div>
                                        </div>
                                    </td>
                                    <td>
                                        280
                                    </td>
                                    <td>
                                        <span class="badge bg-warning-transparent">اولویت متوسط</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>09121234567</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">مشتری عادی</span>
                                    </td>
                                    <td>
                                        وبینار
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-primary-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="crm-contact contacts-list">
                                    <td class="contacts-checkbox">
                                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel10" value=""
                                            aria-label="...">
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-rounded avatar-sm">
                                                    <img src="/images/faces/13.jpg" alt="">
                                                </span>
                                            </div>
                                            <div>
                                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                    aria-controls="offcanvasExample"><span
                                                        class="d-block fw-medium">حسن</span></a>
                                                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                                    data-bs-custom-class="tooltip-primary" title="آخرین تماس"><i
                                                        class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                                                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block mb-1"><i
                                                    class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>william.clark@example.com</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="lh-1">
                                                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                    <img src="/images/company-logos/9.png" alt="">
                                                </span>
                                            </div>
                                            <div>راهکارهای کلارک</div>
                                        </div>
                                    </td>
                                    <td>
                                        350
                                    </td>
                                    <td>
                                        <span class="badge bg-danger-transparent">اولویت بالا</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="d-block"><i
                                                    class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>09121234567</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge bg-primary-transparent">مشتری ویژه</span>
                                    </td>
                                    <td>
                                        تبلیغات
                                    </td>
                                    <td>
                                        <div class="btn-list">
                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample"
                                                class="btn btn-sm btn-primary-light btn-icon"><i
                                                    class="ri-eye-line"></i></a>
                                            <button class="btn btn-sm btn-info-light btn-icon"><i
                                                    class="ri-pencil-line"></i></button>
                                            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                                                    class="ri-delete-bin-line"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer border-top-0">
                    <div class="d-flex align-items-center">
                        <div>
                            نمایش 8 مورد <i class="bi bi-arrow-left ms-2 fw-medium"></i>
                        </div>
                        <div class="ms-auto">
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0);">
                                            قبلی
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link text-primary" href="javascript:void(0);">
                                            بعدی
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: Contact Details Offcanvas -->
    <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExample">
        <div class="offcanvas-body p-0">
            <div class="d-sm-flex align-items-top p-3 border-bottom border-block-end-dashed main-profile-cover">
                <span class="avatar avatar-xxl avatar-rounded me-3">
                    <img src="/images/faces/11.jpg" alt="">
                </span>
                <div class="flex-fill main-profile-info">
                    <div class="d-flex align-items-center justify-content-between">
                        <h6 class="fw-medium mb-1">یاسین
                            <span class="badge bg-success-transparent fs-10"><i
                                    class="ri-circle-fill fs-8 text-success me-1 "></i> سرنخ جدید</span>
                        </h6>
                        <button type="button" class="btn-close crm-contact-close-btn" data-bs-dismiss="offcanvas"
                            aria-label="بستن"></button>
                    </div>
                    <p class="mb-2 text-muted fs-12">مدیر مالی ارشد (CFO)</p>
                    <div class="d-flex gap-2 fs-15 mt-1">
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-pill btn-primary1-light"><i
                                class="ri-phone-line"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-pill btn-primary2-light"><i
                                class="ri-mail-line"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-pill btn-primary3-light"><i
                                class="ri-message-line"></i></a>
                        <div class="dropdown">
                            <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"
                                class="btn btn-icon btn-sm rounded-pill btn-secondary-light"><i
                                    class="ri-more-fill"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="javascript:void(0);">اندازه</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">معاملات</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">وضعیت</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex mt-3 gap-3 p-1 py-0 border-bottom border-block-end-dashed">
                <div class="p-2 text-center flex-fill">
                    <i
                        class="ri-shake-hands-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                    <p class="fw-semibold fs-20 text-shadow mb-0 mt-2">۲۵۳</p>
                    <p class="mb-0 text-muted">معاملات</p>
                </div>
                <div class="p-2 text-center flex-fill">
                    <i
                        class="ri-money-dollar-circle-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                    <p class="fw-semibold fs-20 text-shadow mb-0 mt-2">۱۲</p>
                    <p class="mb-0 text-muted">مشارکت‌ها</p>
                </div>
                <div class="p-2 text-center flex-fill">
                    <i class="ri-thumb-up-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                    <p class="fw-semibold fs-20 text-shadow mb-0 mt-2">۱۷</p>
                    <p class="mb-0 text-muted">متعهد شده</p>
                </div>
            </div>
            <div class="p-3 border-bottom border-block-end-dashed">
                <div class="mb-0">
                    <p class="fs-15 mb-2 fw-medium">بیوگرافی حرفه‌ای :</p>
                    <p class="text-muted mb-0">
                        من <b class="text-default">یاسین،</b> بدین وسیله اعلام می‌کنم که بنیان‌گذار و
                        مدیرعامل شرکت معتبر به نام شرکت برترs هستم و به عنوان مدیر مالی ارشد (CFO) شرکت
                        فعالیت می‌کنم.
                    </p>
                </div>
            </div>
            <div class="p-3 border-bottom border-block-end-dashed">
                <p class="fs-14 mb-2 fw-medium">اطلاعات تماس :</p>
                <div class="">
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-primary1-transparent">
                                <i class="ri-mail-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            ethanthompson@example.com <span class="text-muted lh-1 rounded-circle ms-1"
                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="کپی"><i
                                    class="ri-file-copy-fill"></i></span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-primary2-transparent">
                                <i class="ri-phone-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            09121234567
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-0">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-primary3-transparent">
                                <i class="ri-map-pin-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            ایران ، استان تهران ، شهر تهران ، خیابان مولوی
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                <p class="fs-14 mb-0 fw-medium">اولویت:</p>
                <div class="badge bg-success-transparent"><i class="ri-circle-fill lh-1 align-middle fs-9 me-1"></i>
                    اولویت پایین</div>
            </div>
            <div class="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                <p class="fs-14 mb-0 fw-medium">تاریخ ایجاد:</p>
                <div>۲ خرداد ۱۴۰۳</div>
            </div>
            <div class="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                <p class="fs-14 mb-0 fw-medium">منبع لید:</p>
                <div><i class="ri-instagram-line bg-danger-transparent p-1 lh-1 align-middle fs-15 me-1 rounded"></i>
                    اینستاگرام</div>
            </div>
            <div class="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                <p class="fs-14 mb-0 fw-medium">شبکه‌های اجتماعی :</p>
                <div class="btn-list mb-0">
                    <button class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-facebook-line fw-medium"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-twitter-x-line fw-medium"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-primary2-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-instagram-line fw-medium"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-github-line fw-medium"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-youtube-line fw-medium"></i>
                    </button>
                </div>
            </div>
            <div class="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                <p class="fs-14 mb-0 me-4 fw-medium">برچسب‌ها :</p>
                <div>
                    <span class="badge bg-primary-transparent">سرنخ جدید</span>
                    <span class="badge bg-primary-transparent">سایر</span>
                </div>
            </div>
            <div class="p-3">
                <p class="fs-14 mb-2 fw-medium">مدیر ارتباطات :
                    <a class="bg-primary1-transparent fs-12 p-1 pe-2 rounded mb-0 float-end"
                        href="javascript:void(0);"><i class="ri-add-line me-1 align-middle"></i>افزودن
                        مدیر</a>
                </p>
                <div class="avatar-list-stacked">
                    <span class="avatar avatar-sm avatar-rounded">
                        <img src="/images/faces/2.jpg" alt="img">
                    </span>
                    <span class="avatar avatar-sm avatar-rounded">
                        <img src="/images/faces/8.jpg" alt="img">
                    </span>
                    <span class="avatar avatar-sm avatar-rounded">
                        <img src="/images/faces/2.jpg" alt="img">
                    </span>
                    <span class="avatar avatar-sm avatar-rounded">
                        <img src="/images/faces/10.jpg" alt="img">
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- End:: Contact Details Offcanvas -->

    <!-- Start:: Create Contact -->
    <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">ایجاد مخاطب</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
                </div>
                <div class="modal-body">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <div class="mb-0 text-center">
                                <span class="avatar avatar-xxl avatar-rounded">
                                    <img src="/images/faces/9.jpg" alt="" id="profile-img">
                                    <span class="badge rounded-pill bg-primary avatar-badge">
                                        <input type="file" name="photo" class="position-absolute w-100 h-100 op-0"
                                            id="profile-change">
                                        <i class="fe fe-camera"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label for="deal-title" class="form-label">عنوان معامله</label>
                            <input type="text" class="form-control" id="deal-title" placeholder="عنوان معامله">
                        </div>
                        <div class="col-xl-6">
                            <label for="contact-lead-score" class="form-label">امتیاز لید</label>
                            <input type="number" class="form-control" id="contact-lead-score" placeholder="امتیاز لید">
                        </div>
                        <div class="col-xl-12">
                            <label for="contact-mail" class="form-label">ایمیل</label>
                            <input type="email" class="form-control" id="contact-mail" placeholder="ایمیل را وارد کنید">
                        </div>
                        <div class="col-xl-12">
                            <label for="contact-phone" class="form-label">شماره تلفن</label>
                            <input type="tel" class="form-control" id="contact-phone"
                                placeholder="شماره تلفن را وارد کنید">
                        </div>
                        <div class="col-xl-12">
                            <label for="company-name" class="form-label">نام شرکت</label>
                            <input type="text" class="form-control" id="company-name" placeholder="نام شرکت">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">منبع لید</label>
                            <select class="form-control" name="choices-multiple-remove-button1"
                                id="choices-multiple-remove-button1">
                                <option value="Choice 1">شبکه‌های اجتماعی</option>
                                <option value="Choice 2">ایمیل مستقیم</option>
                                <option value="Choice 3">مقالات مقاله</option>
                                <option value="Choice 4">شرکا</option>
                                <option value="Choice 5">جستجوی ارگانیک</option>
                            </select>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">آخرین تماس</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                    <input type="text" class="form-control" id="targetDate"
                                        placeholder="تاریخ و زمان را انتخاب کنید">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">برچسب‌ها</label>
                            <select class="form-control" name="choices-multiple-remove-button2"
                                id="choices-multiple-remove-button2" multiple="">
                                <option value="">انتخاب برچسب</option>
                                <option value="Choice 1">سرنخ جدید</option>
                                <option value="Choice 2">مشتری احتمالی</option>
                                <option value="Choice 3">مشتری</option>
                                <option value="Choice 4">سرنخ داغ</option>
                                <option value="Choice 5">شریک</option>
                                <option value="Choice 6">مشتری از دست رفته</option>
                                <option value="Choice 7">تاثیرگذار</option>
                                <option value="Choice 8">مشترک</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn m-0 btn-primary1-light me-2" data-bs-dismiss="modal">لغو</button>
                    <button type="button" class="btn m-0 btn-primary">ایجاد مخاطب</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue'

const userList = ref([])

onMounted(async () => {
    try {
        const response = await axios.get(
            'http://127.0.0.1:8000/accounting/api/v1/user'
        )
        console.log(`data=${response.data}`)
        userList.value = response.data
        console.log(userList.value)
    } catch (error) {
        console.error(error)
    }
})
</script>