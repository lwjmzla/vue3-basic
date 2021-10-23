import { ref } from "vue";
import { getArticleList } from "@/api/index"; // mock ajax请求

interface IList{
  title: string;
  content: string;
}

function useArticleList() {
  const articleList = ref([] as IList[]);
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