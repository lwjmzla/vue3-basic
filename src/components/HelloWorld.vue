<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot></slot>
    injectVal: {{injectVal}}
    <div>
      injectObj: {{injectObj}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { useHomeProvider } from '../views/homeProvider';
let component = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  setup(props, context) {
    // console.log(props.msg);
    // console.log(context.attrs);
    // console.log(context.slots);
    // console.log(context.emit);
    // console.log(context.expose);
    console.log('inject--------------------');
    const injectVal = inject('lwj', 'haha');
    console.log(injectVal);
    //const injectObj = inject('obj');
    const injectObj = useHomeProvider();
    console.log(injectObj);
    console.log(injectObj?.count.value);
    console.log(injectObj?.greetings);
    return {
      injectVal,
      injectObj
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
