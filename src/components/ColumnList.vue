<template>
  <ul>
    <li v-for="item in list" :key="item.id"></li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
let component = defineComponent({
  name: 'HelloWorld',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      default: () => []
    }
  },
  setup(props, context) {
    console.log(props.list[0].title);
    return {
    };
  }
});
export default component;
</script>

<style scoped lang="scss">
</style>
