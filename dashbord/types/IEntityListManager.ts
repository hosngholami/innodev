export interface IEntityListManager {
  // loading: Ref<boolean>
  // errors: Ref<Record<string, any>>
  sortedState: Ref<Number>
  list: Ref<Record<string, any>>
  currentPage: Ref<Number>
  currentPageCount: Ref<Number, any>


  form: Ref<any>

  getList(): Promise<void>
  getSingle(id: number): Promise<void>
  nextPage(): Promise<void>
  previousPage(): Promise<void>
  search(): Promise<void>
  sorted(): Promise<void>

  clearForm(): Promise<void> | void
  add(): Promise<boolean | void>
  update(): Promise<void>
  delete(): Promise<void>
}