<template>
  <div class="home">
    111
    {{num}}
    <HelloWorld name="lwj" msg="Welcome to Your Vue.js + TypeScript App">
      asdasd
    </HelloWorld>
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
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import AsyncComponent from '@/components/AsyncComponent.vue'; // @ is an alias to /src
const num = ref(2);
const str = ref('');
watch(num, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
</script>
