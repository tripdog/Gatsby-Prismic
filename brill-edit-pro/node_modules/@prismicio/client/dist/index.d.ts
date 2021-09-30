import * as prismicT from '@prismicio/types';
import * as prismicH from '@prismicio/helpers';

/**
 * Get a repository's Prismic REST API V2 endpoint.
 *
 * @typeParam RepositoryName Name of the Prismic repository.
 * @param repositoryName Name of the repository.
 *
 * @returns The repository's Prismic REST API V2 endpoint
 */
declare const getEndpoint: <RepositoryName extends string>(repositoryName: RepositoryName) => `https://${RepositoryName}.cdn.prismic.io/api/v2`;

interface Ref {
    ref: string;
    label: string;
    isMasterRef: boolean;
    scheduledAt?: string;
    id: string;
}
interface Language {
    id: string;
    name: string;
}
interface Repository {
    refs: Ref[];
    bookmarks: Record<string, string>;
    languages: Language[];
    types: Record<string, string>;
    tags: string[];
    forms: Record<string, Form>;
    /**
     * @deprecated
     */
    experiments: unknown;
    oauth_initiate: string;
    oauth_token: string;
    version: string;
    license: string;
}
interface Query<TDocument extends prismicT.PrismicDocument = prismicT.PrismicDocument> {
    page: number;
    results_per_page: number;
    results_size: number;
    total_results_size: number;
    total_pages: number;
    next_page: string | null;
    prev_page: string | null;
    results: TDocument[];
}
interface Form {
    method: "GET";
    enctype: string;
    action: string;
    name?: string;
    rel?: string;
    fields: Record<string, FormField>;
}
interface FormField {
    type: "String" | "Integer";
    multiple: boolean;
    default?: string;
}
/**
 * A universal API to make network requests. A subset of the `fetch()` API.
 */
declare type FetchLike = (input: string, init?: RequestInitLike) => Promise<ResponseLike>;
/**
 * The minimum required properties from RequestInit.
 */
interface RequestInitLike {
    headers?: Record<string, string>;
}
/**
 * The minimum required properties from Response.
 */
interface ResponseLike {
    status: number;
    json(): Promise<any>;
}
/**
 * The minimum required properties to treat as an HTTP Request for automatic Prismic preview support.
 */
interface HttpRequestLike {
    headers?: {
        cookie?: string;
    };
    query?: Record<string, unknown>;
}
/**
 * An `orderings` parameter that orders the results by the specified field.
 *
 * {@link https://prismic.io/docs/technologies/search-parameters-reference-rest-api#orderings}
 */
interface Ordering {
    field: string;
    direction?: "asc" | "desc";
}
/**
 * A `routes` parameter that determines how a document's URL field is resolved.
 *
 * {@link https://prismic.io/docs/core-concepts/link-resolver-route-resolver#route-resolver}
 */
interface Route {
    /** The Custom Type of the document. */
    type: string;
    /** The resolved path of the document with optional placeholders. */
    path: string;
    /** An object that lists the API IDs of the Content Relationships in the route. */
    resolvers: Record<string, string>;
}

/**
 * Parameters for the Prismic REST API V2.
 *
 * {@link https://prismic.io/docs/technologies/introduction-to-the-content-query-api}
 */
interface QueryParams {
    /**
     * The secure token for accessing the API (only needed if your repository is set to private).
     *
     * {@link https://user-guides.prismic.io/en/articles/1036153-generating-an-access-token}
     */
    accessToken?: string;
    /**
     * The `pageSize` parameter defines the maximum number of documents that the API will return for your query.
     *
     * {@link https://prismic.io/docs/technologies/search-parameters-reference-rest-api#pagesize}
     */
    pageSize?: number;
    /**
     * The `page` parameter defines the pagination for the result of your query.
     *
     * {@link https://prismic.io/docs/technologies/search-parameters-reference-rest-api#page}
     */
    page?: number;
    /**
     * The `after` parameter can be used along with the orderings option. It will remove all the documents except for those after the specified document in the list.
     *
     * {@link https://prismic.io/docs/technologies/search-parameters-reference-rest-api#after}
     */
    after?: string;
    /**
     * The `fetch` parameter is used to make queries faster by only retrieving the specified field(s).
     *
     * {@link https://prismic.io/docs/technologies/search-parameters-reference-rest-api#fetch}
     */
    fetch?: string | string[];
    /**
     * The `fetchLinks` parameter allows you to retrieve a specific content field from a linked document and add it to the document response object.
     *
     * {@link https://prismic.io/docs/technologies/search-parameters-reference-rest-api#fetchlinks}
     */
    fetchLinks?: string | string[];
    /**
     * The `graphQuery` parameter allows you to specify which fields to retrieve and what content to retrieve from Linked Documents / Content Relationships.
     *
     * {@link https://prismic.io/docs/technologies/graphquery-rest-api}
     */
    graphQuery?: string;
    /**
     * The `lang` option defines the language code for the results of your query.
     *
     * {@link https://prismic.io/docs/technologies/search-parameters-reference-rest-api#lang}
     */
    lang?: string;
    /**
     * The `orderings` parameter orders the results by the specified field(s). You can specify as many fields as you want.
     *
     * {@link https://prismic.io/docs/technologies/search-parameters-reference-rest-api#orderings}
     */
    orderings?: Ordering | string | (Ordering | string)[];
    /**
     * The `routes` option allows you to define how a document's `url` field is resolved.
     *
     * {@link https://prismic.io/docs/core-concepts/link-resolver-route-resolver#route-resolver}
     */
    routes?: Route | string | (Route | string)[];
}
/**
 * Arguments for `buildQueryURL` to construct a Query URL.
 */
