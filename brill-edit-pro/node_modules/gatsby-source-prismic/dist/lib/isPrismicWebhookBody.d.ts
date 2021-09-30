import { PrismicWebhookBody } from '../types';
/**
 * Determines if some piece of data is a Prismic webhook body.
 *
 * @param webhookBody Piece of data to test.
 */
export declare const isPrismicWebhookBody: (webhookBody: any) => webhookBody is PrismicWebhookBody;
