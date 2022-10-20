type IsUnion<T, U = T> = [T] extends [never]
    ? false
    : T extends U
    ? [Exclude<U, T>] extends [never]
        ? false
        : true
    : false
