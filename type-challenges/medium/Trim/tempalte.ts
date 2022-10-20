type SpaceChars = ' ' | '\t' | '\n'
type TrimL<T> = T extends `${SpaceChars}${infer R}` ? TrimL<R> : T
type TrimR<T> = T extends `${infer R}${SpaceChars}` ? TrimR<R> : T
type Trim<T extends string> = TrimL<TrimR<T>>
