import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from './types';
/**
 * To be executed in the `sourceNodes` stage when a webhook is received.
 *
 * If the webhook is from Prismic, and the webhook's secret matches the secret
 * defined in the environment's plugin options, a handler appropriate to the
 * webhook's type is called.
 *
 * All nodes, regardless of the webhook' source or contents, are touched to
 * prevent garbage collection.
 */
export declare const onWebhook: RTE.ReaderTaskEither<Dependencies, Error, void>;
