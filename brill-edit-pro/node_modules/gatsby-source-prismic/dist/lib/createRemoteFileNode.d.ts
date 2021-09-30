import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Creates a File node with remote data using the environment's `createRemoteFileNode` function. The contents of the provided URL are attached to the node's data.
 *
 * @param url URL from which data is fetched.
 *
 * @returns The created File node.
 */
export declare const createRemoteFileNode: (url: string) => RTE.ReaderTaskEither<Dependencies, Error, gatsby.Node>;
