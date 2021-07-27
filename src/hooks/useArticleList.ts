import { ref } from "vue";
import { getArticleList } from "@/api/index"; // mock ajax请求

function useArticleList() {
  const articleList = ref([]);
  function getList(page) {
    getArticleList(page).then((res) => {
      res = res.data.data;
      articleList.value = res.list;
      page.total = res.total;
    });
  }
  return {
    articleList,
    getList,
  };
}
export default useArticleList;