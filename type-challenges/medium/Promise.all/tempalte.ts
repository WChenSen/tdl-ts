type AwaitedArray<T extends unknown[]> = { [K in keyof T]: Awaited<T[K]> }

declare function PromiseAll<T extends unknown[]>(
    values: readonly [...T]
): Promise<AwaitedArray<T>>
