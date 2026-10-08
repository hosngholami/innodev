import { ref } from 'vue'
import Validator from 'validatorjs/dist/validator'
export default function () {

    const { $axios } = useNuxtApp()
    const loading = ref(false)
    const errors = ref({})

    const categoryList = ref({})


    const currentPage = ref(1)
    const nextPageState = ref(null)
    const PreviousPageState = ref(null)
    const count = ref(0)
    const currentPageCount = ref(0)
    const selectedCategoryId = ref(null)

    const form = ref({
        id: -1,
        title: "",
        priority: 0,
        status: -1
    })


    const clearForm = async () => {
        form.value = {
            title: "",
            priority: 0,
            status: -1
        }
    }


    const rules = {
        title: 'required',
        priority: 'required',
        status: 'required',
    }


    const messages = {
        'required.title': 'عنوان الزامی می‌باشد',
        'required.priority': 'اولویت الزامی می‌باشد',
        'priority.number': 'فرمت اولویت صحیح نیست',
        'required.status': 'وضعیت الزامی می باشد'
    }


    const getCategoryList = async () => {
        loading.value = true
        errors.value = {}
        clearForm()

        try {
            const response = (await $axios.get('/setting/api/v1/category', {
                params: {
                    page: currentPage.value,
                    title: form.value.title,
                    status: form.value.status === -1 ? null : form.value.status
                }
            }))
            nextPageState.value = response.data.next
            PreviousPageState.value = response.data.previous
            categoryList.value = response.data.results
            count.value = response.data.count
            currentPageCount.value = response.data.current_page_count


            


        }
        catch (error) {
            errors.value = error
        }
        finally {
            loading.value = false
           
        }

         
    }

    const nextPage = async () => {
        currentPage.value += 1
        await getCategoryList(currentPage.value)
    }

    const PreviousPage = async () => {
        currentPage.value -= 1

        await getCategoryList(currentPage.value)
    }

    const addCategory = async () => {

        errors.value = {}
        const validation = new Validator(form.value, rules, messages)
        if (validation.fails()) {
            errors.value = validation.errors.all()
            return false
        }

        if (form.value.priority < 0) {
            errors.value = {
                priority: ['مقدار اولویت نمی تواند منفی  یا صفر باشد.']
            }
            return false
        }

        if (form.value.status < 0) {
            errors.value = {
                status: ['مقدار وضعیت نمی تواند منفی باشد.']
            }
            return false
        }
        const response = (await $axios.post('/setting/api/v1/category/', form.value))

        const modalElement = document.getElementById('create-category-menu')
        const modal = bootstrap.Modal.getInstance(modalElement)

        modal?.hide()

        await getCategoryList(currentPage.value)
        clearForm()
    }

    const search = async () => {
        currentPage.value = 1

        await getCategoryList(currentPage.value)
        const modalElement = document.getElementById('search-category-menu')
        const modal = bootstrap.Modal.getInstance(modalElement)

        modal?.hide()
    }

    const deleteCategory = async () => {

        if (!selectedCategoryId.value) {
            return
        }


        console.log(selectedCategoryId)
        try {
            const response = await $axios.delete('/setting/api/v1/category/', {
                data: {
                    id: selectedCategoryId.value
                }
            })
            const modalElement = document.getElementById('delete-category-menu')
            const modal = bootstrap.Modal.getInstance(modalElement)

            modal?.hide()

            if (currentPageCount.value == 1) {
                currentPage.value -= 1
            }

            if(currentPage.value == 0){
                currentPage.value = 1
                clearForm()
            }

            console.log(currentPageCount.value)

            await getCategoryList(currentPage.value)
        }
        catch (error) {
        }
        finally {
        }




    }

    return {
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

    }

}