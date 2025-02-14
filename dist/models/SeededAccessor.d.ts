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
import { EmbeddedModelSchema, FlattenedUserProfile } from './index';
/**
 * This is a pre-created accessor that simply takes an os id and an optional user(flattened)
 * @export
 * @interface SeededAccessor
 */
export interface SeededAccessor {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAccessor
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is an os id.
     * @type {string}
     * @memberof SeededAccessor
     */
    os: string;
    /**
     *
     * @type {FlattenedUserProfile}
     * @memberof SeededAccessor
     */
    user?: FlattenedUserProfile;
    /**
     * this is the share that the asset is apart of.
     * @type {string}
     * @memberof SeededAccessor
     */
    share: string;
}
export declare function SeededAccessorFromJSON(json: any): SeededAccessor;
export declare function SeededAccessorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAccessor;
export declare function SeededAccessorToJSON(value?: SeededAccessor | null): any;
