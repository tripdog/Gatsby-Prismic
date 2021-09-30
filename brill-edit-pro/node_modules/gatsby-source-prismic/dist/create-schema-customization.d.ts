import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from './types';
/**
 * Create general types used by other types. Some types are global (i.e. not
 * repository-specific), while others are repository-specific, depending on
 * the type's use of custom plugin options.
 */
export declare const createBaseTypes: RTE.ReaderTaskEither<Dependencies, never, void>;
/**
 * Create all GraphQL types for the plugin's configured Prismic repository.
 *
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createSchemaCustomization
 */
export declare const createSchemaCustomization: NonNullable<gatsby.GatsbyNode['createSchemaCustomization']>;
