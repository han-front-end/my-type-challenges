type First<Tuple extends unknown[]> = Tuple extends [infer T,...infer R] ? T : never

// - 因为不知道接收的数组类型是什么类型，所以使用unknown类型
// - 通过infer占位,取出数组第一位元素