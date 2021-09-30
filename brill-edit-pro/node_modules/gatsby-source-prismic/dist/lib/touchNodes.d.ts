import * as RTE from 'fp-ts/ReaderTaskEither';
/**
 * Touches one or more nodes.
 *
 * @see gatsby-source-prismic/lib/touchNode.ts
 */
export declare const touchNodes: (fa: import("gatsby").Node[]) => RTE.ReaderTaskEither<import("..").Dependencies, never, readonly void[]>;
