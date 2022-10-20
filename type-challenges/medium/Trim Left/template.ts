type TrimLeft<T extends string> = T extends `${' ' | '\t' | '\n'}${infer Rest}`
    ? TrimLeft<Rest>
    : T
