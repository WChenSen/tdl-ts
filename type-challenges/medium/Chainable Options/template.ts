type Chainable<T = {}> = {
    option<K extends string, U>(
        key: K,
        value: U
    ): Chainable<
        K extends keyof T ? Omit<T, K> & { [P in K]: U } : T & { [P in K]: U }
    >
    get(): T
}
