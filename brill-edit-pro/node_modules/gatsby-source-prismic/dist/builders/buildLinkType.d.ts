import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a GraphQL Type used by Link fields. The resulting type can be created
 * using Gatsby's `createTypes` action.
 */
export declare const buildLinkType: RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLType>;
