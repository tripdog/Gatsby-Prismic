import { FieldConfigCreator } from '../types';
/**
 * Builds a GraphQL field configuration object for a Custom Type field with an
 * unknown type. Because the type is unknown, a `JSON` field type is used as a
 * fallback type. The resulting configuration object can be used in a GraphQL
 * type.
 *
 * Use of this function will be reported to the user's Gatsby log. This informs
 * the user that the field will not act like other fields since its type is
 * unknown. This should only happen if a new Prismic field type is introduced
 * before this plugin supports it.
 *
 * This function registers a typepath for the field.
 *
 * @param path Path to the field.
 * @param schema Schema definition for the field.
 *
 * @returns GraphQL field configuration object.
 */
export declare const buildUnknownFieldConfig: FieldConfigCreator;
