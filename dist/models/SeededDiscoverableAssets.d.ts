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
import { EmbeddedModelSchema, SeededDiscoverableAsset, TLPDirectedDiscoveryFilters } from './index';
/**
 * Assumption: filters imposed in this model can be overwritten by passing them in SeededDiscoverableAsset
 * @export
 * @interface SeededDiscoverableAssets
 */
export interface SeededDiscoverableAssets {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableAssets
     */
    schema?: EmbeddedModelSchema;
    /**
     * application id.
     * @type {string}
     * @memberof SeededDiscoverableAssets
     */
    application: string;
    /**
     * This is an iterable of already snippitized snippets that we will compare && cluster.
     * @type {Array<SeededDiscoverableAsset>}
     * @memberof SeededDiscoverableAssets
     */
    iterable: Array<SeededDiscoverableAsset>;
    /**
     *
     * @type {TLPDirectedDiscoveryFilters}
     * @memberof SeededDiscoverableAssets
     */
    filters?: TLPDirectedDiscoveryFilters;
}
export declare function SeededDiscoverableAssetsFromJSON(json: any): SeededDiscoverableAssets;
export declare function SeededDiscoverableAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableAssets;
export declare function SeededDiscoverableAssetsToJSON(value?: SeededDiscoverableAssets | null): any;
