<template>


    <td class="contacts-checkbox">
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="...">
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
                    aria-controls="offcanvasExample"><span class="d-block fw-medium">{{ email }}</span></a>
                <span class="d-block text-muted fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary"
                    title="آخرین تماس">
                    <i class="ri-account-circle-line me-1 fs-13 align-middle"></i>۲۶
                    خرداد ۱۴۰۳ - ۱۰:۳۰ صبح
                </span>
            </div>
        </div>
    </td>
    <td>
        <div>
            <span class="d-block mb-1"><i class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>
                {{ email }}
            </span>
        </div>
    </td>
    <td>
        <div class="d-flex align-items-center gap-2">
            <div class="lh-1">
                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                    <img src="/images/faces/4.jpg" alt="">
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
            <span class="d-block"><i class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{{ phone }}</span>
        </div>
    </td>
    <td>
        <span class="badge bg-primary-transparent">مشتری ویژه</span>
    </td>
    <td>
        معرفی
    </td>
    <td>
        {{ created_date }}
    </td>
     <td>
        {{ updated_date }}
    </td>
    <td>
        <div class="btn-list">
            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                class="btn btn-sm btn-primary-light btn-icon"><i class="ri-eye-line"></i></a>
            <button class="btn btn-sm btn-info-light btn-icon"><i class="ri-pencil-line"></i></button>
            <button class="btn btn-sm btn-primary2-light btn-icon contact-delete"><i
                    class="ri-delete-bin-line"></i></button>
        </div>
    </td>



</template>


<script>
export default {

    name: 'User',
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        is_staff: {
            type: Boolean,
            required: false
        },
        is_active: {
            type: Boolean,
            required: false
        },
        is_superuser: {
            type: Boolean,
            required: false
        },
        is_verified: {
            type: Boolean,
            required: false
        },
        created_date: {
            type: String,
            required: false
        },
        updated_date: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: true
        }
        
    }
}
</script>