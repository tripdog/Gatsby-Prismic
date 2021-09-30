import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Deletes nodes for a given set of Prismic document IDs. Note that these are
 * Prismic document IDs, not Gatsby Node IDs.
 *
 * @param documentIds List of Prismic document IDs used to find nodes to delete.
 */
export declare const deleteNodesForDocumentIds: (documentIds: string[]) => RTE.ReaderTaskEither<Dependencies, never, void>;
