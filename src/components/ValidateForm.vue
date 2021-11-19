<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area">
      <slot name="submit"></slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import mitt from 'mitt';
type ValidateFunc = () => boolean
export const emitter = mitt();
export default defineComponent({
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];
    const validate = () => {
      const result = funcArr.map(func => func()).every(result => result);
      return result;
    };
    const callback = (func?: ValidateFunc) => {
      if (func) {
        funcArr.push(func);
      }
    };
    emitter.on('form-item-created', callback);
    onUnmounted(() => {
      emitter.off('form-item-created', callback);
      funcArr = [];
    });
    return {
      validate
    };
  }
});
</script>
