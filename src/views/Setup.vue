<template>
  <div class="home">
    111
    {{num}}
    <HelloWorld name="lwj" msg="Welcome to Your Vue.js + TypeScript App">
      asdasd
    </HelloWorld>
    <Suspense>
      <template #default>
        <AsyncComponent></AsyncComponent>
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
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import AsyncComponent from '@/components/AsyncComponent.vue'; // @ is an alias to /src
const num = 2;
</script>