declare type BuildQueryURLParams = {
    /**
     * Ref used to query documents.
     *
     * {@link https://prismic.io/docs/technologies/introduction-to-the-content-query-api#prismic-api-ref}
     */
    ref: string;
    /**
     * One or more predicates to filter documents for the query.
     *
     * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api}
     */
    predicates?: string | string[];
};
declare type BuildQueryURLArgs = QueryParams & BuildQueryURLParams;
/**
 * Build a Prismic REST API V2 URL to request documents from a repository. The
 * paginated response for this URL includes documents matching the parameters.
 *
 * A ref is required to make a request. Request the `endpoint` URL to retrieve a
 * list of available refs.
 *
 * Type the JSON response with `Query`.
 *
 * {@link https://prismic.io/docs/technologies/introduction-to-the-content-query-api#prismic-api-ref}
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api}
 *
 * @param endpoint URL to the repository's REST API V2.
 * @param args Arguments to filter and scope the query.
 *
 * @returns URL that can be used to request documents from the repository.
 */
declare const buildQueryURL: (endpoint: string, args: BuildQueryURLArgs) => string;

/**
 * A ref or a function that returns a ref. If a static ref is known, one can be given. If the ref must be fetched on-demand, a function can be provided. This function can optionally be asynchronous.
 */
declare type RefStringOrFn = string | (() => string | undefined | Promise<string | undefined>);
/**
 * Configuration for clients that determine how content is queried.
 */
declare type ClientConfig = {
    /**
     * The secure token for accessing the Prismic repository. This is only required if the repository is set to private.
     */
    accessToken?: string;
    /**
     * A string representing a version of the Prismic repository's content. This may point to the latest version (called the "master ref"), or a preview with draft content.
     */
    ref?: RefStringOrFn;
    /**
     * Default parameters that will be sent with each query. These parameters can be overridden on each query if needed.
     */
    defaultParams?: Omit<BuildQueryURLArgs, "ref" | "accessToken">;
    /**
     * The function used to make network requests to the Prismic REST API. In environments where a global `fetch` function does not exist, such as Node.js, this function must be provided.
     */
    fetch?: FetchLike;
};
/**
 * Parameters specific to client methods that fetch all documents. These methods start with `getAll` (for example, `getAllByType`).
 */
declare type GetAllParams = {
    /**
     * Limit the number of documents queried. If a number is not provided, there will be no limit and all matching documents will be returned.
     */
    limit?: number;
};
/**
 * Arguments to determine how the URL for a preview session is resolved.
 */
declare type ResolvePreviewArgs = {
    /**
     * A function that maps a Prismic document to a URL within your app.
     */
    linkResolver: prismicH.LinkResolverFunction;
    /**
     * A fallback URL if the Link Resolver does not return a value.
     */
    defaultURL: string;
    /**
     * The preview token (also known as a ref) that will be used to query preview content from the Prismic repository.
     */
    previewToken?: string;
    /**
     * The previewed document that will be used to determine the destination URL.
     */
    documentId?: string;
};
/**
 * Creates a Prismic client that can be used to query a repository.
 *
 * @param endpoint The Prismic REST API V2 endpoint for the repository (use `prismic.getEndpoint` for the default endpoint).
 * @param options Configuration that determines how content will be queried from the Prismic repository.
 *
 * @returns A client that can query content from the repository.
 */
declare const createClient: (endpoint: string, options?: ClientConfig | undefined) => Client;
/**
 * A client that allows querying content from a Prismic repository.
 *
 * If used in an environment where a global `fetch` function is unavailable, such as Node.js, the `fetch` option must be provided as part of the `options` parameter.
 */
