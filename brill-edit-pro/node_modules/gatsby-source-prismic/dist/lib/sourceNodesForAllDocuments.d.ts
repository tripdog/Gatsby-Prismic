import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Queries all documents from the environment's Prismic repository and creates
 * nodes for each document.
 */
export declare const sourceNodesForAllDocuments: RTE.ReaderTaskEither<Dependencies, Error, void>;
