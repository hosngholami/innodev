import { ref } from 'vue'

export function useCategoryList() {
  const { $axios } = useNuxtApp()

  const loading = ref(false)
  const categoryList = ref([])
  const currentPage = ref(1)
  const nextPageState = ref(null)
  const previousPageState = ref(null)
  const count = ref(0)
  const currentPageCount = ref(0)
  const filterState = ref(false)

  const getCategoryList = async (form, clearFormFn) => {
    loading.value = true

    if (!filterState.value && clearFormFn) {
      clearFormFn()
    }

    try {
      const response = await $axios.get('/setting/api/v1/category', {
        params: {
          page: currentPage.value,
          title: form.value.title || undefined,
          status: form.value.status === -1 ? null : form.value.status
        }
      })

      nextPageState.value = response.data.next
      previousPageState.value = response.data.previous
      categoryList.value = response.data.results
      count.value = response.data.count
      currentPageCount.value = response.data.current_page_count
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  const nextPage = async (form, clearFormFn) => {
    currentPage.value += 1
    await getCategoryList(form, clearFormFn)
  }

  const previousPage = async (form, clearFormFn) => {
    currentPage.value -= 1
    await getCategoryList(form, clearFormFn)
  }

  const search = async (form, clearFormFn) => {
    currentPage.value = 1
    filterState.value = true
    await getCategoryList(form, clearFormFn)

    const modalElement = document.getElementById('search-category-menu')
    const modal = bootstrap.Modal.getInstance(modalElement)
    modal?.hide()
  }

  return {
    loading,
    categoryList,
    currentPage,
    nextPageState,
    previousPageState,
    count,
    currentPageCount,
    filterState,
    getCategoryList,
    nextPage,
    previousPage,
    search
  }
}