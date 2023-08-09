type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>

// # MyReadonly2 实现K指定T中的属性为Readonly 如果没有传入K 全设为Readonly
// # 因为指定没传入K时使全部属性为Readonly => K的默认属性为T的联合类型
// # 对T中的K 循环添加Readonly后与Omit剔除后的对象合并
