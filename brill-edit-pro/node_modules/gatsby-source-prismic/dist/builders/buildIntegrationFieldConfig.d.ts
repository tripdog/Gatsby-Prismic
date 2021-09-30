import { FieldConfigCreator } from '../types';
/**
 * Builds a GraphQL field configuration object for an Integration Fields Custom
 * Type field. It uses the `@link` extension to connect data to the field. Data
 * for each Integration Fields field is created as a separate node to allow
 * Gatsby to infer the fields and types. The resulting configuration object can
 * be used in a GraphQL type.
 *
 * This function registers a typepath for the field.
 *
 * @param path Path to the field.
 *
 * @returns GraphQL field configuration object.
 */
export declare const buildIntegrationFieldConfig: FieldConfigCreator;
