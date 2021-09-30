import * as gqlc from 'graphql-compose';
import * as prismicT from '@prismicio/types';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a `graphql-compose`-compatible field config map by calling
 * `lib/toFieldConfig` for each field.
 *
 * Field names are transformed using the environment's plugin options's
 * `transformFieldName` function.
 *
 * @param path Field path leading to `fieldSchemas`'s location.
 * @param fieldSchemas Record of Prismic custom type schema fields.
 *
 * @returns Field config map including `fieldSchemas`'s fields.
 */
export declare const buildFieldConfigMap: (path: string[], fieldSchemas: Record<string, prismicT.CustomTypeModelField>) => RTE.ReaderTaskEither<Dependencies, never, gqlc.ObjectTypeComposerFieldConfigMapDefinition<unknown, unknown>>;
