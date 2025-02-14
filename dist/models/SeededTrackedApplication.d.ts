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
import { ApplicationNameEnum, CapabilitiesEnum, EmbeddedModelSchema, PlatformEnum, PrivacyEnum } from './index';
/**
 * A Model to describe what application a format/analytics event originated - Specifically NOT requiring an ID
 * @export
 * @interface SeededTrackedApplication
 */
export interface SeededTrackedApplication {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedApplication
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {ApplicationNameEnum}
     * @memberof SeededTrackedApplication
     */
    name: ApplicationNameEnum;
    /**
     * This is the specific version number 0.0.0
     * @type {string}
     * @memberof SeededTrackedApplication
     */
    version: string;
    /**
     *
     * @type {PlatformEnum}
     * @memberof SeededTrackedApplication
     */
    platform: PlatformEnum;
    /**
     *
     * @type {CapabilitiesEnum}
     * @memberof SeededTrackedApplication
     */
    capabilities?: CapabilitiesEnum;
    /**
     *
     * @type {PrivacyEnum}
     * @memberof SeededTrackedApplication
     */
    privacy?: PrivacyEnum;
    /**
     * This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false.
     * @type {boolean}
     * @memberof SeededTrackedApplication
     */
    automaticUnload?: boolean;
}
export declare function SeededTrackedApplicationFromJSON(json: any): SeededTrackedApplication;
export declare function SeededTrackedApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedApplication;
export declare function SeededTrackedApplicationToJSON(value?: SeededTrackedApplication | null): any;
