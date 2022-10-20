type MyReturnType<T extends (...arg: any[]) => any> = T extends (
    ...args: any[]
) => infer P
    ? P
    : never
