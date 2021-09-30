import * as RTE from 'fp-ts/ReaderTaskEither';
/**
 * Deletes one or more nodes.
 *
 * @see gatsby-source-prismic/lib/deleteNode.ts
 */
export declare const deleteNodes: (fa: import("gatsby").Node[]) => RTE.ReaderTaskEither<import("..").Dependencies, never, readonly void[]>;
