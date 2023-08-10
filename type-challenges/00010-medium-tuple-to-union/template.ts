type TupleToUnion<T extends unknown[]> = T[number]

// #  T[number] 来将数组内的数据取出并转化为 union