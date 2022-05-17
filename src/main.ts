import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store'; // !这个key重要
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import i18n from './i18n/index';
import mitt from 'mitt';
import './test1';
const emitter = mitt();

const app = createApp(App).use(store, key).use(router).use(ElementPlus).use(i18n);
app.config.globalProperties.$token = 'lwjtoken';
app.config.globalProperties.$emitter = emitter;
app.mount('#app');
