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
import { AccessEnum, Asset, EmbeddedModelSchema, Seed, SeededDistributions, SeededUser } from './index';
/**
 * This is the incoming linkify model.
 *
 * if access is PRIVATE then please provide and array of users to enable the link for.
 * @export
 * @interface Linkify
 */
export interface Linkify {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Linkify
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Seed}
     * @memberof Linkify
     */
    seed?: Seed;
    /**
     *
     * @type {Asset}
     * @memberof Linkify
     */
    asset?: Asset;
    /**
     * this is an array of users.
     * @type {Array<SeededUser>}
     * @memberof Linkify
     */
    users?: Array<SeededUser>;
    /**
     *
     * @type {AccessEnum}
     * @memberof Linkify
     */
    access: AccessEnum;
    /**
     *
     * @type {SeededDistributions}
     * @memberof Linkify
     */
    distributions?: SeededDistributions;
}
export declare function LinkifyFromJSON(json: any): Linkify;
export declare function LinkifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Linkify;
export declare function LinkifyToJSON(value?: Linkify | null): any;
