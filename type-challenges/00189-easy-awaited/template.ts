type MyAwaited< T extends Promise<any> | PromiseLike<any> > =
  T extends Promise<infer Type>
    ? Type extends Promise<any>
      ? MyAwaited<Type>
      : Type
    : T extends PromiseLike<infer P>
      ? P
      : never


// * Promise PromiseLike 是内置类型
// * { then: (onfulfilled: (arg: number) => any) => any } 就是一个PromiseLike
// * 本题目根据类型匹配 进行递归 获取这个类型



// - 与参数里的类型约束重复 没有上方写法好
type MyAwaited1< T extends Promise<any> | PromiseLike<any> > =
  T extends Promise<infer Type> | PromiseLike<infer Type>
  ? Type extends Promise<any>
    ? MyAwaited1<Type> : Type
  : never