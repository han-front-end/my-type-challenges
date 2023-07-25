type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T,K>]: T[P] }


type MyOmit1<T, K extends keyof T> =  Pick<T,Exclude<keyof T,K>>


// * Omit 实现省略K中字段的T对象

// - 1# 通过Exclude剔除T对象中的K字段 Exclude<keyof T, K> => 新的联合类型 in 循环组成一个新的对象

// - 2# Exclude剔除T对象中的K字段 => R Pick用于抽取出T对象中的R字段 组成一个新的对象


