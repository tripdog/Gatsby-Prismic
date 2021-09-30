import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies, TypePathNode } from '../types';
/**
 * Returns a `TypePath` node for a given path using the environment's `getNode`
 * function.
 *
 * @param path Path used as a key to find a matching TypePath node.
 *
 * @returns The TypePath with the given key, if available.
 */
export declare const getTypePath: (path: string[]) => RTE.ReaderTaskEither<Dependencies, Error, TypePathNode>;
