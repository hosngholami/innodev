import { ref } from 'vue'

export function useCategoryActions({ form, validate, clearForm, getCategoryList, currentPage, currentPageCount }) {
  
    const { $axios } = useNuxtApp()
  const selectedCategoryId = ref(null)

  const addCategory = async () => {
    if (!validate()) return false

    try {
      await $axios.post('/setting/api/v1/category/', form.value)

      const modalElement = document.getElementById('create-category-menu')
      const modal = bootstrap.Modal.getInstance(modalElement)
      modal?.hide()

      await getCategoryList()
      clearForm()
    } catch (error) {
      console.error(error)
    }
  }

  const deleteCategory = async () => {
    if (!selectedCategoryId.value) return

    try {
      await $axios.delete('/setting/api/v1/category/', {
        data: { id: selectedCategoryId.value }
      })

      const modalElement = document.getElementById('delete-category-menu')
      const modal = bootstrap.Modal.getInstance(modalElement)
      modal?.hide()

      if (currentPageCount.value === 1 && currentPage.value > 1) {
        currentPage.value -= 1
      }

      await getCategoryList()
      clearForm()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    selectedCategoryId,
    addCategory,
    deleteCategory
  }
}