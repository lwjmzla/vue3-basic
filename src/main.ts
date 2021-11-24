import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App).use(store).use(router).use(ElementPlus);
app.config.globalProperties.token = 'lwjtoken';
app.mount('#app');
