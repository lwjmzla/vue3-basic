// type Parameters1<T extends (...args:any[]) => any> = T extends (...args: infer P) => any ? P : never
// type ReturnType1<T extends (...args:any[]) => any> = T extends (...args: any[]) => infer P ? P : never

// type Fn = (a: number, b: string) => number
// type AppendArgument<F extends (...args: any[]) => any, A extends any[]> = (...args:[...A, ...Parameters1<F>]) => ReturnType1<F>

// type FinalFn = AppendArgument<Fn, [boolean, number]> 
// // (x: boolean, a: number, b: string) => number
// const Fn1:FinalFn = function (x: boolean, c: number, a: number, b: string):number {
//   console.log(x, a, b);
//   return a;
// };
// Fn1(true, 13, 12, 'a');

const arr = [
  { name: 'lwj', age: 18 },
  { name: 'lwb', age: 18 },
  { name: 'lwz', age: 18 },
];
const arr1: any = [];
console.log(...arr);
console.log([...arr]);
// arr1.push(...arr); // push可以添加多个元素，才知道。。。后知后觉。

function push<T>(...items: T[]): number {
  return arr1.push(...items);
}
push(...arr);
console.log('arr1', arr1);