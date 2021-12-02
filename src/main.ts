import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store'; // !这个key重要
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App).use(store, key).use(router).use(ElementPlus);
app.config.globalProperties.$token = 'lwjtoken';
app.mount('#app');
