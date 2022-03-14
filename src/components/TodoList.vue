<template>
  <div class="todo-wrap">
    <div class="todo-input">
      <el-input v-model="keyVal" @keyup.enter="addItem" placeholder="输入todo的事项"/>
    </div>

    <div class="todo-list">
      <el-checkbox-group v-model="checkedList" @change="handleCheckedItemChange">
        <div v-for="(item,index) in allList" class="todo-list-item" :key="index">
          <el-checkbox :label="item"/>
          <el-button type="text" class="delete" @click="deleteItem(item)">删除</el-button>
        </div>
      </el-checkbox-group>
    </div>

    <div class="todo-bar">
      <el-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
      >
        已完成{{checkedList.length}} / 全部{{allList.length}}
      </el-checkbox>
      <el-button type="text" class="clear" @click="clearChecked">清除已完成任务</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      keyVal: '',
      checkedList: ['a'],
      allList: ['a', 'b', 'c'],
      isIndeterminate: false,
      checkAll: false
    });
    const handleCheckAllChange = (val: boolean) => {
      console.log(val);
      state.checkedList = val ? JSON.parse(JSON.stringify(state.allList)) : [];
    };
    const handleCheckedItemChange = (vals: string[]) => {
      console.log(vals);
    };
    const clearChecked = () => {
      state.allList = state.allList.filter((item) => !state.checkedList.includes(item));
      state.checkedList = [];
    };
    const deleteItem = (item: string) => {
      state.allList = state.allList.filter((i) => item !== i);
      state.checkedList = state.checkedList.filter((i) => item !== i);
    };
    const addItem = () => { 
      if (state.allList.includes(state.keyVal)) {
        state.keyVal = '';
        return;
      }
      state.allList.push(state.keyVal);
      state.keyVal = '';
    };

    watchEffect(() => {
      const checkedCount = state.checkedList.length;
      state.checkAll = checkedCount === state.allList.length;
      state.isIndeterminate = checkedCount > 0 && checkedCount < state.allList.length;
    });

    class Request {
      private name = 'lwj'

      public get systemDomainMap() {
        return this.name;
      }

      public set systemDomainMap(value) {
        this.name = value;
      }
    }
    const req = new Request();
    console.log(req.systemDomainMap);
    req.systemDomainMap = '123';
    console.log(req.systemDomainMap);

    return {
      ...toRefs(state),
      handleCheckAllChange,
      handleCheckedItemChange,
      clearChecked,
      deleteItem,
      addItem
    };
  }
});
</script>

<style scoped lang="scss">
  .todo-wrap{
    padding: 0 300px;
  }
  .todo-list-item{
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .delete{
      display: none;
    }
    &:hover{
      background: pink;
      .delete{
        display: block;
      }
    }
  }
  .todo-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
</style>
