export default function(){
    const { $axios } = useNuxtApp()


    const categoryMenuList = ref({})

    const getCategoryMenuList = async () => {
        const response = (await $axios.get('/setting/api/v1/category/')).data
        categoryMenuList.value = response
    }
    return {
        categoryMenuList,
        getCategoryMenuList
    }

}