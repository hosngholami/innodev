export default class baseState {

   constructor() {
      this.List = ref({})
      this.CurrentPage = ref(1)
      this.NextPageState = ref(null)
      this.PreviousPageState = ref(null)
      this.Count = ref(0)
      this.CurrentPageCount = ref(0)
   }

   setListData(response) {
      this.List.value = response.data.results;
      this.NextPageState.value = response.data.next;
      this.PreviousPageState.value = response.data.previous;
      this.Count.value = response.data.count;
      this.CurrentPageCount.value = response.data.current_page_count;
   }

}