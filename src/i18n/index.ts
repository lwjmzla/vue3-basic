// src/i18n/index.ts
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'zh', // set locale
  messages: {
    zh: {
      message: {
        你好世界: '你好世界',
      },
    },
    en: {
      message: {
        你好世界: 'hello world',
      },
    },
  },
});

export default i18n;