export interface MenuItem {
  id: number
  label: string
  icon?: string
  to?: string
  children?: MenuItem[]
  expanded?: boolean
}