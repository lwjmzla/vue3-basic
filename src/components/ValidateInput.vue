<template>
  <div class="validate-input">
    <el-input v-model="inputRef.val" @blur="validateInput" v-bind="$attrs"></el-input>
    <p v-show="inputRef.isError">{{inputRef.message}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, PropType, reactive, onMounted, computed } from 'vue';
import { emitter } from './ValidateForm.vue';
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
      //inputRef.val = props.modelValue;
      emitter.emit('form-item-created', validateInput);
    });
    
    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: val => {
          context.emit('update:modelValue', val);
        }
      }),
      isError: false,
      message: ''
    });
    // watch(inputRef, (newVal) => {
    //   context.emit('update:modelValue', newVal.val);
    // }, { deep: true });
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
        return isPassValidate;
      }
      return true;
    };
    return {
      inputRef,
      validateInput
    };
  }
});
</script>
