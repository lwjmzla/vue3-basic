// !递归可选
type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends Record<string, any> ? DeepPartial<T[Key]> : T[Key]
}

interface A{
  code: string;
  data: {
    list: string;
    page: number;
    total: number;
  };
  message: string;
  successful: boolean;
}

// !移除readonly
type RemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P]
}
// !递归移除readonly
type DeepRemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P] extends Record<string, any> ? DeepRemoveReadonly<T[P]> : T[P]
}
interface B{
  readonly name: string;
  data: {
    readonly list: string;
  };
}
type BB = DeepRemoveReadonly<B>
const b:BB = {
  name: 'lwj',
  data: {
    list: 'a'
  }
};
console.log(b);
b.data.list = 'b';

type TA = Pick<A, 'code' | 'data'>
type TB = Omit<A, 'message' | 'successful'>

type Include<T extends Record<string, any>, U extends keyof any> = {
  [Key in keyof T as Key extends U ? Key : never]: T[Key]
}
type TC = Include<A, 'code' | 'data'>
type Pick1<T extends Record<string, any>, K extends keyof T> = {
  [P in K]: T[P]
}
type T10 = ReturnType<() => string>;  // string
type T17 = ReturnType<string>;  // Error

type Func<T> = T extends (...args: any[]) => infer R ? R : any;

let func1: Func<number>; // => boolean
let func2: Func<''>; // => boolean
let func3: Func<() => Promise<number>>; // => Promise<number>

type w = 'name' | 'age'
interface IPerson2{
  name: string;
  sex: string;
}
type q = w extends keyof IPerson2 ? w : keyof IPerson2 // !三元表达式，w是(keyof IPerson2)的子类型么，是就返回w，否则返回keyof IPerson2

type TD = Record<'name' | 'age', any>

function f(a:string, b:string): string;
function f(a:number, b:number): number;
function f(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

f(2, 3); // Ok
// f(1, 'a'); // Error
// f('a', 2); // Error
f('a', 'b'); // Ok

interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: Record<string, any>;
}

type ConditionalPick<V, T> = {
  [K in keyof V as V[K] extends T ? K : never]: V[K]
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string | (string | number)>;


type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type AppendArgument<F extends (...args: any) => any, A extends any[]>  = (...args: [...A, ...Parameters<F>]) => ReturnType<F> 

type Fn = (a: number, b: string) => number
type FinalF = AppendArgument<Fn, [boolean, number]> 
// !(x: boolean, a: number, b: string) => number  
// ? 得到结果的特征，新增x参数boolean类型，还需要原来的参数，所以用Parameters<F>,还需要原来的结果ReturnType<F> 
const Fn1:FinalF = function (x: boolean, c: number, a: number, b: string):number {
  console.log(x, a, b);
  return a;
};
Fn1(true, 13, 12, 'a');


type Exclusive<T, U> = Exclude<T | U, T & U>


type QW = Exclusive<1 | 2 | 3, 2 | 3 | 4> // 1 | 4
type QE = Exclusive<1 | 2, 2 | 4> //1 | 4

type QA = 1 | 2 | 3
type QS = 2 | 3 | 4
type QD = QA | QS // !真得很像数学，并集
type QF = QA & QS // !真得很像数学，交集

type Extract<T, U> = T extends U ? T : never;
type QG = Extract<QA, QS>


type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
type T101 = Foo<{ a: string}>;  // string
type T111 = Foo<{ a: string, b: number }>;  // string | number