<template>
  <!-- Start::page-header -->
  <div class="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2">

    <div>
  
      <nav>
        <ol class="breadcrumb mb-1">
          <li class="breadcrumb-item">
            <a href="javascript:void(0);">تنظیمات</a>
          </li>
          <li class="breadcrumb-item">
            <a href="javascript:void(0);">تنظیمات سایت</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            دسته بندی منو
          </li>
        </ol>
      </nav>
      <h1 class="page-title fw-medium fs-18 mb-0">لیست دسته بندی منو</h1>
    </div>
  </div>

  <!-- End::page-header -->

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12 placeholder-glow">
      <div class="card custom-card" :class="[loading == true ? 'placeholder' : '']">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3 ">
          <div class="card-title"> دسته بندی
            <span class="badge bg-primary rounded ms-2 fs-12 align-middle placeholder-wave">{{ count}}</span>
        
          </div>
          <div class="d-flex flex-wrap gap-2">
             
            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-category-menu">
              <i class="ri-add-line me-1 fw-medium align-middle"></i> ایجاد دسته
              بندی
            </button>
            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#search-category-menu">
              <i class="bi bi-search"></i> جستجو
            </button>
             <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#create-category-menu">
              <i class="bi bi-trash3-fill me-1 fw-medium align-middle"></i> 
               حذف موارد انتخاب شده
            </button>
            <div class="dropdown">
            <select class="btn btn-light btn-sm btn-wave waves-effect waves-light dropdown-menu" v-model="sortedState" @change="sorted">
                  <option value="">
                      مرتب‌سازی بر اساس<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </option>
                  <option class="dropdown-item" value="title">عنوان</option>
                  <option value="priority">اولویت</option>
                  <option value="status">وضعیت</option>
            </select>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table text-nowrap table-hover">
              <thead>
                <tr>
                  <th scope="col">
                    <input class="form-check-input check-all" type="checkbox" value="" aria-label="..." />
                  </th>
                  <th scope="col">عنوان</th>
                  <th scope="col">اولویت</th>
                  <th scope="col">وضعیت</th>
                  <th scope="col">عملیات</th>
                </tr>
              </thead>
              <tbody>
                <tr class="crm-contact contacts-list" v-for="item in categoryList">
                  <td class="contacts-checkbox">
                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." />
                  </td>
                  <td>
                    <span class="d-block">{{ item.title }}</span>
                  </td>
                  <td>
                    <span class="d-block">{{ item.priority }}</span>
                  </td>

                  <td>
                    <span class="badge bg-success-transparent" v-if="item.status">
                      فعال
                    </span>
                    <span class="badge bg-danger-transparent" v-if="item.status == false" >
                      غیرفعال
                    </span>
                  </td>

                  <td>
                    <div class="btn-list">
                      <button data-bs-toggle="modal" @click="updateForm(item.id)" data-bs-target="#update-category-menu" class="btn btn-sm btn-info-light btn-icon">
                        <i class="ri-pencil-line"></i>
                      </button>
                      <button data-bs-toggle="modal" @click="selectedCategoryId = item.id" data-bs-target="#delete-category-menu" class="btn btn-sm btn-primary2-light btn-icon contact-delete">
                        <i class="ri-delete-bin-line"></i>
                      </button>
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
              نمایش {{  currentPageCount }} مورد <i class="bi bi-arrow-left ms-2 fw-medium"></i>
            </div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-4">
                <ul class="pagination mb-0">
                  <li class="page-item">

                    <button @click="PreviousPage"   class="page-link text-primary " :disabled="PreviousPageState == null" > قبلی </button>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">{{ currentPage }}</a>
                  </li>
                  <li class="page-item">
                    <button @click="nextPage"   :disabled="nextPageState == null"   class="page-link text-primary">
                      بعدی
                    </button>
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

  <!-- Start:: Create Contact -->
  <div class="modal fade" id="create-category-menu"  tabindex="-1" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">دسته بندی جدید</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
        </div>
        <div class="modal-body">
          <div class="row gy-3">
            <div class="col-xl-12"></div>
            <div class="col-xl-12">
              <label for="deal-title" class="form-label">عنوان دسته بندی</label>
              <input type="text" v-model="form.title" class="form-control" placeholder="عنوان دسته بندی" />
                   <div v-if="errors.title" class="error-feedback">  {{ errors.title[0] }}</div>
            </div>
            <div class="col-xl-12">
              <label for="contact-lead-score" class="form-label">اولویت</label>
              <input type="number" v-model="form.priority" class="form-control" placeholder="اولویت" />
               <div v-if="errors.priority" class="error-feedback">  {{ errors.priority[0] }}</div>
            </div>
            <div class="col-xl-12">
              <label class="form-label">وضعیت</label>
              <select v-model="form.status" class="form-control">
                <option value="-1">انتخاب کنید</option>
                <option value="1">فعال</option>
                <option value="0">غیرفعال</option>
              </select>
               <div v-if="errors.status" class="error-feedback">  {{ errors.status[0] }}</div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button id="btn-close" type="button" class="btn m-0 btn-primary1-light me-2" data-bs-dismiss="modal"  >
            لغو
          </button>
          <button type="button" @click="addCategory" class="btn m-0 btn-primary">
            ذخیره
          </button>

        </div>
      </div>
    </div>
  </div>


 <div class="modal fade" id="update-category-menu"  tabindex="-1" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">ویرایش دسته بندی</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
        </div>
        <div class="modal-body">
          <div class="row gy-3">
            <div class="col-xl-12"></div>
            <div class="col-xl-12">
              <label for="deal-title" class="form-label">عنوان دسته بندی</label>
              <input type="text" v-model="form.title" class="form-control" placeholder="عنوان دسته بندی" />
                   <div v-if="errors.title" class="error-feedback">  {{ errors.title[0] }}</div>
            </div>
            <div class="col-xl-12">
              <label for="contact-lead-score" class="form-label">اولویت</label>
              <input type="number" v-model="form.priority" class="form-control" placeholder="اولویت" />
               <div v-if="errors.priority" class="error-feedback">  {{ errors.priority[0] }}</div>
            </div>
            <div class="col-xl-12">
              <label class="form-label">وضعیت</label>
              <select v-model="form.status" class="form-control">
                <option value="-1">انتخاب کنید</option>
                <option value="1">فعال</option>
                <option value="0">غیرفعال</option>
              </select>
               <div v-if="errors.status" class="error-feedback">  {{ errors.status[0] }}</div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button id="btn-close" type="button" class="btn m-0 btn-primary1-light me-2" data-bs-dismiss="modal"  >
            لغو
          </button>
          <button type="button" @click="update" class="btn m-0 btn-primary">
            ذخیره
          </button>

        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="delete-category-menu" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
        </div>
        <div class="modal-body">
          <div class="row gy-3">
            <div class="col-xl-12"></div>
            <div class="col-xl-12">
              <div class="text-center px-5 pb-0 svg-primary">
                <svg class="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewbox="0 0 24 24" width="1.5rem" fill="#000000">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
                <h4 class="">
                 آیا از حذف این مورد مطمئن هستید؟  
                </h4>
                <div class="">
                  <button  class="btn btn-sm btn-outline-danger m-1"  data-bs-dismiss="modal">
                    رد کردن
                  </button>
                  <button type="button" @click="deleteCategory" class="btn btn-sm btn-primary m-1">پذیرفتن</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>

    <div class="modal fade" id="search-category-menu"  tabindex="-1" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">فیلتر دسته بندی</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
        </div>
        <div class="modal-body">
          <div class="row gy-3">
            <div class="col-xl-12"></div>
            <div class="col-xl-12">
              <label for="deal-title" class="form-label">عنوان دسته بندی</label>
              <input type="text" v-model="form.title" class="form-control" placeholder="عنوان دسته بندی" />
                
            </div>
            <div class="col-xl-12">
              <label for="contact-lead-score" class="form-label">اولویت</label>
              <input type="number" v-model="form.priority" class="form-control" placeholder="اولویت" />
             
            </div>
            <div class="col-xl-12">
              <label class="form-label">وضعیت</label>
              <select v-model="form.status" class="form-control">
                <option value="-1">انتخاب کنید</option>
                <option value="1">فعال</option>
                <option value="0">غیرفعال</option>
              </select>
               
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button id="btn-close" type="button" class="btn m-0 btn-primary1-light me-2" data-bs-dismiss="modal"  >
            لغو
          </button>
          <button type="button" @click="search" class="btn m-0 btn-primary">
            فیلتر
          </button>

        </div>
      </div>
    </div>
   </div>

  <!-- End:: Create Contact -->
</template>

<script setup>
import useCategory from "~/composables/setting/useCategory";
const {  
        form,
        categoryList,
        getCategoryList,
        addCategory,
        loading,
        errors,
        nextPage,
        currentPage,
        PreviousPage,
        nextPageState,
        PreviousPageState,
        count,
        currentPageCount,
        deleteCategory,
        selectedCategoryId,
        search,
        update,
        updateForm,
        sortedState,
        sorted
 } = useCategory();

onMounted(() => {
  getCategoryList();
});

definePageMeta({
    middleware: []
})
</script>
