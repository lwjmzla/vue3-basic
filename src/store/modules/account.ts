
//import { Store } from 'vuex';
import { AccountState, Account } from '../interface/index';
const account = {
  namespaced: true,
  state: {
    account: {
      // 用户 id
      userId: '',
      // 用户名称
      username: '',
      // 车队 id
      customerId: '',
      // 车队 名称
      customerName: '',
      // 手机号码
      mobilePhone: '',
      userLogo: '',
    //[key: string]: any;
    },
    token: ''
  },
  getters: {
  },
  actions: {
    setAccount({ commit }: any, account: Account) { // any 换成Store<AccountState> 也没啥意义，也没ts提示信息
      commit('setAccount', account);
    }
  },
  mutations: {
    setAccount: (state: AccountState, account: Account) => {
      state.account = account;
    },
    setToken: (state: AccountState, token: string) => {
      state.token = token;
    },
  },
};

export default account;
