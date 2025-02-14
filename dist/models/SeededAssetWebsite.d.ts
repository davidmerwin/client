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
import { EmbeddedModelSchema, MechanismEnum } from './index';
/**
 * This is similar to an SeededWebsite, where this is the minimum information of a website, but this can get added to a seededAsset,  where you may not yet have an asset id.
 * @export
 * @interface SeededAssetWebsite
 */
export interface SeededAssetWebsite {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAssetWebsite
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof SeededAssetWebsite
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof SeededAssetWebsite
     */
    name: string;
    /**
     *
     * @type {MechanismEnum}
     * @memberof SeededAssetWebsite
     */
    mechanism?: MechanismEnum;
}
export declare function SeededAssetWebsiteFromJSON(json: any): SeededAssetWebsite;
export declare function SeededAssetWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetWebsite;
export declare function SeededAssetWebsiteToJSON(value?: SeededAssetWebsite | null): any;
