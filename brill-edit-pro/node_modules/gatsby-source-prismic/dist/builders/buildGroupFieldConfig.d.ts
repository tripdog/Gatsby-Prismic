import * as prismicT from '@prismicio/types';
import { FieldConfigCreator } from '../types';
/**
 * Builds a GraphQL field configuration object for a Group Custom Type field.
 * It creates a GraphQL List type using the Group field's individual fields.
 * Each field is converted to their own GraphQL configuration object.
 *
 * This function registers a typepath for the field.
 *
 * @param path Path to the field.
 * @param schema Schema definition for the field.
 *
 * @returns GraphQL field configuration object.
 */
export declare const buildGroupFieldConfig: FieldConfigCreator<prismicT.CustomTypeModelGroupField>;
