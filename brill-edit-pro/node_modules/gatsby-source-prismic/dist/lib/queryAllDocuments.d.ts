import * as prismicT from '@prismicio/types';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Queries all documents from a Prismic repository using the environment's
 * configuration. The following fields from the environment's `pluginOptions`
 * are used:
 *
 * - `pluginOptions.releaseID`: Prismic Release ID from which to fetch
 *   documents. If not provided, the master ref is used.
 *
 * - `pluginOptions.graphQuery`: GraphQuery to fetch nested data.
 *
 * - `pluginOptions.fetchLinks`: List of document link fields to fetch.
 *
 * - `pluginOptions.lang`: Language of documents to fetch. If not provided, all
 *   languages are fetched.
 *
 * @returns List of Prismic documents.
 */
export declare const queryAllDocuments: RTE.ReaderTaskEither<Dependencies, Error, prismicT.PrismicDocument[]>;
