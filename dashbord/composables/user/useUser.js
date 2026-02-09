import { onMounted, ref } from 'vue'
export default function () {

    const { $axios } = useNuxtApp()

    const users = ref([])
    const loading = ref(false)
    const error = ref(null)


    const fetchUsers = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await $axios.get('http://127.0.0.1:8000/accounting/api/v1/user')
      users.value = response.data   // ← assuming array of users
      console.log('Users loaded:', users.value)
    } catch (err) {
      error.value = err
      console.error('Failed to fetch users:', err)
    } finally {
      loading.value = false
    }
  }


  return {
    users,       // reactive array
    loading,     // boolean
    error,       // error object or null
    fetchUsers   // function you can call
  }

}