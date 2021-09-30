import * as RTE from 'fp-ts/ReaderTaskEither';
/**
 * Creates one or more globally unique nodes.
 *
 * By using this function, the records' `id` fields must be globally unique. If
 * a record's ID may conflict with another's within the application's scope,
 * even if it is of a different type, use the standard `createNodes` function
 * instead.
 *
 * @see lib/createGloballyUniqueNode.ts
 */
export declare const createGloballyUniqueNodes: (fa: import("./createGloballyUniqueNode").IdentifiableRecordWithType[]) => RTE.ReaderTaskEither<import("..").Dependencies, never, readonly import("gatsby").NodeInput[]>;
