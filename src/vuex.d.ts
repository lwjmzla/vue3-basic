import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { RootStateTypes } from './store/interface/index';
declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<RootStateTypes>
  }
}