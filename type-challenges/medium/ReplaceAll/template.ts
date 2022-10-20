type ReplaceAll<
    S extends string,
    From extends string,
    To extends string
> = S extends `${infer B}${From}${infer A}`
    ? From extends ''
        ? S
        : `${B}${To}${ReplaceAll<A, From, To>}`
    : S
