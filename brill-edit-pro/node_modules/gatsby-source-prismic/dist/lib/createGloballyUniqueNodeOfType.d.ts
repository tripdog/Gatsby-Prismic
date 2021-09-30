import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { IdentifiableRecord } from 'gatsby-node-helpers';
import { Dependencies } from '../types';
/**
 * Creates a node using the environment's `createNode` function.
 *
 * By using this function, the record's `id` field must be globally unique. If
 * the record's ID may conflict with another's within the application's scope,
 * even if it is of a different type, use the standard `createNodeOfType`
 * function instead.
 *
 * @param record Record with an `id` field with which to create a node.
 * @param type Type of the record.
 */
export declare const createGloballyUniqueNodeOfType: (record: IdentifiableRecord, type: string | string[]) => RTE.ReaderTaskEither<Dependencies, never, gatsby.NodeInput>;
