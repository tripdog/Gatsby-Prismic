import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a GraphQL type used to map a Custom Type's fields to an Prismic field
 * type enum value. The resulting type can be created using Gatsby's
 * `createTypes` action.
 */
export declare const buildTypePathType: RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLType>;
