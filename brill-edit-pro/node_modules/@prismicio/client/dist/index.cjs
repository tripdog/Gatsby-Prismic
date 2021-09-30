'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const prismicH = require('@prismicio/helpers');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

const prismicH__namespace = /*#__PURE__*/_interopNamespace(prismicH);

const getEndpoint = (repositoryName) => `https://${repositoryName}.cdn.prismic.io/api/v2`;

const castArray = (a) => Array.isArray(a) ? a : [a];

const RENAMED_PARAMS = {
  accessToken: "access_token"
};
const castOrderingToString = (ordering) => typeof ordering === "string" ? ordering : [
  ordering.field,
  ordering.direction === "desc" ? ordering.direction : void 0
].filter(Boolean).join(" ");
const buildQueryURL = (endpoint, args) => {
  var _a;
  const { ref, predicates, ...params } = args;
  const url = new URL(`documents/search`, `${endpoint}/`);
  url.searchParams.set("ref", ref);
  if (predicates) {
    for (const predicate of castArray(predicates)) {
      url.searchParams.append("q", `[${predicate}]`);
    }
  }
  for (const k in params) {
    const name = (_a = RENAMED_PARAMS[k]) != null ? _a : k;
    let value = params[k];
    if (name === "orderings") {
      const scopedValue = params[name];
      if (scopedValue != null) {
        const v = castArray(scopedValue).map((ordering) => castOrderingToString(ordering)).join(",");
        value = `[${v}]`;
      }
    } else if (name === "routes") {
      if (typeof params[name] === "object") {
        value = JSON.stringify(castArray(params[name]));
      }
    }
    if (value != null) {
      url.searchParams.set(name, castArray(value).join(","));
    }
  }
  return url.toString();
};

const appendPredicates = (...predicates) => (objWithPredicates = {}) => ({
  ...objWithPredicates,
  predicates: [objWithPredicates.predicates || [], ...predicates].flat()
});

const readValue = (value) => {
  return value.replace(/%3B/g, ";");
};
const parse = (cookieString) => {
  const result = {};
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const parts = cookie.split("=");
    const value = parts.slice(1).join("=");
    const name = readValue(parts[0]).replace(/%3D/g, "=");
    result[name] = readValue(value);
  }
  return result;
};
const getAll = (cookieStore) => parse(cookieStore);
const getCookie = (name, cookieStore) => getAll(cookieStore)[name];

const isForbiddenErrorAPIResponse = (input) => {
  return typeof input === "object" && input !== null && ("error" in input || "message" in input) && "oauth_initiate" in input && "oauth_token" in input;
};
class ForbiddenError extends Error {
  constructor(message, args) {
    super(message);
    this.url = args.url;
    this.oauth_initiate = args.response.oauth_initiate;
    this.oauth_token = args.response.oauth_token;
  }
}

const isParsingErrorAPIResponse = (input) => {
  return typeof input === "object" && input !== null && "message" in input && "type" in input;
};
class ParsingError extends Error {
  constructor(message, args) {
    super(message);
    this.url = args.url;
    this.line = args.response.line;
    this.column = args.response.column;
    this.id = args.response.id;
    this.location = args.response.location;
  }
}

class PrismicError extends Error {
  constructor(message, args) {
    super(message || "An invalid API response was returned");
    this.url = args.url;
    this.response = args.response;
  }
}

const preview = "io.prismic.preview";

