/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EmbeddedModelSchema, SeededClassification, SeededFile, SeededFragment } from './index';
/**
 * This is seeded data that will be come a format.
 *
 * We will throw an Error if, 1) file and fragment are both defined, 2) file and fragment are both null.
 *
 * if this is being used within the /assets/create endpoint or the /{application}/create endpoint, we will not take the classificaiton into account, as it is only used in the syntax highlighting related endpoints.That being said if you do want to override your classification, please look at the metadata within the file or the fragment.
 * @export
 * @interface SeededFormat
 */
export interface SeededFormat {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {SeededFile}
     * @memberof SeededFormat
     */
    file?: SeededFile;
    /**
     *
     * @type {SeededFragment}
     * @memberof SeededFormat
     */
    fragment?: SeededFragment;
    /**
     *
     * @type {SeededClassification}
     * @memberof SeededFormat
     */
    classification?: SeededClassification;
}
export declare function SeededFormatFromJSON(json: any): SeededFormat;
export declare function SeededFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededFormat;
export declare function SeededFormatToJSON(value?: SeededFormat | null): any;
