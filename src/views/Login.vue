<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center" @click="haha">登录到者也</h5>
    <validate-form ref="validateFormRef">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules" v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordVal"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="submit">登录</button>
      </template>
    </validate-form>
    <!-- <uploader
      action="/upload"
      :beforeUpload="uploadCheck"
      @file-uploaded="handleFileUploaded"
      :uploaded="uploadedData"
      class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
    >
      <h2>点击上传头图</h2>
      <template #loading>
        <div class="d-flex">
          <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h2>正在上传</h2>
        </div>
      </template>
      <template #uploaded="dataProps">
        <div class="uploaded-area">
          <img :src="dataProps.uploadedData.data.url">
          <h3>点击重新上传</h3>
        </div>
      </template>
    </uploader> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance  } from 'vue';
import ValidateInput, { RuleProp } from '../components/ValidateInput.vue';
import ValidateForm from '../components/ValidateForm.vue';

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  methods: {
    haha() {
      console.log(this);
    }
  },
  setup() {
    const internalInstance = getCurrentInstance();
    console.log(internalInstance);
    internalInstance?.appContext.config.globalProperties.$message.success('成功啦');
    const validateFormRef = ref(null);
    const emailVal = ref('');
    const emailRules: RuleProp[] = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ];
    const passwordVal = ref('');
    const passwordRules: RuleProp[] = [
      { type: 'required', message: '密码不能为空' }
    ];
    const submit = () => {
      const isPassValidate = (validateFormRef.value as any).validate();
      if (isPassValidate) {
        console.log(1);
      }
    };
    return {
      validateFormRef,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      submit
    };
  }
});
</script>
