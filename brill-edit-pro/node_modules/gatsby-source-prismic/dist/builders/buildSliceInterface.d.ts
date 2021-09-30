import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a GraphQL Interface type for Slice fields. It includes fields common
 * to all Slices. The resulting type can be created using Gatsby's `createTypes`
 * action.
 */
export declare const buildSliceInterface: RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLType>;
