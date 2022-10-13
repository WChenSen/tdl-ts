type MyParameters<T extends (...args: any[]) => any> = T extends (
    ...args: infer X
) => any
    ? [...X]
    : []

const foo = (arg1: string, arg2: number): void => {}

type aa = MyParameters<typeof foo>