declare class Client {
    /**
     * The Prismic REST API V2 endpoint for the repository (use `prismic.getEndpoint` for the default endpoint).
     */
    endpoint: string;
    /**
     * The secure token for accessing the API (only needed if your repository is set to private).
     *
     * {@link https://user-guides.prismic.io/en/articles/1036153-generating-an-access-token}
     */
    accessToken?: string;
    /**
     * The function used to make network requests to the Prismic REST API. In environments where a global `fetch` function does not exist, such as Node.js, this function must be provided.
     */
    fetchFn: FetchLike;
    /**
     * Default parameters that will be sent with each query. These parameters can be overridden on each query if needed.
     */
    defaultParams?: Omit<BuildQueryURLArgs, "ref">;
    /**
     * The client's ref mode state. This determines which ref is used during queries.
     */
    private refMode;
    /**
     * Internal cache for low-level caching.
     */
    private internalCache;
    /**
     * Creates a Prismic client that can be used to query a repository.
     *
     * If used in an environment where a global `fetch` function is unavailable, such as Node.js, the `fetch` option must be provided as part of the `options` parameter.
     *
     * @param endpoint The Prismic REST API V2 endpoint for the repository (use `prismic.getEndpoint` to get the default endpoint).
     * @param options Configuration that determines how content will be queried from the Prismic repository.
     *
     * @returns A client that can query content from the repository.
     */
    constructor(endpoint: string, options?: ClientConfig);
    /**
     * Enables the client to automatically query content from a preview session if one is active in browser environments. This is enabled by default in the browser.
     *
     * For server environments, use `enableAutoPreviewsFromReq`.
     *
     * @see enableAutoPreviewsFromReq
     *
     * @example
     * ```ts
     * client.enableAutoPreviews()
     * ```
     */
    enableAutoPreviews(): void;
    /**
     * Enables the client to automatically query content from a preview session if one is active in server environments. This is disabled by default on the server.
     *
     * For browser environments, use `enableAutoPreviews`.
     *
     * @param req An HTTP server request object containing the request's cookies.
     *
     * @example
     * ```ts
     * // In an express app
     * app.get('/', function (req, res) {
     *   client.enableAutoPreviewsFromReq(req)
     * })
     * ```
     */
    enableAutoPreviewsFromReq<R extends HttpRequestLike>(req: R): void;
    /**
     * Disables the client from automatically querying content from a preview session if one is active.
     *
     * Automatic preview content querying is enabled by default unless this method is called.
     *
     * @example
     * ```ts
     * client.disableAutoPreviews()
     * ```
     */
    disableAutoPreviews(): void;
    /**
     * Queries content from the Prismic repository.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param params Parameters to filter, sort, and paginate results.
     *
     * @returns A paginated response containing the result of the query.
     *
     * ```ts
     * const response = await client.get()
     * ```
     *
     * @deprecated Use `get` instead.
     */
    query: <TDocument extends prismicT.PrismicDocument<Record<string, prismicT.AnyRegularField | prismicT.GroupField<Record<string, prismicT.AnyRegularField>> | prismicT.SliceZone<prismicT.Slice<string, Record<string, prismicT.AnyRegularField>, Record<string, prismicT.AnyRegularField>>>>, string, string>>(params?: Partial<BuildQueryURLArgs> | undefined) => Promise<Query<TDocument>>;
    /**
     * Queries content from the Prismic repository.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param params Parameters to filter, sort, and paginate results.
     *
     * @returns A paginated response containing the result of the query.
     *
     * ```ts
     * const response = await client.get()
     * ```
     */
    get<TDocument extends prismicT.PrismicDocument>(params?: Partial<BuildQueryURLArgs>): Promise<Query<TDocument>>;
    /**
     * Queries content from the Prismic repository and returns only the first result, if any.
     *
     * @typeParam TDocument Type of the Prismic document returned.
     * @param params Parameters to filter, sort, and paginate results.
     *
     * @returns The first result of the query, if any.
     *
     * @example
     * ```ts
     * const document = await client.getFirst()
     * ```
     */
    getFirst<TDocument extends prismicT.PrismicDocument>(params?: Partial<BuildQueryURLArgs>): Promise<TDocument>;
    /**
     * Queries content from the Prismic repository and returns all matching content. If no predicates are provided, all documents will be fetched.
     *
     * This method may make multiple network requests to query all matching content.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param params Parameters to filter, sort, and paginate results.
     *
     * @returns A list of documents matching the query.
     *
     * @example
     * ```ts
     * const response = await client.getAll()
     * ```
     */
    getAll<TDocument extends prismicT.PrismicDocument>(params?: Partial<Omit<BuildQueryURLArgs, "page">> & GetAllParams): Promise<TDocument[]>;
    /**
     * Queries a document from the Prismic repository with a specific ID.
     *
     * @remarks
     *
     * A document's UID is different from its ID. An ID is automatically generated for all documents and is made available on its `id` property. A UID is provided in the Prismic editor and is unique among all documents of its Custom Type.
     *
     * @typeParam TDocument Type of the Prismic document returned.
     * @param id ID of the document.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns The document with an ID matching the `id` parameter, if a matching document exists.
     *
     * @example
     * ```ts
     * const document = await client.getByID('WW4bKScAAMAqmluX')
     * ```
     */
    getByID<TDocument extends prismicT.PrismicDocument>(id: string, params?: Partial<BuildQueryURLArgs>): Promise<TDocument>;
    /**
     * Queries documents from the Prismic repository with specific IDs.
     *
     * @remarks
     *
     * A document's UID is different from its ID. An ID is automatically generated for all documents and is made available on its `id` property. A UID is provided in the Prismic editor and is unique among all documents of its Custom Type.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param ids A list of document IDs.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A paginated response containing documents with IDs matching the `ids` parameter.
     *
     * @example
     * ```ts
     * const response = await client.getByIDs(['WW4bKScAAMAqmluX', 'U1kTRgEAAC8A5ldS'])
     * ```
     */
    getByIDs<TDocument extends prismicT.PrismicDocument>(ids: string[], params?: Partial<BuildQueryURLArgs>): Promise<Query<TDocument>>;
    /**
     * Queries all documents from the Prismic repository with specific IDs.
     *
     * This method may make multiple network requests to query all matching content.
     *
     * @remarks
     *
     * A document's UID is different from its ID. An ID is automatically generated for all documents and is made available on its `id` property. A UID is provided in the Prismic editor and is unique among all documents of its Custom Type.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param ids A list of document IDs.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A list of documents with IDs matching the `ids` parameter, if a matching document exists.
     *
     * @example
     * ```ts
     * const response = await client.getAllByIDs(['WW4bKScAAMAqmluX', 'U1kTRgEAAC8A5ldS'])
     * ```
     */
    getAllByIDs<TDocument extends prismicT.PrismicDocument>(ids: string[], params?: Partial<BuildQueryURLArgs>): Promise<TDocument[]>;
    /**
     * Queries a document from the Prismic repository with a specific UID and Custom Type.
     *
     * @remarks
     *
     * A document's UID is different from its ID. An ID is automatically generated for all documents and is made available on its `id` property. A UID is provided in the Prismic editor and is unique among all documents of its Custom Type.
     *
     * @typeParam TDocument Type of the Prismic document returned.
     * @param documentType The API ID of the document's Custom Type.
     * @param uid UID of the document.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns The document with a UID matching the `uid` parameter, if a matching document exists.
     *
     * @example
     * ```ts
     * const document = await client.getByUID('blog_post', 'my-first-post')
     * ```
     */
    getByUID<TDocument extends prismicT.PrismicDocument>(documentType: string, uid: string, params?: Partial<BuildQueryURLArgs>): Promise<TDocument>;
    /**
     * Queries a singleton document from the Prismic repository for a specific Custom Type.
     *
     * @remarks
     *
     * A singleton document is one that is configured in Prismic to only allow one instance. For example, a repository may be configured to contain just one Settings document. This is in contrast to a repeatable Custom Type which allows multiple instances of itself.
     *
     * @typeParam TDocument Type of the Prismic document returned.
     * @param documentType The API ID of the singleton Custom Type.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns The singleton document for the Custom Type, if a matching document exists.
     *
     * @example
     * ```ts
     * const document = await client.getSingle('settings')
     * ```
     */
    getSingle<TDocument extends prismicT.PrismicDocument>(documentType: string, params?: Partial<BuildQueryURLArgs>): Promise<TDocument>;
    /**
     * Queries documents from the Prismic repository for a specific Custom Type.
     *
     * Use `getAllByType` instead if you need to query all documents for a specific Custom Type.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param documentType The API ID of the Custom Type.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A paginated response containing documents of the Custom Type.
     *
     * @example
     * ```ts
     * const response = await client.getByType('blog_post')
     * ```
     */
    getByType<TDocument extends prismicT.PrismicDocument>(documentType: string, params?: Partial<BuildQueryURLArgs>): Promise<Query<TDocument>>;
    /**
     * Queries all documents from the Prismic repository for a specific Custom Type.
     *
     * This method may make multiple network requests to query all matching content.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param documentType The API ID of the Custom Type.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A list of all documents of the Custom Type.
     *
     * @example
     * ```ts
     * const response = await client.getByType('blog_post')
     * ```
     */
    getAllByType<TDocument extends prismicT.PrismicDocument>(documentType: string, params?: Partial<Omit<BuildQueryURLArgs, "page">>): Promise<TDocument[]>;
    /**
     * Queries documents from the Prismic repository with a specific tag.
     *
     * Use `getAllByTag` instead if you need to query all documents with a specific tag.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param tag The tag that must be included on a document.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A paginated response containing documents with the tag.
     *
     * @example
     * ```ts
     * const response = await client.getByTag('food')
     * ```
     */
    getByTag<TDocument extends prismicT.PrismicDocument>(tag: string, params?: Partial<BuildQueryURLArgs>): Promise<Query<TDocument>>;
    /**
     * Queries all documents from the Prismic repository with a specific tag.
     *
     * This method may make multiple network requests to query all matching content.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param tag The tag that must be included on a document.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A list of all documents with the tag.
     *
     * @example
     * ```ts
     * const response = await client.getAllByTag('food')
     * ```
     */
    getAllByTag<TDocument extends prismicT.PrismicDocument>(tag: string, params?: Partial<Omit<BuildQueryURLArgs, "page">>): Promise<TDocument[]>;
    /**
     * Queries documents from the Prismic repository with a specific tag.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param tags A list of tags that must be included on a document.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A paginated response containing documents with the tag.
     *
     * @example
     * ```ts
     * const response = await client.getAllByTag('food')
     * ```
     */
    getByTags<TDocument extends prismicT.PrismicDocument>(tags: string[], params?: Partial<BuildQueryURLArgs>): Promise<Query<TDocument>>;
    /**
     * Queries all documents from the Prismic repository with a specific tag.
     *
     * This method may make multiple network requests to query all matching content.
     *
     * @typeParam TDocument Type of Prismic documents returned.
     * @param tags A list of tags that must be included on a document.
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A list of all documents with the tag.
     *
     * @example
     * ```ts
     * const response = await client.getAllByTag('food')
     * ```
     */
    getAllByTags<TDocument extends prismicT.PrismicDocument>(tags: string[], params?: Partial<Omit<BuildQueryURLArgs, "page">>): Promise<TDocument[]>;
    /**
     * Returns metadata about the Prismic repository, such as its refs, releases, and custom types.
     *
     * @returns Repository metadata.
     */
    getRepository(): Promise<Repository>;
    /**
     * Returns a list of all refs for the Prismic repository.
     *
     * Refs are used to identify which version of the repository's content should be queried. All repositories will have at least one ref pointing to the latest published content called the "master ref".
     *
     * @returns A list of all refs for the Prismic repository.
     */
    getRefs(): Promise<Ref[]>;
    /**
     * Returns a ref for the Prismic repository with a matching ID.
     *
     * @param id ID of the ref.
     *
     * @returns The ref with a matching ID, if it exists.
     */
    getRefById(id: string): Promise<Ref>;
    /**
     * Returns a ref for the Prismic repository with a matching label.
     *
     * @param label Label of the ref.
     *
     * @returns The ref with a matching label, if it exists.
     */
    getRefByLabel(label: string): Promise<Ref>;
    /**
     * Returns the master ref for the Prismic repository. The master ref points to the repository's latest published content.
     *
     * @returns The repository's master ref.
     */
    getMasterRef(): Promise<Ref>;
    /**
     * Returns a list of all Releases for the Prismic repository. Releases are used to group content changes before publishing.
     *
     * @returns A list of all Releases for the Prismic repository.
     */
    getReleases(): Promise<Ref[]>;
    /**
     * Returns a Release for the Prismic repository with a matching ID.
     *
     * @param id ID of the Release.
     *
     * @returns The Release with a matching ID, if it exists.
     */
    getReleaseByID(id: string): Promise<Ref>;
    /**
     * Returns a Release for the Prismic repository with a matching label.
     *
     * @param label Label of the ref.
     *
     * @returns The ref with a matching label, if it exists.
     */
    getReleaseByLabel(label: string): Promise<Ref>;
    /**
     * Returns a list of all tags used in the Prismic repository.
     *
     * @returns A list of all tags used in the repository.
     */
    getTags(): Promise<string[]>;
    /**
     * Builds a URL used to query content from the Prismic repository.
     *
     * @param params Parameters to filter, sort, and paginate the results.
     *
     * @returns A URL string that can be requested to query content.
     */
    buildQueryURL(params?: Partial<BuildQueryURLArgs>): Promise<string>;
    /**
     * Determines the URL for a previewed document during an active preview session. The result of this method should be used to redirect the user to the document's URL.
     *
     * @param args Arguments to configure the URL resolving.
     *
     * @returns The URL for the previewed document during an active preview session. The user should be redirected to this URL.
     *
     * @example
     * ```ts
     * const url = client.resolvePreviewURL({
     *   linkResolver: (document) => `/${document.uid}`
     *   defaultURL: '/'
     * })
     * ```
     */
    resolvePreviewURL(args: ResolvePreviewArgs): Promise<string>;
    /**
     * Configures the client to query the latest published content for all future queries.
     *
     * If the `ref` parameter is provided during a query, it takes priority for that query.
     *
     * @example
     * ```ts
     * await client.queryLatestContent()
     * const document = await client.getByID('WW4bKScAAMAqmluX')
     * ```
     */
    queryLatestContent(): void;
    /**
     * Configures the client to query content from a specific Release identified by its ID for all future queries.
     *
     * If the `ref` parameter is provided during a query, it takes priority for that query.
     *
     * @param id The ID of the Release.
     *
     * @example
     * ```ts
     * await client.queryContentFromReleaseByID('YLB7OBAAACMA7Cpa')
     * const document = await client.getByID('WW4bKScAAMAqmluX')
     * ```
     */
    queryContentFromReleaseByID(releaseId: string): void;
    /**
     * Configures the client to query content from a specific Release identified by its label for all future queries.
     *
     * If the `ref` parameter is provided during a query, it takes priority for that query.
     *
     * @param label The label of the Release.
     *
     * @example
     * ```ts
     * await client.queryContentFromReleaseByLabel('My Release')
     * const document = await client.getByID('WW4bKScAAMAqmluX')
     * ```
     */
    queryContentFromReleaseByLabel(releaseLabel: string): void;
    /**
     * Configures the client to query content from a specific ref. The ref can be provided as a string or a function.
     *
     * If a function is provided, the ref is fetched lazily before each query. The function may also be asynchronous.
     *
     * @param ref The ref or a function that returns the ref from which to query content.
     *
     * @example
     * ```ts
     * await client.queryContentFromRef('my-ref')
     * const document = await client.getByID('WW4bKScAAMAqmluX')
     * ```
     */
    queryContentFromRef(ref: RefStringOrFn): void;
    /**
     * Returns a cached version of `getRepository` with a TTL.
     *
     * @returns Cached repository metadata.
     */
    private getCachedRepository;
    /**
     * Returns a cached Prismic repository form. Forms are used to determine API endpoints for types of repository data.
     *
     * @throws If a matching form cannot be found.
     *
     * @param name Name of the form.
     *
     * @returns The repository form.
     */
    private getCachedRepositoryForm;
    /**
     * Returns the preview ref for the client, if one exists.
     *
     * If this method is used in the browser, the browser's cookies will be read. If this method is used on the server, the cookies from the saved HTTP Request will be read, if an HTTP Request was given.
     *
     * @returns The preview ref as a string, if one exists.
     */
    private getPreviewRefString;
    /**
     * Returns the ref needed to query based on the client's current state. This method may make a network request to fetch a ref or resolve the users's ref thunk.
     *
     * If auto previews are enabled, the preview ref takes priority if available.
     *
     * The following strategies are used depending on the client's state:
     *
     * - If the user called `queryLatestContent`: Use the repository's master ref. The ref is cached for 5 seconds. After 5 seconds, a new master ref is fetched.
     *
     * - If the user called `queryContentFromReleaseByID`: Use the release's ref. The ref is cached for 5 seconds. After 5 seconds, a new ref for the release is fetched.
     *
     * - If the user called `queryContentFromReleaseByLabel`: Use the release's ref. The ref is cached for 5 seconds. After 5 seconds, a new ref for the release is fetched.
     *
     * - If the user called `queryContentFromRef`: Use the provided ref. Fall back to the master ref if the ref is not a string.
     *
     * @returns The ref to use during a query.
     */
    private getResolvedRefString;
    /**
     * Returns the network request options required by the Prismic repository.
     *
     * It currently only includes an Authorization header if an access token is provided.
     *
     * @param params Parameters for the query, including an access token.
     *
     * @returns Request options that can be used to make a network request to query the repository.
     */
    /**
     * Performs a network request using the configured `fetch` function. It assumes all successful responses will have a JSON content type. It also normalizes unsuccessful network requests.
     *
     * @typeParam T The JSON response.
     * @param url URL to the resource to fetch.
     * @param params Prismic REST API parameters for the network request.
     *
     * @returns The JSON response from the network request.
     */
    private fetch;
}

