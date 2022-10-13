type First<T extends any[]> = T extends [infer first, ...infer Rest]
    ? first
    : never
