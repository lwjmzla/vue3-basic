
//import { Store } from 'vuex';
import { I18nState, Locale } from '../interface/index';
const account = {
  namespaced: true,
  state: {
    locale: 'zh'
  },
  getters: {
    locale: (state:I18nState) => state.locale
  },
  actions: {
  },
  mutations: {
    setLocale: (state: I18nState, locale: Locale) => {
      state.locale = locale;
    },
  },
};

export default account;
