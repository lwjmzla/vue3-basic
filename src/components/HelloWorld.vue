<template>
  <div class="hello">
    <input v-model="keyword"/>
    {{keyword}}
    <h1>{{ msg }}</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, toRefs, customRef } from 'vue';
//!实现函数防抖的自定义ref
function useDebouncedRef<T>(value: T, delay = 200) {
  let timeout: number;
  return customRef((track, trigger) => {
    return {
      get() {
        // !告诉Vue追踪数据
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          // !告诉Vue去触发界面更新
          trigger();
        }, delay);
      }
    };
  });
}
let component = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  setup(props, context) {
    console.log(props); // !props是一个proxy（reactive）
    //const { msg } = toRefs(props);
    const msg = toRef(props, 'msg');
    console.log(msg);

    const keyword = useDebouncedRef('abc', 500);
    console.log(keyword);
    // console.log(props.msg);
    // console.log(context.attrs);
    // console.log(context.slots);
    // console.log(context.emit);
    // console.log(context.expose);
    return {
      keyword
    };
  },
  created() {
    // console.log(this.$props);
    // console.log(this.$attrs);
  }
});
export default component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
