import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { IdentifiableRecord } from 'gatsby-node-helpers';
import { Dependencies } from '../types';
/**
 * Creates a node using the environment's `createNode` function. The provided record is passed through a node helper factory based on the record's `type` field.
 *
 * @param record Record with an `id` field with which to create a node.
 * @param type Type of the record.
 */
export declare const createNodeOfType: (record: IdentifiableRecord, type: string | string[]) => RTE.ReaderTaskEither<Dependencies, never, gatsby.NodeInput>;
