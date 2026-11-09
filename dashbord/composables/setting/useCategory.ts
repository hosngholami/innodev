import { ref } from 'vue'
import type { IEntityListManager } from '~/types/IEntityListManager'



export class useCategory implements IEntityListManager {
    loading = ref(false)
    errors = ref<Record<string, any>>({})
    currentPage = ref(1)
    totalPageSize = ref(0)
    sortedState = ref(-1)
    currentPageCount = ref(0)
    list = ref<Record<string, any>>({})
    selectedItem = ref(-1)

    form = ref({
        id: -1,
        title: '',
        priority: 0,
        status: -1
    })

    clearForm(): void {
        this.form = {
            id: -1,
            title: '',
            priority: 0,
            status: -1
        }
    }
    private get $axios() {
        return useNuxtApp().$axios
    }

    async getList(): Promise<void> {
        // this.loading.value = true
        this.errors.value = {}


        const params: any = {
            page: this.currentPage
        }


        if (this.sortedState.value != -1) {
            params.ordering = '-' + this.sortedState
        }

        if (this.form.title?.trim()) {
            params.search = this.form.title
        }


        // if (this.form.status != -1) {
        //     params.status = this.form.status
        // }

        console.log(params)

        // if (this.form.priority != 0) {
        //     params.priority = this.form.priority
        // }

        try {
            const response = await this.$axios.get('/setting/api/v1/category', { params })
            this.list.value = response.data.results
            this.totalPageSize = response.data.totalPageSize
            this.currentPageCount = response.data.currentPageCount
        } catch (error) {
            this.errors.value = error as any
        } finally {
            this.loading.value = false
        }
    }

    async getSingle(id: number): Promise<void> {
        const response = (await this.$axios.get('/setting/api/v1/category', {
            params: {
                id: id
            }
        })).data



        this.form = {
            id: response.id,
            title: response.title,
            priority: response.priority,
            status: response.status
        }



    }


    async nextPage(): Promise<void> {
        if (this.currentPage < this.totalPageSize) {
            this.currentPage = this.currentPage + 1;
            this.getList()
        }
        else {
            return
        }
    }

    async previousPage(): Promise<void> {

        if (this.currentPage == 1) {
            this.currentPage = this.currentPage - 1
            this.getList()
        }
        else {
            return
        }
    }

    async add(): Promise<void> {

        const response = (await this.$axios.post('/setting/api/v1/category/', this.form))
        this.currentPage = this.totalPageSize
        this.clearForm()
        this.getList()

        if (import.meta.client) {
            const modalElement = document.getElementById('create-category-menu')

            if (modalElement) {
                const modal = bootstrap.Modal.getInstance(modalElement)
                modal?.hide()
            }
        }


    }

    async update(): Promise<void> {
        const response = (await this.$axios.put('/setting/api/v1/category/', this.form)).data

        this.getList()

        if (import.meta.client) {
            const modalElement = document.getElementById('update-category-menu')

            if (modalElement) {
                const modal = bootstrap.Modal.getInstance(modalElement)
                modal?.hide()
            }
        }


    }

    async delete(): Promise<void> {

        const response = (await this.$axios.delete('/setting/api/v1/category', {
            data: {
                id: this.form.id
            }
        })).data

        if (this.currentPageCount == 1) {
            this.currentPage = this.currentPage - 1
        }
        this.clearForm()
        this.getList()

        if (import.meta.client) {
            const modalElement = document.getElementById('delete-category-menu')

            if (modalElement) {
                const modal = bootstrap.Modal.getInstance(modalElement)
                modal?.hide()
            }
        }
    }

    async search(): Promise<void> {
        this.getList()
        if (import.meta.client) {
            const modalElement = document.getElementById('search-category-menu')

            if (modalElement) {
                const modal = bootstrap.Modal.getInstance(modalElement)
                modal?.hide()
            }
        }
    }

    async sorted(): Promise<void> {
        this.getList()
    }



}