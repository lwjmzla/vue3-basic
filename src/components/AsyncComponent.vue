<template>
  <div class="home">
    {{asyncData.name}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'AsyncComponent',
  props: {
    flag: Boolean,
    msg: String
  },
  emits: {
  },
  async setup(props, context) {
    let asyncData = ref({});
    asyncData.value = await new Promise<{name: string}>((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'lwj' });
      }, 1000);
    });
    return {
      asyncData
    };
  }
});
</script>
