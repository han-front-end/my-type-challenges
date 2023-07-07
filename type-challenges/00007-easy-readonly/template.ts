type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// 遍历keyof T的所有索引类型  加上readonly关键字