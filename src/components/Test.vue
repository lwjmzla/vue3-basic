<template>
  <div>
    <ul class="article-list">
      <li v-for="item in articleList" :key="item.id">
        <div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </li>
    </ul>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import usePage from "@/hooks/usePage";
import useArticleList from "@/hooks/useArticleList";
export default defineComponent({
  setup() {
    const { articleList, getList } = useArticleList();
    const { page, handleSizeChange, handleCurrentChange } = usePage(getList);
    getList(page);
    return {
      ...toRefs(page), // !currentPage pageSizes等等就不明确了。
      articleList,
      //getList,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>