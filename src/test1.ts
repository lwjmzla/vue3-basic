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