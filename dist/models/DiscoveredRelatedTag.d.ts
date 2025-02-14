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
import { EmbeddedModelSchema, SeededTag } from './index';
/**
 *
 * @export
 * @interface DiscoveredRelatedTag
 */
export interface DiscoveredRelatedTag {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredRelatedTag
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {SeededTag}
     * @memberof DiscoveredRelatedTag
     */
    seed: SeededTag;
}
export declare function DiscoveredRelatedTagFromJSON(json: any): DiscoveredRelatedTag;
export declare function DiscoveredRelatedTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredRelatedTag;
export declare function DiscoveredRelatedTagToJSON(value?: DiscoveredRelatedTag | null): any;
