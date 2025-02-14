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
import { EmbeddedModelSchema } from './index';
/**
 * These are all of the available event types that are permitted in an object pair notation.
 * @export
 * @interface TrackedAssetsEventIdentifierDescriptionPairs
 */
export interface TrackedAssetsEventIdentifierDescriptionPairs {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetsEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * A If the assets were searched
     * @type {string}
     * @memberof TrackedAssetsEventIdentifierDescriptionPairs
     */
    assetsSearched?: TrackedAssetsEventIdentifierDescriptionPairsAssetsSearchedEnum;
}
/**
* @export
* @enum {string}
*/
export declare enum TrackedAssetsEventIdentifierDescriptionPairsAssetsSearchedEnum {
    AssetsWereSearched = "assets_were_searched"
}
export declare function TrackedAssetsEventIdentifierDescriptionPairsFromJSON(json: any): TrackedAssetsEventIdentifierDescriptionPairs;
export declare function TrackedAssetsEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetsEventIdentifierDescriptionPairs;
export declare function TrackedAssetsEventIdentifierDescriptionPairsToJSON(value?: TrackedAssetsEventIdentifierDescriptionPairs | null): any;
