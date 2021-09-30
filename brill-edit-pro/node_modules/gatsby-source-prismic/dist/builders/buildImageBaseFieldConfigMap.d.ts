import * as gqlc from 'graphql-compose';
import * as prismicT from '@prismicio/types';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a GraphQL field configuration object to be used as part of another
 * Image field GraphQL configuration object. For example, this base
 * configuration object could be added to a config for the thumbnails of an
 * Image field.
 */
export declare const buildImageBaseFieldConfigMap: RTE.ReaderTaskEither<Dependencies, never, gqlc.ObjectTypeComposerFieldConfigMapDefinition<prismicT.ImageField, unknown>>;
