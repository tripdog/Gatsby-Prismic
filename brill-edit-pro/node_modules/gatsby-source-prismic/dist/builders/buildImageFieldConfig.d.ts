import * as prismicT from '@prismicio/types';
import { FieldConfigCreator } from '../types';
/**
 * Builds a GraphQL field configuration object for an Image Custom Type field.
 * If the field is configured to have thumbnails, a field-specific type is
 * created for them.
 *
 * This function registers a typepath for the field.
 *
 * @param path Path to the field.
 * @param schema Schema definition for the field.
 *
 * @returns GraphQL field configuration object.
 */
export declare const buildImageFieldConfig: FieldConfigCreator<prismicT.CustomTypeModelImageField>;
