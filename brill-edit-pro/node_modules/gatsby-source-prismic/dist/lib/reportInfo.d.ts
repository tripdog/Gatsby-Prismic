import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Reports a piece of text at the "info" importance level using the
 * environment's `reportInfo` function.
 *
 * @param text Text to report.
 */
export declare const reportInfo: (text: string) => RTE.ReaderTaskEither<Dependencies, never, void>;
