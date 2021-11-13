<template>
  <div class="validate-input">
    <el-input v-model="inputRef.val" @blur="validateInput"></el-input>
    <p v-show="inputRef.isError">{{inputRef.message}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, PropType, reactive, onMounted } from 'vue';
export interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
const emailReg = /^([a-zA-Z\d])(\w|-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    rules: {
      type: Array as PropType<RuleProp[]>
    }
  },
  emits: {
    'update:modelValue': null,
  },
  setup(props, context) {
    onMounted(() => {
      inputRef.val = props.modelValue;
    });
    
    const inputRef = reactive({
      val: '',
      isError: false,
      message: ''
    });
    watch(inputRef, (newVal) => {
      context.emit('update:modelValue', newVal.val);
    }, { deep: true });
    const validateInput = () => {
      if (props.rules) {
        const isPassValidate = props.rules.every(({ type, message }) => {
          let pass = true;
          inputRef.message = message;
          switch (type){
            case 'required':
              pass = inputRef.val !== '';
              break;
            case 'email':
              pass = emailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return pass;
        });
        inputRef.isError = !isPassValidate;
      }
    };
    return {
      inputRef,
      validateInput
    };
  }
});
</script>
