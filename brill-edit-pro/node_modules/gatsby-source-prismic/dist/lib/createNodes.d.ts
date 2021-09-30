import * as RTE from 'fp-ts/ReaderTaskEither';
/**
 * Creates one or more nodes.
 *
 * @see gatsby-source-prismic/lib/createNode.ts
 */
export declare const createNodes: (fa: import("./createNode").IdentifiableRecordWithType[]) => RTE.ReaderTaskEither<import("..").Dependencies, never, readonly import("gatsby").NodeInput[]>;
