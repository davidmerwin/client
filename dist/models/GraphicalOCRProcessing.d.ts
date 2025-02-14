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
import { EmbeddedModelSchema, GraphicalOCRStatistics } from './index';
/**
 *
 * @export
 * @interface GraphicalOCRProcessing
 */
export interface GraphicalOCRProcessing {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalOCRProcessing
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {GraphicalOCRStatistics}
     * @memberof GraphicalOCRProcessing
     */
    statistics?: GraphicalOCRStatistics;
}
export declare function GraphicalOCRProcessingFromJSON(json: any): GraphicalOCRProcessing;
export declare function GraphicalOCRProcessingFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalOCRProcessing;
export declare function GraphicalOCRProcessingToJSON(value?: GraphicalOCRProcessing | null): any;
