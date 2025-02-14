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
import { DiscoveredAssets, EmbeddedModelSchema } from './index';
/**
 * This will return assets that were extracted from the html webpage. This will contain the original url so you can double check the results wtih the results you passed in, but it will remain in the same order that it was passed in if used within the /discover/discover/html/webpage endpoint.
 * @export
 * @interface DiscoveredHtmlWebpage
 */
export interface DiscoveredHtmlWebpage {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredHtmlWebpage
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {DiscoveredAssets}
     * @memberof DiscoveredHtmlWebpage
     */
    assets: DiscoveredAssets;
    /**
     *
     * @type {string}
     * @memberof DiscoveredHtmlWebpage
     */
    url: string;
}
export declare function DiscoveredHtmlWebpageFromJSON(json: any): DiscoveredHtmlWebpage;
export declare function DiscoveredHtmlWebpageFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredHtmlWebpage;
export declare function DiscoveredHtmlWebpageToJSON(value?: DiscoveredHtmlWebpage | null): any;
