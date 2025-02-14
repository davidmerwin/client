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
import { CodeAnalysis, EmbeddedModelSchema, ImageAnalysis } from './index';
/**
 * This the the MlAnalysis Object, that will go on a format.
 *
 * this will hold all the different analysis models!
 *
 * ** keep format just a uuid for now **
 * @export
 * @interface Analysis
 */
export interface Analysis {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Analysis
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {CodeAnalysis}
     * @memberof Analysis
     */
    code?: CodeAnalysis;
    /**
     *
     * @type {string}
     * @memberof Analysis
     */
    id: string;
    /**
     * this is a reference to the format that it belongs too.
     * @type {string}
     * @memberof Analysis
     */
    format: string;
    /**
     *
     * @type {ImageAnalysis}
     * @memberof Analysis
     */
    image?: ImageAnalysis;
}
export declare function AnalysisFromJSON(json: any): Analysis;
export declare function AnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): Analysis;
export declare function AnalysisToJSON(value?: Analysis | null): any;
