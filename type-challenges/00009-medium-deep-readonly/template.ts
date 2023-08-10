type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

// # 对T循环 设为Readonly 如果T[P]的值没有Key => 返回T[P]的查询值 有Key则回调继续为内部设为Readonly
