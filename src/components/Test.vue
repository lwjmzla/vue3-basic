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
    <Modal class="test" style="background:red;" v-model:flag="flag" :msg="msg" @modifyMsg="msg = $event">modal</Modal>

    <el-button @click="handleOpenModal">openModal</el-button>
  </div>
</template>

<script lang="ts">
import Modal from './Modal.vue';
import { defineComponent, toRefs, ref } from "vue";
import usePage from "@/hooks/usePage";
import useArticleList from "@/hooks/useArticleList";
export default defineComponent({
  components: {
    Modal
  },
  setup() {
    const { articleList, getList } = useArticleList();
    const { page } = usePage('');
    getList(page); // !其实我不喜欢传闭包进去，我喜欢获取值后，在这里给page.total赋值
    let flag = ref(false);
    const handleOpenModal = () => {
      flag.value = true;
    };
    function handleSizeChange(val:number) {
      page.pageSize = val;
      getList(page);
    }
    function handleCurrentChange(val:number) {
      page.currentPage = val;
      getList(page);
    }
    return {
      ...toRefs(page), // !currentPage pageSizes等等就不明确了。
      articleList,
      //getList,
      handleSizeChange,
      handleCurrentChange,
      flag,
      handleOpenModal,
      msg: ref('my msg')
    };
  },
});
</script>
<style scoped lang="scss">
  
</style>
