export default function () {

    const { $axios } = useNuxtApp()


    const menuList = ref({})
    const partentList = ref({})



    const form = reactive({
        title :  "",
        icon : "",
        lable : "",
        priority : 0,
        status : true,
        parent: -1

    })

    const getMenuList = async () => {
            menuList.value = (await $axios.get('/setting/api/v1/menu/')).data
    }



    const getParentList = async() => {
         
          partentList.value = (await $axios.get('/setting/api/v1/mene/', {"parent" : true})).data

          console.log((await $axios.get('/setting/api/v1/mene/', {"parent" : true})).data)
    }


    const addMenu = async() => {

        console.log(form.parent)

    }

    



    return {
        menuList,
        getMenuList,
        partentList,
        getParentList,
        addMenu,
        form
    }

}