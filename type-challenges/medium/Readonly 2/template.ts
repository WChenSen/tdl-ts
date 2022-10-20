type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in keyof T]: T[P]
} & Omit<T, K>
