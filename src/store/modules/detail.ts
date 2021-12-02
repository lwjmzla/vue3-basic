
//import { Store } from 'vuex';
import { DetailState, Detail } from '../interface/index';
const account = {
  namespaced: true,
  state: {
    detail: {
      size: '',
      money: ''
    },
  },
  getters: {
  },
  actions: {
    setDetail({ commit }: any, detail: Detail) { // any 换成Store<AccountState> 也没啥意义，也没ts提示信息
      commit('setDetail', detail);
    }
  },
  mutations: {
    setDetail: (state: DetailState, detail: Detail) => {
      state.detail = detail;
    },
  },
};

export default account;
