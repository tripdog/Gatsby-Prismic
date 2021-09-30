import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Returns a value from the environment's `cache` with the given key.
 *
 * @param key Key used to get data from the cache.
 *
 * @return Data from the cache with the given key, if available.
 */
export declare const getFromCache: <T>(key: string) => RTE.ReaderTaskEither<Dependencies, Error, T>;
