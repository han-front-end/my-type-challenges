type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}

// * 元祖 => 一个带有数字索引的对象类型

const tuple = ['tesla', 'model 3', '', 'model Y'] as const

const _tuple = {
  0: 'tesla',
  1: 'model 3',
  2: 'model X',
  3: 'model Y',
  "length": 4,
}

// - T[K] 通过K在T上使用访问获得对应的类型 这里取出元祖对应索引上的类型