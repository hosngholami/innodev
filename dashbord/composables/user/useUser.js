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
      const response = await $axios.get('/accounting/api/v1/user')
      users.value = response.data   
     
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }


  return {
    users,      
    loading,    
    error,      
    fetchUsers   
  }

}