type MyParameters<T extends Function> = T extends (...args: infer Args) => any ? Args : never



// * Parameters根据函数类型的参数中使用的类型构造元组类型Type。
// - 函数类型可以通过模式匹配来提取参数的类型
// - 类型参数是Function 这里通过extends来限制入参是一个函数
// - Func和模式类型做匹配 参数类型放到infer声明的局部变量Args中