const cookie = /*#__PURE__*/Object.freeze({
	__proto__: null,
	preview: preview
});

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return `[${value.map(formatValue).join(", ")}]`;
  }
  if (typeof value === "string") {
    return `"${value}"`;
  }
  if (value instanceof Date) {
    return `${value.getTime()}`;
  }
  return `${value}`;
};
const pathWithArgsPredicate = (name) => {
  const fn = (path, ...args) => {
    const formattedArgs = args.map(formatValue).join(", ");
    const joiner = path && args.length ? ", " : "";
    return `[${name}(${path}${joiner}${formattedArgs})]`;
  };
  return fn;
};
const pathPredicate = (name) => {
  const predicateFn = pathWithArgsPredicate(name);
  const fn = (path) => {
    return predicateFn(path);
  };
  return fn;
};
const argsPredicate = (name) => {
  const predicateFn = pathWithArgsPredicate(name);
  const fn = (...args) => {
    return predicateFn("", ...args);
  };
  return fn;
};
const at = pathWithArgsPredicate("at");
const not = pathWithArgsPredicate("not");
const any = pathWithArgsPredicate("any");
const _in = pathWithArgsPredicate("in");
const fulltext = pathWithArgsPredicate("fulltext");
const has = pathPredicate("has");
const missing = pathPredicate("missing");
const similar = argsPredicate("similar");
const geopointNear = pathWithArgsPredicate("geopoint.near");
const numberLessThan = pathWithArgsPredicate("number.lt");
const numberGreaterThan = pathWithArgsPredicate("number.gt");
const numberInRange = pathWithArgsPredicate("number.inRange");
const dateAfter = pathWithArgsPredicate("date.after");
const dateBefore = pathWithArgsPredicate("date.before");
const dateBetween = pathWithArgsPredicate("date.between");
const dateDayOfMonth = pathWithArgsPredicate("date.day-of-month");
const dateDayOfMonthAfter = pathWithArgsPredicate("date.day-of-month-after");
const dateDayOfMonthBefore = pathWithArgsPredicate("date.day-of-month-before");
const dateDayOfWeek = pathWithArgsPredicate("date.day-of-week");
const dateDayOfWeekAfter = pathWithArgsPredicate("date.day-of-week-after");
const dateDayOfWeekBefore = pathWithArgsPredicate("date.day-of-week-before");
const dateMonth = pathWithArgsPredicate("date.month");
const dateMonthAfter = pathWithArgsPredicate("date.month-after");
const dateMonthBefore = pathWithArgsPredicate("date.month-before");
const dateYear = pathWithArgsPredicate("date.year");
const dateHour = pathWithArgsPredicate("date.hour");
const dateHourAfter = pathWithArgsPredicate("date.hour-after");
const dateHourBefore = pathWithArgsPredicate("date.hour-before");

const predicate = /*#__PURE__*/Object.freeze({
	__proto__: null,
	at: at,
	not: not,
	any: any,
	'in': _in,
	fulltext: fulltext,
	has: has,
	missing: missing,
	similar: similar,
	geopointNear: geopointNear,
	numberLessThan: numberLessThan,
	numberGreaterThan: numberGreaterThan,
	numberInRange: numberInRange,
	dateAfter: dateAfter,
	dateBefore: dateBefore,
	dateBetween: dateBetween,
	dateDayOfMonth: dateDayOfMonth,
	dateDayOfMonthAfter: dateDayOfMonthAfter,
	dateDayOfMonthBefore: dateDayOfMonthBefore,
	dateDayOfWeek: dateDayOfWeek,
	dateDayOfWeekAfter: dateDayOfWeekAfter,
	dateDayOfWeekBefore: dateDayOfWeekBefore,
	dateMonth: dateMonth,
	dateMonthAfter: dateMonthAfter,
	dateMonthBefore: dateMonthBefore,
	dateYear: dateYear,
	dateHour: dateHour,
	dateHourAfter: dateHourAfter,
	dateHourBefore: dateHourBefore
});

