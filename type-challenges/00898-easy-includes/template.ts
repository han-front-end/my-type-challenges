import {Equal} from "@type-challenges/utils";

type Includes<T extends readonly any[], U> = T extends [infer F,...infer R]
                                                ? Equal<F, U> extends true
                                                    ? true
                                                    : Includes<R, U>
                                                : false
export default Includes


// * 实现Array.includes方法
// - 接收两个参数T[]，U 查找U是否在T[]中
// - 通过模式匹配将T[]拆开 用infer站位取出数组第一位
// - 通过Equal对F和U进行全等比对
// - 如果通过了就返回true false就递归将每一个T[]中每一个的参数与U比对 没找到返回false
// - extends 只能判断是否在XXX范围 在这里判断不够  需要使用Equal判断


// - extends 是一个自带范围判断的判断符，只要在另外一个类型范围内，那就判定为 true
// - true extends boolean => true   Equal<true,boolean> => false
// - extends => ==   Equal<T,U> => ===
