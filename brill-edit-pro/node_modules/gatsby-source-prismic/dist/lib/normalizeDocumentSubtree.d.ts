import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Traverses a subtree from a Prismic document and normalizes values as needed.
 * This function may process the subtree recursively.
 *
 * @param path Path to the subtree.
 * @param value The subtree to normalize.
 *
 * @returns A normalized version of `value`.
 */
export declare const normalizeDocumentSubtree: (path: string[], value: unknown) => RTE.ReaderTaskEither<Dependencies, never, unknown>;
