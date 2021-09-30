import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Reports a piece of text at the "warning" importance level using the
 * environment's `reportWarning` function.
 *
 * @param text Text to report.
 */
export declare const reportWarning: (text: string) => RTE.ReaderTaskEither<Dependencies, never, void>;
