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
import { EmbeddedModelSchema, FlattenedAssets, FlattenedPersons, GroupedTimestamp, MechanismEnum, Score } from './index';
/**
 * This is a specific model for related websites to an asset.
 * @export
 * @interface Website
 */
export interface Website {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Website
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof Website
     */
    id: string;
    /**
     *
     * @type {FlattenedAssets}
     * @memberof Website
     */
    assets?: FlattenedAssets;
    /**
     * this is the actual website url.
     * @type {string}
     * @memberof Website
     */
    url: string;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof Website
     */
    name: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    deleted?: GroupedTimestamp;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof Website
     */
    mechanisms?: {
        [key: string]: MechanismEnum;
    };
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof Website
     */
    interactions?: number;
    /**
     *
     * @type {FlattenedPersons}
     * @memberof Website
     */
    persons?: FlattenedPersons;
    /**
     *
     * @type {Score}
     * @memberof Website
     */
    score?: Score;
}
export declare function WebsiteFromJSON(json: any): Website;
export declare function WebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Website;
export declare function WebsiteToJSON(value?: Website | null): any;
