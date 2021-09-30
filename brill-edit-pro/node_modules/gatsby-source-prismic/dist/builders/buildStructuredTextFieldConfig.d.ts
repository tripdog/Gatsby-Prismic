import { FieldConfigCreator } from '../types';
/**
 * Builds a GraphQL field configuration object for a StructuredText Custom Type
 * field. This is used for Rich Text and Title fields. The resulting
 * configuration object can be used in a GraphQL type.
 *
 * This function registers a typepath for the field.
 *
 * @param path Path to the field.
 *
 * @returns GraphQL field configuration object.
 */
export declare const buildStructuredTextFieldConfig: FieldConfigCreator;
