import * as RTE from 'fp-ts/ReaderTaskEither';
/**
 * Registers one or more types.
 *
 * @see gatsby-source-prismic/lib/registerType.ts
 */
export declare const createTypes: <A extends import("gatsby").GatsbyGraphQLType>(fa: A[]) => RTE.ReaderTaskEither<import("..").Dependencies, never, readonly void[]>;
