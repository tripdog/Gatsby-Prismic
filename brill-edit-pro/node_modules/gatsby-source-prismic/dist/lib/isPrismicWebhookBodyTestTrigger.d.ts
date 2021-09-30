import { PrismicWebhookBodyTestTrigger } from '../types';
/**
 * Determines if some piece of data is a Prismic `api-update` webhook body.
 *
 * @param webhookBody Piece of data to test.
 */
export declare const isPrismicWebhookBodyTestTrigger: (webhookBody: any) => webhookBody is PrismicWebhookBodyTestTrigger;
