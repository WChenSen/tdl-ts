type Replace<
    S extends string,
    From extends string,
    To extends string
> = S extends `${infer B}${From}${infer A}`
    ? From extends ''
        ? S
        : `${B}${To}${A}`
    : S
