import { ref } from 'vue'
import Validator from 'validatorjs/dist/validator'

export function useCategoryForm() {
  const form = ref({
    id: -1,
    title: '',
    priority: 0,
    status: -1
  })

  const errors = ref({})

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

  const clearForm = () => {
    form.value = {
      id: -1,
      title: '',
      priority: 0,
      status: -1
    }
    errors.value = {}
  }

  const validate = () => {
    errors.value = {}
    const validation = new Validator(form.value, rules, messages)

    if (validation.fails()) {
      errors.value = validation.errors.all()
      return false
    }

    if (form.value.priority < 0) {
      errors.value = { priority: ['مقدار اولویت نمی‌تواند منفی یا صفر باشد.'] }
      return false
    }

    if (form.value.status < 0) {
      errors.value = { status: ['مقدار وضعیت نمی‌تواند منفی باشد.'] }
      return false
    }

    return true
  }

  return {
    form,
    errors,
    clearForm,
    validate
  }
}