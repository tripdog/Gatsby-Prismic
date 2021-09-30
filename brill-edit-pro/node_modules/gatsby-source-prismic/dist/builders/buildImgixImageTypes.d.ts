import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a list of Imgix GraphQL types used by Image Custom Type fields. The
 * resulting types can be created using Gatsby's `createTypes` action.
 */
export declare const buildImgixImageTypes: RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLType[]>;
