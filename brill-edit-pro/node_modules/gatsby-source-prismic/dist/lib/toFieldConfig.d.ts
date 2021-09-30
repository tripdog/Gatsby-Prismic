import * as gqlc from 'graphql-compose';
import * as prismicT from '@prismicio/types';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Returns a GraphQL field configuration object for a Custom Type field. The
 * resulting configuration object can be used in a GraphQL type.
 *
 * @param path Path to the field.
 * @param schema Schema definition for the field.
 *
 * @returns GraphQL field configuration object.
 */
export declare const toFieldConfig: (path: string[], schema: prismicT.CustomTypeModelField) => RTE.ReaderTaskEither<Dependencies, never, gqlc.ObjectTypeComposerFieldConfigDefinition<unknown, unknown>>;