/**
 * The `at` predicate checks that the path matches the described value exactly. It takes a single value for a field or an array (only for tags).
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#at}
 */
declare const at: (path: string, value: string | number | (string | number)[]) => string;
/**
 * The `not` predicate checks that the path doesn't match the provided value exactly. It takes a single value as the argument.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#not}
 */
declare const not: (path: string, value: string | number | (string | number)[]) => string;
/**
 * The `any` predicate takes an array of values. It works exactly the same way as the `at` operator, but checks whether the fragment matches any of the values in the array.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#any}
 */
declare const any: (path: string, value: string | number | (string | number)[]) => string;
/**
 * The `in` predicate is used specifically to retrieve an array of documents by their IDs or UIDs. This predicate is much more efficient at this than the any predicate.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#in}
 */
declare const _in: (path: string, value: string | number | (string | number)[]) => string;

/**
 * The `fulltext` predicate provides two capabilities:
 *
 * 1. Checking if a certain string is anywhere inside a document (this is what you should use to make your project's search engine feature)
 * 2. Checking if the string is contained inside a specific custom type’s Rich Text or Key Text fragment.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#fulltext}
 */
declare const fulltext: (path: string, value: string | number | (string | number)[]) => string;
/**
 * The `has` predicate checks whether a fragment has a value. It will return all the documents of the specified type that contain a value for the specified field.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#has}
 */
