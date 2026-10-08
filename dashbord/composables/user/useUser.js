import { onMounted, ref } from 'vue'
export default function () {

  const { $axios } = useNuxtApp()

  const users = ref([])
  const loading = ref(false)
  const error = ref(null)




  const fetchUsers = async () => {
    loading.value = true
    error.value = null

    await new Promise(resolve => setTimeout(resolve, 3000))

    try {
      const response = await $axios.get('/accounting/api/v1/user')
      users.value = response.data

    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const deleteUser = async (id) => {

    
    loading.value = true;
    error.value = null;

    try {
      console.log(`/accounting/api/v1/user/${id}/delete/`)
        const response = await $axios.delete(`/accounting/api/v1/user/${id}/delete/`)
        console.log(response.data)
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }

  }


  return {
    users,
    loading,
    error,
    fetchUsers,
    deleteUser
  }

}