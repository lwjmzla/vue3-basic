type Beautify<T> = {
  [P in keyof T]: T[P]
}

type FunctionKeys<T extends object> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K]
}

type AType = {
  key1: string,
  key2: () => void,
  key3: Function,
};
type Eg = FunctionKeys<AType>;