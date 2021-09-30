/**
 * Maps indices of a record with a given function.
 *
 * @param f Function mapping an index to a new index.
 *
 * @returns A function that accepts a record to be updated.
 */
export declare const mapRecordIndices: <K extends string, A>(f: (k: K) => string) => (r: Record<K, A>) => Record<string, A>;
