/**
 * Removes query parameters from a URL. If the URL is invalid, the input is returned as is.
 *
 * @param url URL from which to remove query parameters.
 *
 * @returns `url` without query parameters.
 */
export declare const stripURLQueryParameters: (url: string) => string;
