export default function () {

    const { $axios } = useNuxtApp()


    const partentList = ref({})
    const menuList = ref({})


  const form = ref({
    title: "",
    url: "",             
    icon: "",
    priority: 0,
    status: 1,           
    parent: null,
    category_id: 117
})

const addMenu = async () => {
    try {
        const response = await $axios.post('/setting/api/v1/menu/', form.value)
        console.log('موفق:', response.data)
    } catch (error) {
        console.log('خطای کامل:', error.response?.data)
        console.log('وضعیت:', error.response?.status)
    }
}


    const getParentList = async() => {
         const response =  (await $axios.get('/setting/api/v1/menu/parent/'))
         console.log(response)
          partentList.value = response.data.results
    }


    const getMenuList = async () => {
          const response = (await $axios.get('/setting/api/v1/menu'))
          menuList.value = response.data.results

        
    }




    return {
        partentList,
        getParentList,
        getMenuList,
        menuList,
        addMenu,
        form
    }

}