declare const has: (path: string) => string;
/**
 * The `missing` predicate checks if a fragment doesn't have a value. It will return all the documents of the specified type that do not contain a value for the specified field.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#missing}
 */
declare const missing: (path: string) => string;
/**
 * The `similar` predicate takes the ID of a document, and returns a list of documents with similar content. This allows you to build an automated content discovery feature (for example, a "Related posts" section).
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#similar}
 */
declare const similar: (id: string, value: number) => string;
/**
 * The `geopoint.near` predicate checks that the value in the path is within the radius of the given coordinates.
 *
 * This predicate will only work for a GeoPoint field.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#near}
 */
declare const geopointNear: (path: string, latitude: number, longitude: number, radius: number) => string;
/**
 * The `number.lt` predicate checks that the value in the number field is less than the value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#lt-less-than}
 */
declare const numberLessThan: (path: string, value: number) => string;
/**
 * The `number.gt` predicate checks that the value in the number field is greater than the value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#gt-greater-than}
 */
declare const numberGreaterThan: (path: string, value: number) => string;
/**
 * The `number.inRange` predicate checks that the value in the path is within the two values passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/query-predicates-reference-rest-api#inrange}
 */
declare const numberInRange: (path: string, lowerLimit: number, upperLimit: number) => string;
/**
 * The `date.after` predicate checks that the value in the path is after the date value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#after}
 */
