import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a GraphQL type used by GeoPoint fields. The resulting type can be
 * created using Gatsby's `createTypes` action.
 */
export declare const buildGeoPointType: RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLType>;
