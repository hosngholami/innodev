export interface IEntityListManager {
  loading: Ref<boolean>
  // errors: Ref<Record<string, any>>
  sortedState: Ref<Number>
  list: Ref<Record<string, any>>
  currentPage: Ref<Number>
  params:  Ref<String, any>


  form: Ref<any>
  // selectedId: Ref<number | null>

  getList(): Promise<void>
  nextPage(): Promise<void>
  previousPage(): Promise<void>
  // search(): Promise<void>
  sorted(): Promise<void>

  clearForm(): Promise<void> | void
  // updateForm(id: number): Promise<void>
  add(): Promise<boolean | void>
  // update(): Promise<void>
  // delete(): Promise<void>
}