declare const dateAfter: (path: string, date: string | number | Date) => string;
/**
 * The `date.before` predicate checks that the value in the path is before the date value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#before}
 */
declare const dateBefore: (path: string, date: string | number | Date) => string;
/**
 * The `date.between` predicate checks that the value in the path is within the date values passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#between}
 */
declare const dateBetween: (path: string, startDate: string | number | Date, endDate: string | number | Date) => string;
/**
 * The `date.day-of-month` predicate checks that the value in the path is equal to the day of the month passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#dayofmonth}
 */
declare const dateDayOfMonth: (path: string, day: number) => string;
/**
 * The `date.day-of-month-after` predicate checks that the value in the path is after the day of the month passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#dayofmonthafter}
 */
declare const dateDayOfMonthAfter: (path: string, day: number) => string;
/**
 * The `date.day-of-month-before` predicate checks that the value in the path is before the day of the month passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#dayofmonthbefore}
 */
declare const dateDayOfMonthBefore: (path: string, day: number) => string;
/**
 * The `date.day-of-week` predicate checks that the value in the path is equal to the day of the week passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#dayofweek}
 */
declare const dateDayOfWeek: (path: string, day: string | number) => string;
/**
 * The `date.day-of-week-after` predicate checks that the value in the path is after the day of the week passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#dayofweekafter}
 */
