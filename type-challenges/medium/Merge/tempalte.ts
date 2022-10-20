type Merge<T, U> = {
    [P in keyof U | keyof T]: P extends keyof U
        ? U[P]
        : P extends keyof T
        ? T[P]
        : never
}
