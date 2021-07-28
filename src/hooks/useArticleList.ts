import { ref } from "vue";
import { getArticleList } from "@/api/index"; // mock ajax请求

function useArticleList() {
  const articleList = ref([]);
  function getList(page:any) {
    getArticleList(page).then((res) => {
      const data = res.data.data;
      articleList.value = data.list;
      page.total = data.total;
    });
  }
  return {
    articleList,
    getList,
  };
}
export default useArticleList;