import { useCategoryForm } from './useCategoryForm'
import { useCategoryList } from './useCategoryList'
import { useCategoryActions } from './useCategoryActions'

export default function useCategory() {
  const formPart = useCategoryForm()
  const listPart = useCategoryList()

  const actions = useCategoryActions({
    form: formPart.form,
    validate: formPart.validate,
    clearForm: formPart.clearForm,
    getCategoryList: () => listPart.getCategoryList(formPart.form, formPart.clearForm),
    currentPage: listPart.currentPage,
    currentPageCount: listPart.currentPageCount
  })

  const getCategoryList = () => listPart.getCategoryList(formPart.form, formPart.clearForm)
  const nextPage = () => listPart.nextPage(formPart.form, formPart.clearForm)
  const previousPage = () => listPart.previousPage(formPart.form, formPart.clearForm)
  const search = () => listPart.search(formPart.form, formPart.clearForm)

  return {
    // Form
    form: formPart.form,
    errors: formPart.errors,
    clearForm: formPart.clearForm,

    // List
    loading: listPart.loading,
    categoryList: listPart.categoryList,
    currentPage: listPart.currentPage,
    nextPageState: listPart.nextPageState,
    previousPageState: listPart.previousPageState,
    count: listPart.count,
    currentPageCount: listPart.currentPageCount,

    // Actions
    selectedCategoryId: actions.selectedCategoryId,
    addCategory: actions.addCategory,
    deleteCategory: actions.deleteCategory,

    // Methods
    getCategoryList,
    nextPage,
    previousPage,
    search
  }
}