declare const dateDayOfWeekAfter: (path: string, day: string | number) => string;
/**
 * The date.day-of-week-before predicate checks that the value in the path is before the day of the week passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#dayofweekbefore}
 */
declare const dateDayOfWeekBefore: (path: string, day: string | number) => string;
/**
 * The `date.month` predicate checks that the value in the path occurs in the month value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#month}
 */
declare const dateMonth: (path: string, month: string | number) => string;
/**
 * The `date.month-after` predicate checks that the value in the path occurs in any month after the value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#monthafter}
 */
declare const dateMonthAfter: (path: string, month: string | number) => string;
/**
 * The `date.month-before` predicate checks that the value in the path occurs in any month before the value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#monthbefore}
 */
declare const dateMonthBefore: (path: string, month: string | number) => string;
/**
 * The `date.year` predicate checks that the value in the path occurs in the year value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#year}
 */
declare const dateYear: (path: string, year: number) => string;
/**
 * The `date.hour` predicate checks that the value in the path occurs within the hour value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#hour}
 */
declare const dateHour: (path: string, hour: number) => string;
/**
 * The `date.hour-after` predicate checks that the value in the path occurs after the hour value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#hourafter}
 */
declare const dateHourAfter: (path: string, hour: number) => string;
/**
 * The `date.hour-before` predicate checks that the value in the path occurs before the hour value passed into the predicate.
 *
 * {@link https://prismic.io/docs/technologies/date-and-time-based-predicate-reference-rest-api#hourbefore}
 */
declare const dateHourBefore: (path: string, hour: number) => string;

