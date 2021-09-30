import * as prismicT from '@prismicio/types';
import { FieldConfigCreator } from '../types';
/**
 * Builds a GraphQL field configuration object for a Slices Custom Type field
 * (also known as a Slice zone). The resulting configuration object can be used
 * in a GraphQL type.
 *
 * This function registers a typepath for the field.
 *
 * @param path Path to the field.
 * @param schema Schema definition for the field.
 *
 * @returns GraphQL field configuration object.
 */
export declare const buildSlicesFieldConfig: FieldConfigCreator<prismicT.CustomTypeModelSliceZoneField>;
