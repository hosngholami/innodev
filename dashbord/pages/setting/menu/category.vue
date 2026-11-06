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
      <!-- <div class="card custom-card" :class="[loading == true ? 'placeholder' : '']"> -->
      <div class="card custom-card">
        <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3 ">
          <div class="card-title"> دسته بندی
            <!-- <span class="badge bg-primary rounded ms-2 fs-12 align-middle placeholder-wave">{{ count }}</span> -->
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
              <select class="btn btn-light btn-sm btn-wave waves-effect waves-light dropdown-menu"
                v-model="category.sortedState" @change="category.sorted">
                <option value="-1">
                  مرتب‌سازی بر اساس
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
                <tr class="crm-contact contacts-list" v-for="item in category.list.value">
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
                    <span class="badge bg-danger-transparent" v-if="item.status == false">
                      غیرفعال
                    </span>
                  </td>

                  <td>
                    <div class="btn-list">
                      <!-- <button data-bs-toggle="modal" @click="updateForm(item.id)" data-bs-target="#update-category-menu"
                        class="btn btn-sm btn-info-light btn-icon">
                        <i class="ri-pencil-line"></i>
                      </button> -->
                      <!-- <button data-bs-toggle="modal" @click="selectedCategoryId = item.id"
                        data-bs-target="#delete-category-menu"
                        class="btn btn-sm btn-primary2-light btn-icon contact-delete">
                        <i class="ri-delete-bin-line"></i>
                      </button> -->
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Pagination :currentPage="category.currentPage" :nextPage="next" :PreviousPage="previous" />
      </div>
    </div>
  </div>
  <!--End::row-1 -->
  <div class="modal fade" id="create-category-menu" tabindex="-1" aria-hidden="true">
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
              <input type="text" v-model="category.form.title" class="form-control" placeholder="عنوان دسته بندی" />
              <!-- <div v-if="category.errors.title" class="error-feedback"> {{ category.,errors.title[0] }}</div> -->
            </div>
            <div class="col-xl-12">
              <label for="contact-lead-score" class="form-label">اولویت</label>
              <input type="number" v-model="category.form.priority" class="form-control" placeholder="اولویت" />
              <!-- <div v-if="errors.priority" class="error-feedback"> {{ errors.priority[0] }}</div> -->
            </div>
            <div class="col-xl-12">
              <label class="form-label">وضعیت</label>
              <select v-model="category.form.status" class="form-control">
                <option value="-1">انتخاب کنید</option>
                <option value="1">فعال</option>
                <option value="0">غیرفعال</option>
              </select>
              <!-- <div v-if="errors.status" class="error-feedback"> {{ errors.status[0] }}</div> -->
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button id="btn-close" type="button" class="btn m-0 btn-primary1-light me-2" data-bs-dismiss="modal">
            لغو
          </button>
          <button type="button" @click="category.add()" class="btn m-0 btn-primary">
            ذخیره
          </button>

        </div>
      </div>
    </div>
  </div>


  <!-- End:: Create Contact -->
</template>

<script setup lang="ts">
import { useCategory } from '@/composables/setting/useCategory'
import type { IEntityListManager } from '~/types/IEntityListManager'

const category = reactive(new useCategory()) as IEntityListManager

onMounted(() => {
  category.getList()
})

const next = async () => {
  await category.nextPage()
}

const previous = async () => {
  await category.previousPage()
}


definePageMeta({
  middleware: []
})
</script>
