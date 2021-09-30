import * as prismicT from '@prismicio/types';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Normalizes values of a Prismic document where necessary.
 *
 * @see gatsby-source-prismic/lib/normalizeDocumentSubtree.ts
 *
 * @param doc Prismic document to normalize.
 *
 * @returns Normalized Prismic document.
 */
export declare const normalizeDocument: (doc: prismicT.PrismicDocument) => RTE.ReaderTaskEither<Dependencies, Error, prismicT.PrismicDocument>;
