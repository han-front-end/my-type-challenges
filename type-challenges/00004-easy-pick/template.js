"use strict";
// K extends keyof T
// extends 判断/类型约束 if 在XXX范围内 在这里泛型内的意思是指K受限于 keyof T的类型
// keyof T 是查询索引类型中所有的索引，叫做索引查询
// [P in K]: T[P]
// in关键字 对所有的索引类型进行循环遍历  相当于for [P in K]
// T[key] =>  T[P]索引访问 访问索引类型中的某个值
// 所以在Todo中 K extends keyof T;
// "title" 限制 todo;
// [P in K]遍历 => {title: string}
