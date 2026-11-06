import { ref, type Ref } from 'vue'
import { useNuxtApp } from '#app'
import type { ICrudManager } from '~/types/IEntityListManager'

export class CategoryManager implements ICrudManager {
    loading = ref(false)
    errors = ref<Record<string, any>>({})
    // sortedState = ref('')
    list = ref<Record<string, any>>({})
    form = ref({
        id: -1,
        title: '',
        priority: 0,
        status: -1
    })



    private get $axios() {
        return useNuxtApp().$axios
    }

    async getList(): Promise<void> {
        // this.loading.value = true
        // this.errors.value = {}
        const params: any = {
            page: 1
        }

        try {
            const response = await this.$axios.get('/setting/api/v1/category', { params })
            this.list.value = response.data.results
        } catch (error) {
            this.errors.value = error as any
        } finally {
            this.loading.value = false
        }
    }

}