/**
 * Converts a given GraphQL type name to a required type.
 *
 * @example
 * ```ts
 * requiredTypeName('MyType') // => "MyType!"
 * ```
 *
 * @param typeName Type name to convert.
 *
 * @returns Type name as a required type.
 */
export declare const requiredTypeName: (typeName: string) => string;
