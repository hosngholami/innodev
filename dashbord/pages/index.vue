<template>
	<div>
		<div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">
		<div>
			<ol class="breadcrumb mb-1">
				<li class="breadcrumb-item">
					<a href="javascript:void(0);">
						داشبوردها
					</a>
				</li>
				<li class="breadcrumb-item active" aria-current="page">فروش</li>
			</ol>
			<h1 class="page-title fw-medium fs-18 mb-0">داشبورد فروش</h1>
		</div>
		<div class="d-flex align-items-center gap-2 flex-wrap">
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-text bg-white border"> <i class="ri-calendar-line"></i> </div>
					<input type="text" class="form-control breadcrumb-input" id="daterange"
						placeholder="جستجو براساس بازه زمانی">
				</div>
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
	</div>

	<!-- End::page-header -->

	<!-- Start:: row-1 -->
	<div class="row">
		<div class="col-xl-8">
			<div class="row">
				<div class="col-xxl-3 col-xl-6">
					<div class="card custom-card overflow-hidden main-content-card">
						<div class="card-body">
							<div class="d-flex align-items-start justify-content-between mb-2">
								<div>
									<span class="text-muted d-block mb-1">مجموع محصولات</span>
									<h4 class="fw-medium mb-0">854</h4>
								</div>
								<div class="lh-1">
									<span class="avatar avatar-md avatar-rounded bg-primary">
										<i class="ti ti-shopping-cart fs-5"></i>
									</span>
								</div>
							</div>
							<div class="text-muted fs-13">افزایش یافته <span class="text-success">2.56%<i
										class="ti ti-arrow-narrow-up fs-16"></i></span></div>
						</div>
					</div>
				</div>
				<div class="col-xxl-3 col-xl-6">
					<div class="card custom-card overflow-hidden main-content-card">
						<div class="card-body">
							<div class="d-flex align-items-start justify-content-between mb-2">
								<div>
									<span class="d-block text-muted mb-1">مجموع کاربران</span>
									<h4 class="fw-medium mb-0">31,876</h4>
								</div>
								<div class="lh-1">
									<span class="avatar avatar-md avatar-rounded bg-primary1">
										<i class="ti ti-users fs-5"></i>
									</span>
								</div>
							</div>
							<div class="text-muted fs-13">افزایش یافته <span class="text-success">0.34%<i
										class="ti ti-arrow-narrow-up fs-16"></i></span></div>
						</div>
					</div>
				</div>
				<div class="col-xxl-3 col-xl-6">
					<div class="card custom-card overflow-hidden main-content-card">
						<div class="card-body">
							<div class="d-flex align-items-start justify-content-between mb-2">
								<div>
									<span class="text-muted d-block mb-1">کل درآمد</span>
									<h4 class="fw-medium mb-0">3,241</h4>
								</div>
								<div class="lh-1">
									<span class="avatar avatar-md avatar-rounded bg-primary2">
										<i class="ti ti-currency-dollar fs-5"></i>
									</span>
								</div>
							</div>
							<div class="text-muted fs-13">افزایش یافته <span class="text-success">7.66%<i
										class="ti ti-arrow-narrow-up fs-16"></i></span></div>
						</div>
					</div>
				</div>
				<div class="col-xxl-3 col-xl-6">
					<div class="card custom-card overflow-hidden main-content-card">
						<div class="card-body">
							<div class="d-flex align-items-start justify-content-between mb-2">
								<div>
									<span class="text-muted d-block mb-1">مجموع فروش</span>
									<h4 class="fw-medium mb-0">1,76,586</h4>
								</div>
								<div class="lh-1">
									<span class="avatar avatar-md avatar-rounded bg-primary3">
										<i class="ti ti-chart-bar fs-5"></i>
									</span>
								</div>
							</div>
							<div class="text-muted fs-13">کاهش یافته <span class="text-danger">0.74%<i
										class="ti ti-arrow-narrow-down fs-16"></i></span></div>
						</div>
					</div>
				</div>
				<div class="col-xxl-8 col-xl-6">
					<div class="card custom-card">
						<div class="card-header justify-content-between">
							<div class="card-title">
								نمای کلی فروش
							</div>
							<div class="dropdown">
								<a href="javascript:void(0);" class="btn btn-sm btn-light text-muted dropdown-toggle"
									data-bs-toggle="dropdown" aria-expanded="true"> مرتب‌سازی بر اساس</a>
								<ul class="dropdown-menu" role="menu" data-popper-placement="bottom-end">
									<li><a class="dropdown-item" href="javascript:void(0);">هفته جاری</a></li>
									<li><a class="dropdown-item" href="javascript:void(0);">هفته گذشته</a></li>
									<li><a class="dropdown-item" href="javascript:void(0);"> ماه جاری</a></li>
								</ul>
							</div>
						</div>

						<div class="card-body">
							<div id="sales-overview"></div>
						</div>
					</div>
				</div>
				<div class="col-xxl-4 col-xl-6">
					<div class="card custom-card overflow-hidden">
						<div class="card-header pb-0 justify-content-between">
							<div class="card-title">
								آمار سفارشات
							</div>
							<div class="dropdown">
								<a aria-label="anchor" href="javascript:void(0);"
									class="btn btn-light btn-icons btn-sm text-muted" data-bs-toggle="dropdown"
									aria-expanded="false">
									<i class="fe fe-more-vertical"></i>
								</a>
								<ul class="dropdown-menu" role="menu">
									<li class="border-bottom"><a class="dropdown-item"
											href="javascript:void(0);">امروز</a></li>
									<li class="border-bottom"><a class="dropdown-item" href="javascript:void(0);">هفته
											جاری</a></li>
									<li><a class="dropdown-item" href="javascript:void(0);">هفته گذشته</a></li>
								</ul>
							</div>
						</div>

						<div class="card-body py-4 px-3">
							<div class="d-flex gap-3 mb-3">
								<div class="avatar avatar-md bg-primary-transparent">
									<i class="ti ti-trending-up fs-5"></i>
								</div>
								<div class="flex-fill d-flex align-items-start justify-content-between">
									<div>
										<span class="fs-11 mb-1 d-block fw-medium">کل سفارشات</span>
										<div class="d-flex align-items-center justify-content-between">
											<h4 class="mb-0 d-flex align-items-center">3,736<span
													class="text-success fs-12 ms-2 op-1"><i
														class="ti ti-trending-up align-middle me-1"></i>۰٫۵۷٪</span>
											</h4>
										</div>
									</div>
									<a href="javascript:void(0);"
										class="text-success fs-12 text-decoration-underline">درآمد؟</a>
								</div>

							</div>
							<div id="orders" class="my-2"></div>
						</div>
						<div class="card-footer border-top border-block-start-dashed">
							<div class="d-grid">
								<button
									class="btn btn-primary-ghost btn-wave fw-medium waves-effect waves-light table-icon">
									آمار کامل
									<i class="ti ti-arrow-narrow-right ms-2 fs-16 d-inline-block align-middle"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="row">
				<div class="col-xl-12">
					<div class="card custom-card main-dashboard-banner overflow-hidden">
						<div class="card-body p-4">
							<div class="row justify-content-between">
								<div class="col-xxl-7 col-xl-5 col-lg-5 col-md-5 col-sm-5">
									<h4 class="mb-3 fw-medium text-fixed-white">برای امکانات بیشتر ارتقا دهید</h4>
									<p class="mb-4 text-fixed-white">بینش فروش را به حداکثر برسانید. عملکرد را بهینه
										کنید. با نسخه حرفه‌ای به موفقیت برسید.</p>
									<a href="javascript:void(0);"
										class="fw-medium text-fixed-white text-decoration-underline">
										ارتقا به نسخه حرفه‌ای
										<i class="ti ti-arrow-narrow-left align-middle d-inline-flex"></i>
									</a>
								</div>
								<div
									class="col-xxl-4 col-xl-7 col-lg-7 col-md-7 col-sm-7 d-sm-block d-none text-end my-auto">
									<img src="/images/media/media-86.png" alt="" class="img-fluid">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-12">
					<div class="card custom-card overflow-hidden">
						<div class="card-header justify-content-between">
							<div class="card-title">
								دسته‌های پرفروش
							</div>
							<div class="dropdown">
								<a href="javascript:void(0);" class="btn btn-sm btn-light text-muted dropdown-toggle"
									data-bs-toggle="dropdown" aria-expanded="true"> مرتب‌سازی بر اساس</a>
								<ul class="dropdown-menu" role="menu" data-popper-placement="bottom-end">
									<li><a class="dropdown-item" href="javascript:void(0);"> هفته جاری</a></li>
									<li><a class="dropdown-item" href="javascript:void(0);">هفته گذشته</a></li>
									<li><a class="dropdown-item" href="javascript:void(0);"> ماه جاری</a></li>
								</ul>
							</div>
						</div>

						<div class="card-body p-0">
							<div class="p-3 pb-0">
								<div class="progress-stacked progress-sm mb-2 gap-1">
									<div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25"
										aria-valuemin="0" aria-valuemax="100"></div>
									<div class="progress-bar bg-primary1" role="progressbar" style="width: 15%"
										aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
									<div class="progress-bar bg-primary2" role="progressbar" style="width: 15%"
										aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									<div class="progress-bar bg-primary3" role="progressbar" style="width: 25%"
										aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
									<div class="progress-bar bg-secondary" role="progressbar" style="width: 20%"
										aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div class="d-flex align-items-center justify-content-between mb-2">
									<div>مجموع فروش</div>
									<div class="h6 mb-0"><span class="text-success me-2 fs-11">2.74%<i
												class="ti ti-arrow-narrow-up"></i></span>1,25,875</div>
								</div>
							</div>
							<div class="table-responsive">
								<table class="table text-nowrap">
									<tbody>
										<tr>
											<td>
												<span class="fw-medium top-category-name one">لباس</span>
											</td>
											<td>
												<span class="fw-medium">31,245</span>
											</td>
											<td class="text-center">
												<span class="text-muted fs-12">25% ناخالص</span>
											</td>
											<td class="text-end">
												<span class="badge bg-success">0.45% <i
														class="ti ti-trending-up"></i></span>
											</td>
										</tr>
										<tr>
											<td>
												<span class="fw-medium top-category-name two">الکترونیک</span>
											</td>
											<td>
												<span class="fw-medium">29,553</span>
											</td>
											<td class="text-center">
												<span class="text-muted fs-12">16% ناخالص</span>
											</td>
											<td class="text-end">
												<span class="badge bg-warning">0.27% <i
														class="ti ti-trending-up"></i></span>
											</td>
										</tr>
										<tr>
											<td>
												<span class="fw-medium top-category-name three">خواربار فروشی</span>
											</td>
											<td>
												<span class="fw-medium">24,577</span>
											</td>
											<td class="text-center">
												<span class="text-muted fs-12">22% ناخالص</span>
											</td>
											<td class="text-end">
												<span class="badge bg-secondary">0.63% <i
														class="ti ti-trending-up"></i></span>
											</td>
										</tr>
										<tr>
											<td>
												<span class="fw-medium top-category-name four">خودروها</span>
											</td>
											<td>
												<span class="fw-medium">19,278</span>
											</td>
											<td class="text-center">
												<span class="text-muted fs-12">18% ناخالص</span>
											</td>
											<td class="text-end">
												<span class="badge bg-primary1">1.14% <i
														class="ti ti-trending-down"></i></span>
											</td>
										</tr>
										<tr>
											<td class="border-bottom-0">
												<span class="fw-medium top-category-name five">سایر</span>
											</td>
											<td class="border-bottom-0">
												<span class="fw-medium">15,934</span>
											</td>
											<td class="text-center border-bottom-0">
												<span class="text-muted fs-12">15% ناخالص</span>
											</td>
											<td class="text-end border-bottom-0">
												<span class="badge bg-primary">3.87% <i
														class="ti ti-trending-up"></i></span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End:: row-1 -->

	<!-- Start:: row-2 -->
	<div class="row">
		<div class="col-xxl-3 col-xl-6">
			<div class="card custom-card overflow-hidden">
				<div class="card-header justify-content-between">
					<div class="card-title">
						آخرین تراکنش‌ها
					</div>
					<a href="javascript:void(0);" class="btn btn-light btn-wave btn-sm text-muted">مشاهده همه<i
							class="ti ti-arrow-narrow-left ms-1"></i></a>
				</div>
				<div class="card-body p-0 pb-1">
					<div class="table-responsive">
						<table class="table text-nowrap">
							<thead>
								<tr>
									<th>محصول</th>
									<th>قیمت</th>
									<th>وضعیت</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div class="d-flex align-items-center gap-2">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/ecommerce/jpg/4.jpg" alt="">
												</span>
											</div>
											<div class="fw-medium">جواهر</div>
										</div>
									</td>
									<td>
										<span class="fw-medium">39.99</span>
									</td>
									<td>
										<span class="badge bg-primary">موفق</span>
									</td>
								</tr>
								<tr>
									<td>
										<div class="d-flex align-items-center gap-2">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/ecommerce/jpg/6.jpg" alt="">
												</span>
											</div>
											<div class="fw-medium">لباس</div>
										</div>
									</td>
									<td>
										<span class="fw-medium">19.95</span>
									</td>
									<td>
										<span class="badge bg-primary1">در انتظار</span>
									</td>
								</tr>
								<tr>
									<td>
										<div class="d-flex align-items-center gap-2">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/ecommerce/jpg/3.jpg" alt="">
												</span>
											</div>
											<div class="fw-medium">ساعت</div>
										</div>
									</td>
									<td>
										<span class="fw-medium">9.99</span>
									</td>
									<td>
										<span class="badge bg-primary2">ناموفق</span>
									</td>
								</tr>
								<tr>
									<td>
										<div class="d-flex align-items-center gap-2">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/ecommerce/jpg/1.jpg" alt="">
												</span>
											</div>
											<div class="fw-medium">کفش</div>
										</div>
									</td>
									<td>
										<span class="fw-medium">24.99</span>
									</td>
									<td>
										<span class="badge bg-primary3">موفق</span>
									</td>
								</tr>
								<tr>
									<td>
										<div class="d-flex align-items-center gap-2">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/ecommerce/jpg/2.jpg" alt="">
												</span>
											</div>
											<div class="fw-medium">گوشی</div>
										</div>
									</td>
									<td>
										<span class="fw-medium">26.45</span>
									</td>
									<td>
										<span class="badge bg-secondary">موفق</span>
									</td>
								</tr>
								<tr>
									<td class="border-bottom-0">
										<div class="d-flex align-items-center gap-2">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/ecommerce/jpg/5.jpg" alt="">
												</span>
											</div>
											<div class="fw-medium">لباس</div>
										</div>
									</td>
									<td class="border-bottom-0">
										<span class="fw-medium">49.95</span>
									</td>
									<td class="border-bottom-0">
										<span class="badge bg-warning">موفق</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>
		<div class="col-xxl-3 col-xl-6">
			<div class="card custom-card">
				<div class="card-header justify-content-between">
					<div class="card-title">
						فعالیت‌های اخیر
					</div>
					<a href="javascript:void(0);"
						class="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">مشاهده همه</a>
				</div>
				<div class="card-body">
					<ul class="list-unstyled recent-activity-list">
						<li>
							<div>
								<div>
									<div class="fw-medium fs-14">ماهان</div>
									<span class="fs-12 activity-time">
										۱۲ ساعت پیش
									</span>
								</div>
								<span class="d-block text-muted">
									توضیحات محصول <span class="text-primary fw-medium">Widget X</span> را به‌روزرسانی
									کرد.
								</span>
							</div>
						</li>
						<li>
							<div>
								<div>
									<div class="fw-medium fs-14">طاها</div>
									<span class="fs-12 activity-time">
										۴:۳۲ بعدازظهر
									</span>
								</div>
								<span class="d-block text-muted">
									یک <span class="fw-medium text-dark">کاربر جدید</span> با نام کاربری <span
										class="fw-medium text-primary1">janesmith89.</span> اضافه کرد.
								</span>
							</div>
						</li>
						<li>
							<div>
								<div>
									<div class="fw-medium fs-14">محسن</div>
									<span class="fs-12 activity-time">
										۱۱:۴۵ صبح
									</span>
								</div>
								<span class="d-block text-muted">
									وضعیت سفارش <a href="javascript:void(0);"
										class="fw-medium text-dark text-decoration-underline">#12345</a> را به <span
										class="fw-medium text-primary2">ارسال شده</span> تغییر داد.
								</span>
							</div>
						</li>
						<li>
							<div>
								<div>
									<div class="fw-medium fs-14">متین</div>
									<span class="fs-12 activity-time">
										۹:۲۷ صبح
									</span>
								</div>
								<span class="d-block text-muted">
									<span class="fw-medium text-primary3">مریم</span> را به گروه آکادمی امروز اضافه کرد.
								</span>
							</div>
						</li>
						<li>
							<div>
								<div>
									<div class="fw-medium fs-14">مریم</div>
									<span class="fs-12 activity-time">
										۸:۵۶ عصر
									</span>
								</div>
								<span class="d-block text-muted">
									یک نظر به وظیفه <span class="fw-medium text-secondary">به‌روزرسانی طرح سایت</span>
									اضافه کرد.
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</div>
		<div class="col-xxl-3 col-xl-6">
			<div class="card custom-card">
				<div class="card-header justify-content-between">
					<div class="card-title">
						آمار فروش
					</div>
					<div class="dropdown">
						<a href="javascript:void(0);" class="btn btn-sm btn-light text-muted dropdown-toggle"
							data-bs-toggle="dropdown" aria-expanded="true"> مرتب‌سازی بر اساس</a>
						<ul class="dropdown-menu" role="menu" data-popper-placement="bottom-end">
							<li><a class="dropdown-item" href="javascript:void(0);">هفته جاری</a></li>
							<li><a class="dropdown-item" href="javascript:void(0);">هفته گذشته</a></li>
							<li><a class="dropdown-item" href="javascript:void(0);"> ماه جاری</a></li>
						</ul>
					</div>
				</div>
				<div class="card-body">
					<div class="d-flex flex-wrap gap-2 justify-content-between flex-fill pb-3">
						<div class="py-3 px-4 rounded border border-dashed bg-light">
							<span>مجموع فروش</span>
							<p class="fw-medium fs-14 mb-0">3.478B</p>
						</div>
						<div class="py-3 px-4 rounded border border-dashed bg-light">
							<span>امسال</span>
							<p class="text-success fw-medium fs-14 mb-0">4,25,349</p>
						</div>
						<div class="py-3 px-4 rounded border border-dashed bg-light">
							<span>سال گذشته</span>
							<p class="text-danger fw-medium fs-14 mb-0">3,41,622</p>
						</div>
					</div>
					<div id="sales-statistics"></div>
				</div>
			</div>

		</div>
		<div class="col-xxl-3 col-xl-6">
			<div class="card custom-card overflow-hidden">
				<div class="card-header pb-0 justify-content-between">
					<div class="card-title">
						آمار کلی
					</div>
					<a href="javascript:void(0);"
						class="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">مشاهده همه</a>
				</div>
				<div class="card-body">
					<ul class="list-group activity-feed">
						<li class="list-group-item">
							<div class="d-flex align-items-center justify-content-between">
								<div class="lh-1">
									<p class="mb-2 fs-13 text-muted">کل هزینه‌ها</p>
									<h6 class="fw-medium mb-0">134,032<span
											class="fs-12 text-success ms-2 fw-normal d-inline-block">۰.۴۵٪<i
												class="ti ti-trending-up ms-1"></i></span></h6>
								</div>
								<div class="text-end">
									<div id="line-graph1"></div>
									<a href="javascript:void(0);" class="fs-12">
										<span>مشاهده بیشتر</span>
										<span class="table-icon"><i
												class="ms-1 d-inline-block ri-arrow-right-line"></i></span>
									</a>
								</div>
							</div>
						</li>
						<li class="list-group-item">
							<div class="d-flex align-items-center justify-content-between">
								<div class="lh-1">
									<p class="mb-2 fs-13 text-muted">سرنخ‌های عمومی</p>
									<h6 class="fw-medium mb-0">74,354<span
											class="fs-12 text-danger ms-2 fw-normal d-inline-block">۳.۸۴٪<i
												class="ti ti-trending-down ms-1"></i></span></h6>
								</div>
								<div class="text-end">
									<div id="line-graph2"></div>
									<a href="javascript:void(0);" class="fs-12">
										<span>مشاهده بیشتر</span>
										<span class="table-icon"><i
												class="ms-1 d-inline-block ri-arrow-right-line"></i></span>
									</a>
								</div>
							</div>
						</li>
						<li class="list-group-item">
							<div class="d-flex align-items-center justify-content-between">
								<div class="lh-1">
									<p class="mb-2 fs-13 text-muted">نرخ ترک مشتری</p>
									<h6 class="fw-medium mb-0">۶.۰۲٪<span
											class="fs-12 text-success ms-2 fw-normal d-inline-block">۰.۷۲٪<i
												class="ti ti-trending-up ms-1"></i></span></h6>
								</div>
								<div class="text-end">
									<div id="line-graph3"></div>
									<a href="javascript:void(0);" class="fs-12">
										<span>مشاهده بیشتر</span>
										<span class="table-icon"><i
												class="ms-1 d-inline-block ri-arrow-right-line"></i></span>
									</a>
								</div>
							</div>
						</li>
						<li class="list-group-item">
							<div class="d-flex align-items-center justify-content-between">
								<div class="lh-1">
									<p class="mb-2 fs-13 text-muted">کاربران جدید</p>
									<h6 class="fw-medium mb-0">7,893<span
											class="fs-12 text-success ms-2 fw-normal d-inline-block">۱۱.۰۵٪<i
												class="ti ti-trending-up ms-1"></i></span></h6>
								</div>
								<div class="text-end">
									<div id="line-graph4"></div>
									<a href="javascript:void(0);" class="fs-12">
										<span>مشاهده بیشتر</span>
										<span class="table-icon"><i
												class="ms-1 d-inline-block ri-arrow-right-line"></i></span>
									</a>
								</div>
							</div>
						</li>
						<li class="list-group-item">
							<div class="d-flex align-items-center justify-content-between">
								<div class="lh-1">
									<p class="mb-2 fs-13 text-muted">کاربران بازگشتی</p>
									<h6 class="fw-medium mb-0">3,258<span
											class="fs-12 text-success ms-2 fw-normal d-inline-block">۱.۶۹٪<i
												class="ti ti-trending-up ms-1"></i></span></h6>
								</div>
								<div class="text-end">
									<div id="line-graph5"></div>
									<a href="javascript:void(0);" class="fs-12">
										<span>مشاهده بیشتر</span>
										<span class="table-icon"><i
												class="ms-1 d-inline-block ri-arrow-right-line"></i></span>
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
	<!-- End:: row-2 -->

	<!-- Start:: row-3 -->
	<div class="row">
		<div class="col-xl-9">
			<div class="card custom-card overflow-hidden">
				<div class="card-header justify-content-between">
					<div class="card-title">
						سفارشات اخیر
					</div>
					<a href="javascript:void(0);"
						class="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">مشاهده همه</a>
				</div>

				<div class="card-body p-0">
					<div class="table-responsive">
						<table class="table text-nowrap">
							<thead>
								<tr>
									<th class="text-center">
										<input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value=""
											aria-label="...">
									</th>
									<th>مشتری</th>
									<th>محصول</th>
									<th class="text-center">تعداد</th>
									<th class="text-center">مبلغ</th>
									<th>وضعیت</th>
									<th>تاریخ سفارش</th>
									<th>عملیات</th>

								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="text-center">
										<input class="form-check-input" type="checkbox" id="checkboxNoLabel02" value=""
											aria-label="...">
									</td>
									<td>
										<div class="d-flex align-items-center gap-3">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/faces/1.jpg" alt="">
												</span>
											</div>
											<div>
												<span class="d-block fw-medium">الهه</span>
												<span class="d-block fs-11 text-muted">elenasmith387@gmail.com</span>
											</div>
										</div>
									</td>
									<td>
										پاک‌کننده همه منظوره
									</td>
									<td class="text-center">
										3
									</td>
									<td class="text-center">
										9.99
									</td>
									<td>
										<span class="badge bg-primary-transparent">در حال انجام</span>
									</td>
									<td>
										03 تیر 1404
									</td>
									<td>
										<div class="btn-list">
											<button class="btn btn-sm btn-icon btn-success-light"><i
													class="ri-pencil-line"></i></button>
											<button class="btn btn-sm btn-icon btn-danger-light"><i
													class="ri-delete-bin-line"></i></button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">
										<input class="form-check-input" type="checkbox" id="checkboxNoLabel12" value=""
											aria-label="...">
									</td>
									<td>
										<div class="d-flex align-items-center gap-3">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/faces/12.jpg" alt="">
												</span>
											</div>
											<div>
												<span class="d-block fw-medium">گلشن</span>
												<span class="d-block fs-11 text-muted">noahrussell556@gmail.com</span>
											</div>
										</div>
									</td>
									<td>
										مجموعه چاقوی آشپزخانه
									</td>
									<td class="text-center">
										4
									</td>
									<td class="text-center">
										49.99
									</td>
									<td>
										<span class="badge bg-primary1-transparent">در انتظار</span>
									</td>
									<td>
										03 تیر 1404
									</td>
									<td>
										<div class="btn-list">
											<button class="btn btn-sm btn-icon btn-success-light"><i
													class="ri-pencil-line"></i></button>
											<button class="btn btn-sm btn-icon btn-danger-light"><i
													class="ri-delete-bin-line"></i></button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">
										<input class="form-check-input" type="checkbox" id="checkboxNoLabel42" value=""
											aria-label="...">
									</td>
									<td>
										<div class="d-flex align-items-center gap-3">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/faces/6.jpg" alt="">
												</span>
											</div>
											<div>
												<span class="d-block fw-medium">حسن</span>
												<span class="d-block fs-11 text-muted">gracemitchell79@gmail.com</span>
											</div>
										</div>
									</td>
									<td>
										پتوی مخمل
									</td>
									<td class="text-center">
										2
									</td>
									<td class="text-center">
										29.99
									</td>
									<td>
										<span class="badge bg-primary2-transparent">موفق</span>
									</td>
									<td>
										03 تیر 1404
									</td>
									<td>
										<div class="btn-list">
											<button class="btn btn-sm btn-icon btn-success-light"><i
													class="ri-pencil-line"></i></button>
											<button class="btn btn-sm btn-icon btn-danger-light"><i
													class="ri-delete-bin-line"></i></button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">
										<input class="form-check-input" type="checkbox" id="checkboxNoLabel32" value=""
											aria-label="...">
									</td>
									<td>
										<div class="d-flex align-items-center gap-3">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/faces/14.jpg" alt="">
												</span>
											</div>
											<div>
												<span class="d-block fw-medium">سارا</span>
												<span class="d-block fs-11 text-muted">leophillips124@gmail.com</span>
											</div>
										</div>
									</td>
									<td>
										پخش کننده موسیقی
									</td>
									<td class="text-center">
										4
									</td>
									<td class="text-center">
										19.99
									</td>
									<td>
										<span class="badge bg-primary2-transparent">موفق</span>
									</td>
									<td>
										03 تیر 1404
									</td>
									<td>
										<div class="btn-list">
											<button class="btn btn-sm btn-icon btn-success-light"><i
													class="ri-pencil-line"></i></button>
											<button class="btn btn-sm btn-icon btn-danger-light"><i
													class="ri-delete-bin-line"></i></button>
										</div>
									</td>
								</tr>
								<tr>
									<td class="text-center">
										<input class="form-check-input" type="checkbox" id="checkboxNoLabel2" value=""
											aria-label="...">
									</td>
									<td>
										<div class="d-flex align-items-center gap-3">
											<div class="lh-1">
												<span class="avatar avatar-sm">
													<img src="/images/faces/3.jpg" alt="">
												</span>
											</div>
											<div>
												<span class="d-block fw-medium">ملیحه</span>
												<span class="d-block fs-11 text-muted">chloelewis67@gmail.com</span>
											</div>
										</div>
									</td>
									<td>
										بطری آب
									</td>
									<td class="text-center">
										2
									</td>
									<td class="text-center">
										14.99
									</td>
									<td>
										<span class="badge bg-primary3-transparent">در انتظار</span>
									</td>
									<td>
										03 تیر 1404
									</td>
									<td>
										<div class="btn-list">
											<button class="btn btn-sm btn-icon btn-success-light"><i
													class="ri-pencil-line"></i></button>
											<button class="btn btn-sm btn-icon btn-danger-light"><i
													class="ri-delete-bin-line"></i></button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3">
			<div class="card custom-card">
				<div class="card-header justify-content-between">
					<div class="card-title">
						فروش بر اساس کشور
					</div>
					<a href="javascript:void(0);"
						class="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">مشاهده همه</a>
				</div>
				<div class="card-body">
					<ul class="list-unstyled sales-country-list">
						<li>
							<div class="d-flex align-items-start gap-3">
								<div class="lh-1">
									<span class="avatar avatar-sm p-1 bg-light border">
										<img src="/images/flags/us_flag.jpg" alt="">
									</span>
								</div>
								<div class="flex-fill">
									<div class="d-flex align-items-center justify-content-between">
										<span class="d-block fw-medium mb-2 lh-1">ایالات متحده</span>
										<span class="fs-14 fw-medium d-block lh-1">31,672</span>
									</div>
									<div class="progress progress-md p-1" role="progressbar" aria-valuenow="90"
										aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar progress-bar-striped progress-bar-animated"
											style="width: 90%"></div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex align-items-start gap-3">
								<div class="lh-1">
									<span class="avatar avatar-sm p-1 bg-light border">
										<img src="/images/flags/italy_flag.jpg" alt="">
									</span>
								</div>
								<div class="flex-fill">
									<div class="d-flex align-items-center justify-content-between">
										<span class="d-block fw-medium mb-2 lh-1">ایتالیا</span>
										<span class="fs-14 fw-medium d-block lh-1">29,557</span>
									</div>
									<div class="progress progress-md p-1" role="progressbar" aria-valuenow="85"
										aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar bg-primary1 progress-bar-striped progress-bar-animated"
											style="width: 85%"></div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex align-items-start gap-3">
								<div class="lh-1">
									<span class="avatar avatar-sm p-1 bg-light border">
										<img src="/images/flags/spain_flag.jpg" alt="">
									</span>
								</div>
								<div class="flex-fill">
									<div class="d-flex align-items-center justify-content-between">
										<span class="d-block fw-medium mb-2 lh-1">اسپانیا</span>
										<span class="fs-14 fw-medium d-block lh-1">24,562</span>
									</div>
									<div class="progress progress-md p-1" role="progressbar" aria-valuenow="80"
										aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar bg-primary2 progress-bar-striped progress-bar-animated"
											style="width: 80%"></div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex align-items-start gap-3">
								<div class="lh-1">
									<span class="avatar avatar-sm p-1 bg-light border">
										<img src="/images/flags/uae_flag.jpg" alt="">
									</span>
								</div>
								<div class="flex-fill">
									<div class="d-flex align-items-center justify-content-between">
										<span class="d-block fw-medium mb-2 lh-1">امارات</span>
										<span class="fs-14 fw-medium d-block lh-1">21,532</span>
									</div>
									<div class="progress progress-md p-1" role="progressbar" aria-valuenow="75"
										aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar bg-primary3 progress-bar-striped progress-bar-animated"
											style="width: 75%"></div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex align-items-start gap-3">
								<div class="lh-1">
									<span class="avatar avatar-sm p-1 bg-light border">
										<img src="/images/flags/argentina_flag.jpg" alt="">
									</span>
								</div>
								<div class="flex-fill">
									<div class="d-flex align-items-center justify-content-between">
										<span class="d-block fw-medium mb-2 lh-1">آرژانتین</span>
										<span class="fs-14 fw-medium d-block lh-1">18,753</span>
									</div>
									<div class="progress progress-md p-1" role="progressbar" aria-valuenow="70"
										aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
											style="width: 70%"></div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex align-items-start gap-3">
								<div class="lh-1">
									<span class="avatar avatar-sm p-1 bg-light border">
										<img src="/images/flags/china_flag.jpg" alt="">
									</span>
								</div>
								<div class="flex-fill">
									<div class="d-flex align-items-center justify-content-between">
										<span class="d-block fw-medium mb-2 lh-1">چین</span>
										<span class="fs-14 fw-medium d-block lh-1">12,342</span>
									</div>
									<div class="progress progress-md p-1" role="progressbar" aria-valuenow="65"
										aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar bg-info progress-bar-striped progress-bar-animated"
											style="width: 65%"></div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex align-items-start gap-3">
								<div class="lh-1">
									<span class="avatar avatar-sm p-1 bg-light border">
										<img src="/images/flags/french_flag.jpg" alt="">
									</span>
								</div>
								<div class="flex-fill">
									<div class="d-flex align-items-center justify-content-between">
										<span class="d-block fw-medium mb-2 lh-1">فرانسه</span>
										<span class="fs-14 fw-medium d-block lh-1">15,533</span>
									</div>
									<div class="progress progress-md p-1" role="progressbar" aria-valuenow="60"
										aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar bg-warning progress-bar-striped progress-bar-animated"
											style="width: 60%"></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="header-responsive-search" tabindex="-1" aria-labelledby="header-responsive-search"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<div class="input-group">
						<input type="text" class="form-control border-end-0" placeholder="جستجو" aria-label="جستجو"
							aria-describedby="button-addon2">
						<button class="btn btn-primary" type="button" id="button-addon2"><i
								class="bi bi-search"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End:: row-3 -->
	</div>
</template>

<script setup>

onMounted(() => {
	useHead({
		script: [
			{
				src: 'js/sales-dashboard.js',
				defer: true
			}
		]
	})
})

</script>