declare const predicate_at: typeof at;
declare const predicate_not: typeof not;
declare const predicate_any: typeof any;
declare const predicate_fulltext: typeof fulltext;
declare const predicate_has: typeof has;
declare const predicate_missing: typeof missing;
declare const predicate_similar: typeof similar;
declare const predicate_geopointNear: typeof geopointNear;
declare const predicate_numberLessThan: typeof numberLessThan;
declare const predicate_numberGreaterThan: typeof numberGreaterThan;
declare const predicate_numberInRange: typeof numberInRange;
declare const predicate_dateAfter: typeof dateAfter;
declare const predicate_dateBefore: typeof dateBefore;
declare const predicate_dateBetween: typeof dateBetween;
declare const predicate_dateDayOfMonth: typeof dateDayOfMonth;
declare const predicate_dateDayOfMonthAfter: typeof dateDayOfMonthAfter;
declare const predicate_dateDayOfMonthBefore: typeof dateDayOfMonthBefore;
declare const predicate_dateDayOfWeek: typeof dateDayOfWeek;
declare const predicate_dateDayOfWeekAfter: typeof dateDayOfWeekAfter;
declare const predicate_dateDayOfWeekBefore: typeof dateDayOfWeekBefore;
declare const predicate_dateMonth: typeof dateMonth;
declare const predicate_dateMonthAfter: typeof dateMonthAfter;
declare const predicate_dateMonthBefore: typeof dateMonthBefore;
declare const predicate_dateYear: typeof dateYear;
declare const predicate_dateHour: typeof dateHour;
declare const predicate_dateHourAfter: typeof dateHourAfter;
declare const predicate_dateHourBefore: typeof dateHourBefore;
declare namespace predicate {
  export {
    _in as in,
    predicate_at as at,
    predicate_not as not,
    predicate_any as any,
    predicate_fulltext as fulltext,
    predicate_has as has,
    predicate_missing as missing,
    predicate_similar as similar,
    predicate_geopointNear as geopointNear,
    predicate_numberLessThan as numberLessThan,
    predicate_numberGreaterThan as numberGreaterThan,
    predicate_numberInRange as numberInRange,
    predicate_dateAfter as dateAfter,
    predicate_dateBefore as dateBefore,
    predicate_dateBetween as dateBetween,
    predicate_dateDayOfMonth as dateDayOfMonth,
    predicate_dateDayOfMonthAfter as dateDayOfMonthAfter,
    predicate_dateDayOfMonthBefore as dateDayOfMonthBefore,
    predicate_dateDayOfWeek as dateDayOfWeek,
    predicate_dateDayOfWeekAfter as dateDayOfWeekAfter,
    predicate_dateDayOfWeekBefore as dateDayOfWeekBefore,
    predicate_dateMonth as dateMonth,
    predicate_dateMonthAfter as dateMonthAfter,
    predicate_dateMonthBefore as dateMonthBefore,
    predicate_dateYear as dateYear,
    predicate_dateHour as dateHour,
    predicate_dateHourAfter as dateHourAfter,
    predicate_dateHourBefore as dateHourBefore,
  };
}

declare type PrismicErrorArgs = {
    url: string;
    response?: Record<string, unknown>;
};
declare class PrismicError extends Error {
    url: string;
    response?: Record<string, unknown>;
    constructor(message: string | undefined, args: PrismicErrorArgs);
}

interface ForbiddenErrorRepositoryAPIResponse {
    type: string;
    message: string;
    oauth_initiate: string;
    oauth_token: string;
}
interface ForbiddenErrorQueryAPIResponse {
    error: string;
    oauth_initiate: string;
    oauth_token: string;
}
declare type ForbiddenErrorAPIResponse = ForbiddenErrorRepositoryAPIResponse | ForbiddenErrorQueryAPIResponse;
declare type ForbiddenErrorArgs = {
    url: string;
    response: ForbiddenErrorAPIResponse;
};
declare class ForbiddenError extends Error {
    url: string;
    oauth_initiate: string;
    oauth_token: string;
    constructor(message: string, args: ForbiddenErrorArgs);
}

interface ParsingErrorAPIResponse {
    type: "parsing-error";
    message: string;
    line: number;
    column: number;
    id: number;
    location: string;
}
declare type ParsingErrorArgs = {
    url: string;
    response: ParsingErrorAPIResponse;
};
declare class ParsingError extends Error {
    url: string;
    line: number;
    column: number;
    id: number;
    location: string;
    constructor(message: string, args: ParsingErrorArgs);
}

/**
 * The well-known name of the cookie used to store a Prismic preview session's ref.
 */
declare const preview = "io.prismic.preview";

declare const cookie_preview: typeof preview;
declare namespace cookie {
  export {
    cookie_preview as preview,
  };
}

export { BuildQueryURLArgs, Client, ClientConfig, FetchLike, ForbiddenError, Form, FormField, HttpRequestLike, Language, Ordering, ParsingError, PrismicError, Query, QueryParams, Ref, Repository, RequestInitLike, ResponseLike, Route, buildQueryURL, cookie, createClient, getEndpoint, predicate };
