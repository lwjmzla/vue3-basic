<template>
  <el-scrollbar ref="scrollbarRef" @wheel.native.prevent="onHandleScroll">
    <div class="container">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  </el-scrollbar>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center" @click="haha">{{$t('message.你好世界')}}登录到者也</h5>
    <el-button @click="changeLanguage">切换语言</el-button>
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
    <Uploader
      ref="uploaderRef"
      action="/upload"
      :beforeUpload="uploadCheck"
      @file-uploaded="handleFileUploaded"
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
    </Uploader>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance  } from 'vue';
import ValidateInput, { RuleProp } from '../components/ValidateInput.vue';
import ValidateForm from '../components/ValidateForm.vue';
import Uploader, { UploadStatus } from '../components/Uploader.vue';
import { useStore } from '@/store/index';

const uploadStatus: UploadStatus = 'success';
console.log(uploadStatus);

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm,
    Uploader
  },
  methods: {
    haha() {
      console.log(this);
    }
  },
  created() {
    console.log(this.$store.state.account.account); // 会有提示
  },
  setup() {
    const store = useStore();
    console.log(store.state.account);
    const account = {
      userId: '111',
      username: 'lwj',
    };
    setTimeout(() => {
      console.log(store);
      store.commit('account/setAccount', account);
      console.log(store.state.account);
    }, 1000);
    
    const { proxy } = getCurrentInstance() as any;
    proxy.$message.success(proxy.$token || '成功啦');
    const validateFormRef = ref(null);
    const uploaderRef = ref(null);
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
      console.log((uploaderRef.value as any).name);
      console.log(proxy.$refs.uploaderRef.name);
      const isPassValidate = (validateFormRef.value as any).validate();
      if (isPassValidate) {
        console.log(1);
      }
    };
    const uploadCheck = (file: File) => {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        proxy.$message.warning('图片大小不能大于2M');
      }
      return isLt2M;
    };
    const handleFileUploaded = (rawData: any) => {
      console.log(rawData);
    };
    const changeLanguage = () => {
      store.commit('i18n/setLocale', store.state.i18n.locale === 'zh' ? 'en' : 'zh');
      console.log(store.state.i18n.locale);
      console.log(store.getters['i18n/locale']);
      proxy.$i18n.locale = proxy.$i18n.locale === 'zh' ? 'en' : 'zh';
    };
    const onHandleScroll = (e: any) => {
      proxy.$refs.scrollbarRef.$refs.wrap.scrollLeft += e.wheelDelta / 4;
    };

    // const app = document.getElementById('app');
    // app!.style.color = 'red';
    
    return {
      uploaderRef,
      validateFormRef,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      submit,
      uploadCheck,
      handleFileUploaded,
      changeLanguage,
      onHandleScroll
    };
  }
});
</script>
<style lang="scss" scoped>
.container{
  ul{
    display: flex;white-space: nowrap;height: 50px;align-items: center;
  }
  li{
    height: 40px;width: 80px;margin-right: 5px;background: red;display: flex;flex-shrink: 0;
  }
}
</style>