import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Sets a value to the environment's `cache` with the given key.
 *
 * @param key Key to identify a value in the cache.
 *
 * @returns A function that accepts a value to set to the environment's `cache` with the given key.
 */
export declare const setToCache: <T>(key: string) => (value: T) => RTE.ReaderTaskEither<Dependencies, never, T>;
