<template>
    <div class="card-footer border-top-0">
        <div class="d-flex align-items-center">
            <div>
                نمایش {{ currentPageCount }} مورد <i class="bi bi-arrow-left ms-2 fw-medium"></i>
            </div>
            <div class="ms-auto">
                <nav aria-label="Page navigation" class="pagination-style-4">
                    <ul class="pagination mb-0">
                        <li class="page-item">

                            <button @click="PreviousPage" class="page-link text-primary "
                                :disabled="PreviousPageState == null"> قبلی </button>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="javascript:void(0);">{{ currentPage }}</a>
                        </li>
                        <li class="page-item">
                            <button @click="nextPage" :disabled="nextPageState == null" class="page-link text-primary">
                                بعدی
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        name : "Pagination",
        props: {
            currentPageCount: {
                type: Number,
                required : true
            },
            currentPage: {
                type: Number,
                required: true
            },
            PreviousPageState : {
                type: Number,
                required:true
            },
            PreviousPage: {
                type: Function,
                required:true
            },
            nextPage: {
                type: Function,
                required:true
            },
            nextPageState :{
                type:Number,
                required:true
            }

        }

    }



</script>