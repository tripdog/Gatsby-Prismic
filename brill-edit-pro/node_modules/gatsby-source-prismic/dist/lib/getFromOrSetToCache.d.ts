import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Get value from the cache using a given key. If a value for the given key does
 * not exist, set it with a given value.
 *
 * @param key Key used to get data from the cache.
 * @param f Function to compute the cached value if a value does not already exist.
 *
 * @return Data from the cache with the given key.
 */
export declare const getFromOrSetToCache: <T>(key: string, f: RTE.ReaderTaskEither<Dependencies, Error, T>) => RTE.ReaderTaskEither<Dependencies, Error, T>;
