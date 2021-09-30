import { PrismicWebhookBody } from '../types';
/**
 * Determines if some piece of data is a Prismic webhook body for a given repository.
 *
 * @param webhookBody Piece of data to test.
 * @param repositoryName Name of the repository to check the webhook body against.
 */
export declare const isPrismicWebhookBodyForRepository: (repositoryName: string) => (webhookBody: any) => webhookBody is PrismicWebhookBody;
