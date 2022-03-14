<template>
  <div class="home" @click="handleClick">
    {{asyncData.name}}
    {{modelValue}}
    {{str}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface IAsyncData{name: string}

export default defineComponent({
  name: 'AsyncComponent',
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    str: {
      type: String,
      default: ''
    },
  },
  emits: {
    'update:modelValue': null,
    'update:str': null,
  },
  async setup(props, context) {
    console.log(props);
    let asyncData = ref({} as IAsyncData);
    asyncData.value = await new Promise<IAsyncData>((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'lwj' });
      }, 1000);
    });
    const handleClick = () => {
      context.emit('update:modelValue', props.modelValue + 1);
      context.emit('update:str', props.str + 'a');
    };
    return {
      asyncData,
      handleClick
    };
  }
});
</script>
