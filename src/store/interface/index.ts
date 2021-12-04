export interface Account {
  // 用户 id
  userId: string;
  // 用户名称
  username: string;
  // 车队 id
  customerId: string;
  // 车队 名称
  customerName: string;
  // 手机号码
  mobilePhone: string;
  userLogo: string;
  //[key: string]: any;
}

export interface AccountState {
  account: Account;
  token: string;
}

export interface Detail {
  size: string;
  money: string;
}

export interface DetailState {
  detail: Detail;
}

export type Locale = 'zh' | 'en'

export interface I18nState {
  locale: Locale;
}

export interface RootStateTypes {
	account: AccountState;
	detail: DetailState;
  i18n: I18nState
}
