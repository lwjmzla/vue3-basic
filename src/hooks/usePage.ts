import { reactive } from "vue";

function usePage(changeFn: any) {
  const page = reactive({
    currentPage: 1,
    pageSizes: [5, 10, 20],
    pageSize: 5,
    total: 0,
  });
  function handleSizeChange(val:number) {
    page.pageSize = val;
    changeFn(page);
  }
  function handleCurrentChange(val:number) {
    page.currentPage = val;
    changeFn(page);
  }
  return {
    page,
    handleSizeChange,
    handleCurrentChange,
  };
}
export default usePage;