const createSimpleTTLCache = () => {
  const cache = new Map();
  return {
    get(key) {
      const cacheValue = cache.get(key);
      if (cacheValue) {
        if (new Date().getTime() < cacheValue.expiresAt) {
          return cacheValue.value;
        }
      }
    },
    set(key, value, ttl) {
      cache.set(key, { expiresAt: new Date().getTime() + ttl, value });
    }
  };
};
const MAX_PAGE_SIZE = 100;
const REPOSITORY_CACHE_TTL = 5e3;
var RefStateType;
(function(RefStateType2) {
  RefStateType2[RefStateType2["Master"] = 0] = "Master";
  RefStateType2[RefStateType2["ReleaseByID"] = 1] = "ReleaseByID";
  RefStateType2[RefStateType2["ReleaseByLabel"] = 2] = "ReleaseByLabel";
  RefStateType2[RefStateType2["Manual"] = 3] = "Manual";
})(RefStateType || (RefStateType = {}));
const typePredicate = (documentType) => at("document.type", documentType);
const tagsPredicate = (tags) => at("document.tags", tags);
const findRef = (refs, predicate2) => {
  const ref = refs.find((ref2) => predicate2(ref2));
  if (!ref) {
    throw new Error("Ref could not be found.");
  }
  return ref;
};
const createClient = (...args) => new Client(...args);
class Client {
  constructor(endpoint, options = {}) {
    this.query = this.get.bind(this);
    this.endpoint = endpoint;
    this.accessToken = options.accessToken;
    this.defaultParams = options.defaultParams;
    this.internalCache = createSimpleTTLCache();
    this.refMode = {
      type: 0,
      autoPreviewsEnabled: true
    };
    if (options.ref) {
      this.queryContentFromRef(options.ref);
    }
    if (typeof options.fetch === "function") {
      this.fetchFn = options.fetch;
    } else if (typeof globalThis.fetch === "function") {
      this.fetchFn = globalThis.fetch;
    } else {
      throw new Error("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.");
    }
    if (this.fetchFn === globalThis.fetch) {
      this.fetchFn = this.fetchFn.bind(globalThis);
    }
  }
  enableAutoPreviews() {
    this.refMode.autoPreviewsEnabled = true;
  }
  enableAutoPreviewsFromReq(req) {
    this.refMode.httpRequest = req;
    this.refMode.autoPreviewsEnabled = true;
  }
  disableAutoPreviews() {
    this.refMode.autoPreviewsEnabled = false;
  }
  async get(params) {
    const url = await this.buildQueryURL(params);
    return await this.fetch(url);
  }
  async getFirst(params) {
    const result = await this.get(params);
    const firstResult = result.results[0];
    if (firstResult) {
      return firstResult;
    }
    throw new Error("No documents were returned");
  }
  async getAll(params = {}) {
    const { limit = Infinity, ...actualParams } = params;
    const resolvedParams = { pageSize: MAX_PAGE_SIZE, ...actualParams };
    const result = await this.get(resolvedParams);
    let page = result.page;
    let documents = result.results;
    while (page < result.total_pages && documents.length < limit) {
      page += 1;
      const result2 = await this.get({ ...resolvedParams, page });
      documents = [...documents, ...result2.results];
    }
    return documents.slice(0, limit);
  }
  async getByID(id, params) {
    return await this.getFirst(appendPredicates(at("document.id", id))(params));
  }
  async getByIDs(ids, params) {
    return await this.get(appendPredicates(_in("document.id", ids))(params));
  }
  async getAllByIDs(ids, params) {
    return await this.getAll(appendPredicates(_in("document.id", ids))(params));
  }
  async getByUID(documentType, uid, params) {
    return await this.getFirst(appendPredicates(typePredicate(documentType), at(`my.${documentType}.uid`, uid))(params));
  }
  async getSingle(documentType, params) {
    return await this.getFirst(appendPredicates(typePredicate(documentType))(params));
  }
  async getByType(documentType, params) {
    return await this.get(appendPredicates(typePredicate(documentType))(params));
  }
  async getAllByType(documentType, params) {
    return await this.getAll(appendPredicates(typePredicate(documentType))(params));
  }
  async getByTag(tag, params) {
    return await this.get(appendPredicates(tagsPredicate(tag))(params));
  }
  async getAllByTag(tag, params) {
    return await this.getAll(appendPredicates(tagsPredicate(tag))(params));
  }
  async getByTags(tags, params) {
    return await this.get(appendPredicates(tagsPredicate(tags))(params));
  }
  async getAllByTags(tags, params) {
    return await this.getAll(appendPredicates(tagsPredicate(tags))(params));
  }
  async getRepository() {
    const url = new URL(this.endpoint);
    if (this.accessToken) {
      url.searchParams.set("access_token", this.accessToken);
    }
    return await this.fetch(url.toString());
  }
  async getRefs() {
    const res = await this.getRepository();
    return res.refs;
  }
  async getRefById(id) {
    const refs = await this.getRefs();
    return findRef(refs, (ref) => ref.id === id);
  }
  async getRefByLabel(label) {
    const refs = await this.getRefs();
    return findRef(refs, (ref) => ref.label === label);
  }
  async getMasterRef() {
    const refs = await this.getRefs();
    return findRef(refs, (ref) => ref.isMasterRef);
  }
  async getReleases() {
    const refs = await this.getRefs();
    return refs.filter((ref) => !ref.isMasterRef);
  }
  async getReleaseByID(id) {
    const releases = await this.getReleases();
    return findRef(releases, (ref) => ref.id === id);
  }
  async getReleaseByLabel(label) {
    const releases = await this.getReleases();
    return findRef(releases, (ref) => ref.label === label);
  }
  async getTags() {
    try {
      const tagsForm = await this.getCachedRepositoryForm("tags");
      return await this.fetch(tagsForm.action);
    } catch (e) {
      const res = await this.getRepository();
      return res.tags;
    }
  }
  async buildQueryURL(params = {}) {
    const {
      ref = await this.getResolvedRefString(),
      accessToken = this.accessToken,
      ...actualParams
    } = params;
    return buildQueryURL(this.endpoint, {
      ...this.defaultParams,
      ...actualParams,
      accessToken,
      ref
    });
  }
  async resolvePreviewURL(args) {
    var _a;
    let documentId = args.documentId;
    let previewToken = args.previewToken;
    if (typeof globalThis.location !== "undefined") {
      const searchParams = new URLSearchParams(globalThis.location.search);
      documentId = documentId || searchParams.get("documentId") || void 0;
      previewToken = previewToken || searchParams.get("token") || void 0;
    } else if ((_a = this.refMode.httpRequest) == null ? void 0 : _a.query) {
      if (typeof this.refMode.httpRequest.query.documentId === "string") {
        documentId = documentId || this.refMode.httpRequest.query.documentId;
      }
      if (typeof this.refMode.httpRequest.query.token === "string") {
        previewToken = previewToken || this.refMode.httpRequest.query.token;
      }
    }
    if (documentId != null) {
      const document = await this.getByID(documentId, {
        ref: previewToken
      });
      return prismicH__namespace.asLink(prismicH__namespace.documentToLinkField(document), args.linkResolver);
    } else {
      return args.defaultURL;
    }
  }
  queryLatestContent() {
    this.refMode = {
      ...this.refMode,
      type: 0
    };
  }
  queryContentFromReleaseByID(releaseId) {
    this.refMode = {
      ...this.refMode,
      type: 1,
      payload: { releaseId }
    };
  }
  queryContentFromReleaseByLabel(releaseLabel) {
    this.refMode = {
      ...this.refMode,
      type: 2,
      payload: { releaseLabel }
    };
  }
  queryContentFromRef(ref) {
    this.refMode = {
      ...this.refMode,
      type: 3,
      payload: { refStringOrFn: ref }
    };
  }
  async getCachedRepository() {
    const cacheKey = this.endpoint;
    const cachedRepository = this.internalCache.get(cacheKey);
    if (cachedRepository) {
      return cachedRepository;
    }
    const repository = await this.getRepository();
    this.internalCache.set(cacheKey, repository, REPOSITORY_CACHE_TTL);
    return repository;
  }
  async getCachedRepositoryForm(name) {
    const cachedRepository = await this.getCachedRepository();
    const form = cachedRepository.forms[name];
    if (!form) {
      throw new Error(`Form with name "${name}" could not be found`);
    }
    return form;
  }
  getPreviewRefString() {
    var _a, _b, _c;
    if ((_a = globalThis.document) == null ? void 0 : _a.cookie) {
      return getCookie(preview, globalThis.document.cookie);
    } else if ((_c = (_b = this.refMode.httpRequest) == null ? void 0 : _b.headers) == null ? void 0 : _c.cookie) {
      return getCookie(preview, this.refMode.httpRequest.headers.cookie);
    }
  }
  async getResolvedRefString() {
    if (this.refMode.autoPreviewsEnabled) {
      const previewRef = this.getPreviewRefString();
      if (previewRef) {
        return previewRef;
      }
    }
    switch (this.refMode.type) {
      case 1: {
        const releaseId = this.refMode.payload.releaseId;
        const repository = await this.getCachedRepository();
        const ref = findRef(repository.refs, (ref2) => ref2.id === releaseId);
        return ref.ref;
      }
      case 2: {
        const releaseLabel = this.refMode.payload.releaseLabel;
        const repository = await this.getCachedRepository();
        const ref = findRef(repository.refs, (ref2) => ref2.label === releaseLabel);
        return ref.ref;
      }
      case 3: {
        const thisRefStringOrFn = this.refMode.payload.refStringOrFn;
        if (typeof thisRefStringOrFn === "function") {
          const res = await thisRefStringOrFn();
          if (typeof res === "string") {
            return res;
          }
        } else if (thisRefStringOrFn) {
          return thisRefStringOrFn;
        }
      }
      case 0:
      default: {
        const repository = await this.getCachedRepository();
        const ref = findRef(repository.refs, (ref2) => ref2.isMasterRef);
        return ref.ref;
      }
    }
  }
  async fetch(url) {
    const res = await this.fetchFn(url);
    let json;
    try {
      json = await res.json();
    } catch (e) {
      throw new PrismicError(void 0, { url });
    }
    switch (res.status) {
      case 200: {
        return json;
      }
      case 400: {
        if (isParsingErrorAPIResponse(json)) {
          throw new ParsingError(json.message, {
            url,
            response: json
          });
        }
        break;
      }
      case 401:
      case 403: {
        if (isForbiddenErrorAPIResponse(json)) {
          throw new ForbiddenError("error" in json ? json.error : json.message, {
            url,
            response: json
          });
        }
      }
    }
    throw new PrismicError(void 0, { url, response: json });
  }
}

exports.Client = Client;
exports.ForbiddenError = ForbiddenError;
exports.ParsingError = ParsingError;
exports.PrismicError = PrismicError;
exports.buildQueryURL = buildQueryURL;
exports.cookie = cookie;
exports.createClient = createClient;
exports.getEndpoint = getEndpoint;
exports.predicate = predicate;
