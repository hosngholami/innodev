<template>
     <!-- Page Header -->
                    <div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
                        <div>
                            <nav>
                                <ol class="breadcrumb mb-1">
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">برنامه‌ها</a></li>
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">شغل‌ها</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">جستجوی داوطلب</li>
                                </ol>
                            </nav>
                            <h1 class="page-title fw-medium fs-18 mb-0">جستجوی داوطلب</h1>
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
                        <div class="col-xxl-3 col-xl-4">
                            <div class="card custom-card products-navigation-card">
                                <div class="card-body p-0">
                                    <div class="p-3 border-bottom">
                                        <h6 class="fw-medium mb-0">دسته‌بندی‌ها</h6>
                                        <div class="py-3 pb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="c-1" >
                                                <label class="form-check-label" for="c-1">
                                                    توسعه نرم‌افزار
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۳,۲۰۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="c-2">
                                                <label class="form-check-label" for="c-2">
                                                    مالی
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۷۸۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="c-3" >
                                                <label class="form-check-label" for="c-3">
                                                    بازاریابی
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۱۵,۵۰۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="c-4" >
                                                <label class="form-check-label" for="c-4">
                                                    خدمات مشتریان
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۲,۹۵۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="c-5">
                                                <label class="form-check-label" for="c-5">
                                                    عملیات
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۶,۸۰۰</span>
                                            </div>
                                            <div class="collapse" id="category-more">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-6">
                                                    <label class="form-check-label" for="c-6">
                                                        منابع انسانی
                                                    </label>
                                                    <span class="badge bg-light text-default fw-500 float-end">۴,۵۰۰</span>
                                                </div>
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="c-7">
                                                    <label class="form-check-label" for="c-7">
                                                        توسعه کسب‌وکار
                                                    </label>
                                                    <span class="badge bg-light text-default fw-500 float-end">۱,۶۰۰</span>
                                                </div>
                                            </div>
                                            <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#category-more" role="button" aria-expanded="false" aria-controls="category-more">بیشتر</a>
                                        </div>
                                    </div>
                                    <div class="p-3 border-bottom">
                                        <h6 class="fw-medium mb-0">دسترسی</h6>
                                        <div class="py-3 pb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="available-1" >
                                                <label class="form-check-label" for="available-1">
                                                    آماده به کار
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۶۲۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="available-2">
                                                <label class="form-check-label" for="available-2">
                                                    اطلاع ۳۰ روزه
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۱,۸۵۰</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 border-bottom">
                                        <h6 class="fw-medium mb-0">قرارداد تعهد</h6>
                                        <div class="py-3 pb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="bond-1" >
                                                <label class="form-check-label" for="bond-1">
                                                    ۱ سال
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۷۶۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="bond-2">
                                                <label class="form-check-label" for="bond-2">
                                                    ۲ سال
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۴۸۰</span>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="bond-3">
                                                <label class="form-check-label" for="bond-3">
                                                    ۳ سال
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۲۴۰</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 border-bottom">
                                        <h6 class="fw-medium mb-0">زبان‌ها</h6>
                                        <div class="py-3 pb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="languages-1" >
                                                <label class="form-check-label" for="languages-1">
                                                    انگلیسی
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۱,۲۵۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="languages-2">
                                                <label class="form-check-label" for="languages-2">
                                                    هندی
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۳۵۰</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 border-bottom">
                                        <h6 class="fw-medium mb-0">نوع شغل</h6>
                                        <div class="py-3 pb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="j-1" >
                                                <label class="form-check-label" for="j-1">
                                                    تمام‌وقت
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۱,۹۲۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="j-2" >
                                                <label class="form-check-label" for="j-2">
                                                    پاره‌وقت
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۳,۱۰۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="j-3" >
                                                <label class="form-check-label" for="j-3">
                                                    کارآموزی
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۸۶۰</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="j-4">
                                                <label class="form-check-label" for="j-4">
                                                    فریلنسر
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۷۵</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 border-bottom">
                                        <h6 class="fw-medium mb-0">بازه حقوق</h6>
                                        <div class="py-3 pb-0">
                                            <div id="nonlinear"></div>
                                            <div class="d-flex mt-3 justify-content-center">
                                                <div class="fw-medium h6 mb-0">$<span id="lower-value"></span></div>
                                                &nbsp; -- &nbsp; 
                                                <div class="fw-medium h6 mb-0">$<span id="upper-value"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 border-bottom">
                                        <h6 class="fw-medium mb-0">تحصیلات</h6>
                                        <div class="py-3 pb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="q-1">
                                                <label class="form-check-label" for="q-1">
                                                    همه سطوح تحصیلی
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۲۲,۴۵۷</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="q-2" >
                                                <label class="form-check-label" for="q-2">
                                                    دیپلم و بالاتر
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۱۲,۵۶۲</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="q-4" >
                                                <label class="form-check-label" for="q-4">
                                                    دیپلم و کارشناسی
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۵,۷۶۷</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3">
                                        <h6 class="fw-medium mb-0">مهارت‌ها</h6>
                                        <div class="py-3 pb-0">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="s-1" >
                                                <label class="form-check-label" for="s-1">
                                                    HTML5
                                                </label>
                                                <span class="badge bg-light text-default fw-500 float-end">۲۳,۱۵۶</span>
                                            </div>
                                            <div class="collapse" id="sizes-more">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="s-4">
                                                    <label class="form-check-label" for="s-4">
                                                        CSS3
                                                    </label>
                                                    <span class="badge bg-light text-default fw-500 float-end">۷,۱۵۴</span>
                                                </div>
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="s-5">
                                                    <label class="form-check-label" for="s-5">
                                                        بوت‌استرپ
                                                    </label>
                                                    <span class="badge bg-light text-default fw-500 float-end">۵,۹۴۶</span>
                                                </div>
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="s-6">
                                                    <label class="form-check-label" for="s-6">
                                                        انگولار
                                                    </label>
                                                    <span class="badge bg-light text-default fw-500 float-end">۳,۲۶۷</span>
                                                </div>
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="s-7">
                                                    <label class="form-check-label" for="s-7">
                                                        ری‌اکت
                                                    </label>
                                                    <span class="badge bg-light text-default fw-500 float-end">۵۷۸</span>
                                                </div>
                                            </div>
                                            <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#sizes-more" role="button" aria-expanded="false" aria-controls="sizes-more">بیشتر</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-xxl-9 col-xl-8">
                            <div class="row align-items-center">
                                <div class="col-lg-12">
                                    <div class="card custom-card">
                                        <div class="card-body p-md-0">
                                            <div class="input-group companies-search-input companies-search-input1 flex-lg-nowrap">
                                                <input type="text" class="form-control form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="اینجا کلمه کلیدی خود را وارد کنید">
                                                <select class="form-select form-select-lg rounded-0" data-trigger="">
                                                    <option value="">همه دسته‌بندی‌ها</option>
                                                    <option value="Choice 1">توسعه‌دهنده نرم‌افزار</option>
                                                    <option value="Choice 2">توسعه‌دهنده وب</option>
                                                    <option value="Choice 3">معمار نرم‌افزار</option>
                                                    <option value="Choice 4">سخت‌افزار IT</option>
                                                    <option value="Choice 5">مهندس شبکه</option>
                                                    <option value="Choice 6">توسعه‌دهنده انگولار</option>
                                                    <option value="Choice 7">توسعه‌دهنده ری‌اکت</option>
                                                </select>
                                                <input type="text" class="form-control form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="جستجو بر اساس موقعیت">
                                                <select class="form-select form-select-lg rounded-0" data-trigger="">
                                                    <option value="Choice 1">تازه‌کار</option>
                                                    <option value="Choice 2">۱ سال سابقه</option>
                                                    <option value="Choice 3">۲ سال سابقه</option>
                                                    <option value="Choice 4">۳ سال سابقه</option>
                                                    <option value="Choice 5">۴ سال سابقه</option>
                                                    <option value="Choice 6">۵ سال سابقه</option>
                                                </select>
                                                <button type="button" class="btn btn-lg btn-primary"><i class="ri-search-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap gap-2 align-items-center">
                                                <h5 class="fw-medium mb-0 flex-grow-1">۲۴۶۸ <span class="fw-normal fs-18">نامزد مطابق جستجوی شغلی شما</span> </h5>
                                                <div class="btn-group">
                                                    <button class="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        مرتب‌سازی بر اساس
                                                    </button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><a class="dropdown-item" href="javascript:void(0);">پرمیوم</a></li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">جدیدترین</a></li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">مرتبط‌ترین</a></li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">تازه‌کار</a></li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">با تجربه</a></li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">قرارداد تضمینی</a></li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">شیفت انعطاف‌پذیر</a></li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">شیفت روز</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/1.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> سمانه <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">طراح UI/UX</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i> استان تهران</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-half"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(245)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary"><i class="ri-file-text-line me-1"></i> کارشناسی ارشد</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1"><i class="ri-remote-control-line me-1"></i> کار از راه دور</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info"><i class="ri-time-line me-1"></i> طراح UI (بیش از ۲ سال)</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2"><i class="ri-time-fill me-1"></i> تمام‌وقت</a>
                                            </div>
                                       
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                               <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium"> ۵۵,۰۰۰</span> - <span class="fw-medium"> ۸۰,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium"> انگلیسی، اسپانیایی</span></p>
                                                </div>

                                                <div class="ms-auto">
                                                    <div class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></div>
                                                </div>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/2.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> میثاق <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">توسعه دهنده فرانت اند</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i> ایران ، استان تهران</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-half"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(189)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary"><i class="ri-file-text-line me-1"></i> کارشناسی</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1"><i class="ri-remote-control-line me-1"></i> کار از راه دور</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info"><i class="ri-time-line me-1"></i> توسعه‌دهنده فرانت‌اند (بیش از ۴ سال)</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2"><i class="ri-time-fill me-1"></i> تمام‌وقت</a>
                                            </div>
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium"> ۶۵,۰۰۰</span> - <span class="fw-medium"> ۹۰,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium"> انگلیسی، فرانسوی</span></p>
                                                </div>
                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/3.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> المیرا <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">طراح گرافیک</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i> هند</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-half"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(201)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary"><i class="ri-file-text-line me-1"></i> کارشناسی ارشد</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1"><i class="ri-remote-control-line me-1"></i> کار از راه دور</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info"><i class="ri-time-line me-1"></i> طراح گرافیک (بیش از ۳ سال)</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2"><i class="ri-time-fill me-1"></i> پاره‌وقت</a>
                                            </div>
                                      
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium"> ۵۰,۰۰۰</span> - <span class="fw-medium"> ۷۰,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium"> انگلیسی، آلمانی</span></p>
                                                </div>
                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/4.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> سارا <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">مهندس نرم افزار</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i>ایران ، استان تهران</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-half"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(172)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary"><i class="ri-file-text-line me-1"></i> مدرک کارشناسی</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1"><i class="ri-remote-control-line me-1"></i> کار حضوری</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info"><i class="ri-time-line me-1"></i> مهندس نرم‌افزار (بیش از ۵ سال)</a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2"><i class="ri-time-fill me-1"></i> قرارداد</a>
                                            </div>
                                  
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium"> ۸۰,۰۰۰</span> - <span class="fw-medium"> ۱۱۰,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium">انگلیسی، ماندارین</span></p>
                                                </div>
                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/5.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> نیکو <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">کارشناس دیجیتال مارکتینگ</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i> کانادا ، تورنتو</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-half"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(156)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary">
                                                    <i class="ri-file-text-line me-1"></i> مدرک کارشناسی
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1">
                                                    <i class="ri-remote-control-line me-1"></i> حضور در محل کار
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info">
                                                    <i class="ri-time-line me-1"></i> بازاریابی دیجیتال (۳+ سال)
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2">
                                                    <i class="ri-time-fill me-1"></i> تمام‌وقت
                                                </a>
                                            </div>
                                     
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium"> ۶۰,۰۰۰</span> - <span class="fw-medium"> ۸۵,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium">انگلیسی، فرانسوی</span></p>
                                                </div>
                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/6.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> سوفیا <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">تحلیلگر داده</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i> لندن</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(178)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary">
                                                    <i class="ri-file-text-line me-1"></i> مدرک کارشناسی ارشد
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1">
                                                    <i class="ri-remote-control-line me-1"></i> دورکاری
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info">
                                                    <i class="ri-time-line me-1"></i> تحلیلگر داده (۴+ سال)
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2">
                                                    <i class="ri-time-fill me-1"></i> پاره‌وقت
                                                </a>
                                            </div>
                                        
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div>
                                                    <p class="mb-1 flex-grow-1">
                                                        <span class="text-muted">حقوق سالانه :</span> 
                                                        <span class="fw-medium"> ۷۰,۰۰۰</span> - <span class="fw-medium"> ۹۵,۰۰۰</span>
                                                    </p>
                                                    <p class="mb-0">
                                                        <span class="text-muted">زبان‌ها :</span> 
                                                        <span class="fw-medium"> انگلیسی، اسپانیایی</span>
                                                    </p>
                                                </div>
                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/7.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> مائده <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">مهندس نرم افزار</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i>نیویورک</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(120)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary">
                                                    <i class="ri-file-text-line me-1"></i> مدرک کارشناسی
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1">
                                                    <i class="ri-remote-control-line me-1"></i> کار حضوری
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info">
                                                    <i class="ri-time-line me-1"></i> مهندس نرم‌افزار (بیش از ۵ سال)
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2">
                                                    <i class="ri-time-fill me-1"></i> تمام‌وقت
                                                </a>
                                            </div>
                                       
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium">۸۵,۰۰۰</span> - <span class="fw-medium">۱۱۰,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium">انگلیسی</span></p>
                                                </div>

                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/8.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> ناهید <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">طراح گرافیک</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i>کالیفرنیا</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(90)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary">
                                                    <i class="ri-file-text-line me-1"></i> مدرک لیسانس
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1">
                                                    <i class="ri-remote-control-line me-1"></i> کار از راه دور
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info">
                                                    <i class="ri-time-line me-1"></i> طراح گرافیک (۳+ سال)
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2">
                                                    <i class="ri-time-fill me-1"></i> پاره‌وقت
                                                </a>
                                            </div>
                                        
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                               <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium"> ۷۰,۰۰۰</span> - <span class="fw-medium"> ۹۰,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium"> انگلیسی، اسپانیایی</span></p>
                                                </div>
                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/9.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> سوفیا <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">بازاریاب دیجیتال</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i> لندن</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(180)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                           <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary">
                                                    <i class="ri-file-text-line me-1"></i> مدرک کارشناسی
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1">
                                                    <i class="ri-remote-control-line me-1"></i> کار از راه دور
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info">
                                                    <i class="ri-time-line me-1"></i> بازاریاب دیجیتال (۴+ سال)
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2">
                                                    <i class="ri-time-fill me-1"></i> تمام وقت
                                                </a>
                                            </div>                                        
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium"> ۴۵,۰۰۰</span> - <span class="fw-medium"> ۶۵,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium"> انگلیسی، فرانسوی</span></p>
                                                </div>
                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card custom-card">
                                        <div class="card-body">
                                            <div class="float-end">
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-info-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="دانلود رزومه" title="دانلود رزومه"><span><i class="ri-download-cloud-line fs-14"></i></span></a>
                                                <a href="javascript:void(0);" class="avatar avatar-rounded avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="افزودن به لیست مورد علاقه" title="افزودن به لیست مورد علاقه"><span><i class="ri-heart-line fs-14"></i></span></a>
                                            </div>
                                            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                <div>
                                                    <span class="avatar avatar-lg avatar-rounded">
                                                        <img src="/images/faces/10.jpg" alt="Profile Picture">
                                                    </span>
                                                </div>    
                                                <div>
                                                    <h6 class="fw-medium mb-1 d-flex align-items-center"><a href="job-candidate-details.html"> لیلا <i class="ri-verified-badge-fill text-primary fs-14" data-bs-toggle="tooltip" title="کاندید تایید شد"></i></a></h6>
                                                    <div class="d-flex gap-2 flex-wrap">
                                                        <a href="javascript:void(0);">تحلیلگر داده</a>
                                                        <p class="mb-0 fs-12 text-muted"><i class="ri-map-pin-line fs-11"></i>کانادا ، تورنتو</p>
                                                    </div> 
                                                    <div class="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                        <p class="fs-12 mb-0">رتبه بندی : </p>
                                                        <div class="min-w-fit-content ms-2">
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-warning"><i class="bi bi-star-fill"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                            <span class="text-muted"><i class="bi bi-star"></i></span>
                                                        </div>
                                                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                                                            <span>(110)</span>
                                                            <span>رتبه بندی</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary">
                                                    <i class="ri-file-text-line me-1"></i> مدرک کارشناسی ارشد
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary1 border-opacity-10 text-primary1">
                                                    <i class="ri-remote-control-line me-1"></i> کار در محل
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-info border-opacity-10 text-info">
                                                    <i class="ri-time-line me-1"></i> تحلیل‌گر داده (۳+ سال)
                                                </a>
                                                <a href="javascript:void(0);" class="badge rounded-pill fs-11 border border-primary2 border-opacity-10 text-primary2">
                                                    <i class="ri-time-fill me-1"></i> پاره‌وقت
                                                </a>
                                            </div>                                        
                                            <div class="d-flex align-items-center flex-wrap gap-3">
                                                <div>
                                                    <p class="mb-1 flex-grow-1"><span class="text-muted">حقوق سالانه :</span> <span class="fw-medium"> ۶۵,۰۰۰</span> - <span class="fw-medium"> ۸۵,۰۰۰</span> </p>
                                                    <p class="mb-0"><span class="text-muted">زبان‌ها :</span> <span class="fw-medium"> انگلیسی</span></p>
                                                </div>
                                                <div class="ms-auto">
                                                    <a href="javascript:void(0);" class="btn btn-primary">نمایش پروفایل <i class="ri-arrow-left-line"></i></a>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                            <ul class="pagination mb-4 justify-content-end">
                                <li class="page-item disabled">
                                    <a class="page-link" href="javascript:void(0);">
                                        قبلی
                                    </a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                <li class="page-item">
                                    <a class="page-link text-primary" href="javascript:void(0);">
                                        بعدی
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--End::row-1 -->
</template>