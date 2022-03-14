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

interface TestProps {
  id: string;
  name: string;
}

const data:TestProps[] = [
  { id:'1', name: 'lwj' },
  { id:'2', name: 'lwb' }
];

export const arrToObj = <T extends TestProps>(arr: T[]) => {
  if (arr.length) {
    return arr.reduce((preVal, curVal) => {
      preVal[curVal.id] = curVal.name; // !这里的id和name其实已经耦合了业务，用泛型作用不大了
      return preVal;
    }, {} as { [prop: string]: string });
  } else {
    return {};
  }
};

const result = arrToObj(data);

const data2: {[key: string]: string} = {
  1: 'lwj',
  2: 'lwb'
};

export const objToArr = (obj: {[key: string]: string}) => {
  return Object.keys(obj).map((key) => ({ key, name: obj[key] }));
};

const result1 = objToArr(data2);