import * as gatsby from 'gatsby';
import * as prismicT from '@prismicio/types';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a GraphQL type from a record mapping a Prismic field API ID to its
 * schema definition.
 *
 * @param path Path to the schema record.
 * @param record Record mapping a Prismic field API ID to its schema definition.
 * @param typeName Type name of the resulting GraphQL type.
 *
 * @returns GraphQL type containing fields for each record property.
 */
export declare const buildSchemaRecordType: (path: string[], record: Record<string, prismicT.CustomTypeModelField>, typeName?: string | string[]) => RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLObjectType>;
