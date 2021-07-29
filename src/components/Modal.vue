<template>
  <teleport to='#dialog'>
    <div class="dialog" v-if="flag">
      <slot></slot>
      <el-button @click="closeModal">关闭</el-button>
      <div>{{msg}}</div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
let component = defineComponent({
  name: 'HelloWorld',
  props: {
    flag: Boolean,
    msg: String
  },
  emits: { // !声明用而已。
    'update:flag': null,
    modifyMsg: null,
  },
  setup(props, context) {
    const closeModal = () => {
      context.emit('update:flag', false);
      context.emit('modifyMsg', props.msg + '1');
    };
    return {
      closeModal
    };
  }
});
export default component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .dialog{
    position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;
    width: 200px;height: 200px;border: 1px solid red;
    background: #fff;
  }
</style>
