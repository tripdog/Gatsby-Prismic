import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a GraphQL type used by a Link field's `type` field. The resulting type
 * can be created using Gatsby's `createTypes` action.
 */
export declare const buildLinkTypeEnumType: RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLType>;
