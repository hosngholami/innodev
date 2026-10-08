// stores/menu.ts
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    items: [] as any[],
    activeId: null as number | null,
  }),
  
  actions: {
    toggle(id: number) {
      const findAndToggle = (items: any[]) => {
        for (const item of items) {
          if (item.id === id) {
            if (item.children?.length) {
              item.expanded = !item.expanded
            }
            return true
          }
          if (item.children && findAndToggle(item.children)) {
            return true
          }
        }
        return false
      }
      findAndToggle(this.items)
    },
    
    expandAll() {
      const setExpanded = (items: any[], value: boolean) => {
        items.forEach(item => {
          if (item.children?.length) {
            item.expanded = value
            setExpanded(item.children, value)
          }
        })
      }
      setExpanded(this.items, true)
    },
  },
})