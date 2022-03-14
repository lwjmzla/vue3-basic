<template>
  <div class="home">
    111
    {{num}}
    <HelloWorld name="lwj" msg="Welcome to Your Vue.js + TypeScript App">
      asdasd
    </HelloWorld>
    <ValidateInput v-model="inputVal" :rules="emailRules" placeholder="请输入"></ValidateInput>
    <Suspense>
      <template #default>
        <AsyncComponent v-model="num" v-model:str="str"></AsyncComponent>
      </template>
      <template #fallback>
        <div>
          Loading...
        </div>
      </template>
    </Suspense>
    <TodoList></TodoList>
    <ImportExcel></ImportExcel>
    <ExportExcel></ExportExcel>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import AsyncComponent from '@/components/AsyncComponent.vue'; 
import ValidateInput, { RuleProp } from '@/components/ValidateInput.vue';
import TodoList from '@/components/TodoList.vue';
import ImportExcel from '@/components/excel/ImportExcel.vue';
import ExportExcel from '@/components/excel/ExportExcel.vue';
export default defineComponent({
  components: {
    HelloWorld,
    AsyncComponent,
    ValidateInput,
    TodoList,
    ImportExcel,
    ExportExcel
  },
  setup() {
    const num = ref(2);
    const str = ref('');
    const inputVal = ref('');
    watch(num, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });
    watch(inputVal, (newVal) => {
      console.log(newVal);
    });
    const emailRules:RuleProp[] = [
      { type: 'required', message: '不能为空' },
      { type: 'email', message: 'email格式不对' },
    ];
    return {
      inputVal,
      num,
      str,
      emailRules
    };
  }
});
</script>