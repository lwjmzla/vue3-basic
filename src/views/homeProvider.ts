import { InjectionKey, Ref, provide, inject } from 'vue';

export interface HomeProviderProps {
  greetings: Ref<string>;
  count: Ref<number>;
}

const key: InjectionKey<HomeProviderProps> = Symbol();

export function createHomeProvider(context: HomeProviderProps) {
  provide(key, context);
}

export function useHomeProvider() {
  return inject(key);
}