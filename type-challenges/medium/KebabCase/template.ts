type KebabCase<T extends string> = T extends `${infer F}${infer R}`
    ? R extends Uncapitalize<R>
        ? `${Lowercase<F>}${KebabCase<R>}`
        : `${Lowercase<F>}-${KebabCase<R>}`
    : T
