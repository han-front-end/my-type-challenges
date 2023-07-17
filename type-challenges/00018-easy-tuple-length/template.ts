type Length<T extends readonly unknown[]> = T['length']

// - extends readonly unknown[]限制接受的是一个只读的数组
// - 取出元祖的length属性